import React, { useState, useEffect } from 'react';
import { GeneratedExam, Question } from '../types';
import { 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Flag, 
  Send, 
  RotateCcw, 
  ArrowLeft, 
  Award, 
  Sparkles, 
  CheckSquare, 
  BookOpen 
} from 'lucide-react';

interface OnlineExamRunnerProps {
  exam: GeneratedExam;
  onExit: () => void;
}

export const OnlineExamRunner: React.FC<OnlineExamRunnerProps> = ({
  exam,
  onExit
}) => {
  const totalSeconds = (exam.config.timeLimitMinutes || 20) * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
  const [activeSection, setActiveSection] = useState<'A' | 'B' | 'C'>(
    exam.sectionA.questions.length > 0 ? 'A' : exam.sectionB.questions.length > 0 ? 'B' : 'C'
  );

  // User State
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, 'a' | 'b' | 'c' | 'd'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [selfScoreB, setSelfScoreB] = useState<Record<string, number>>({});
  const [selfScoreC, setSelfScoreC] = useState<Record<string, number>>({});
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  // Timer Effect
  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  // Format Time Remaining
  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (hours > 0) {
      return `${hours}h ${mins.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
    }
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (qId: string, opt: 'a' | 'b' | 'c' | 'd') => {
    if (isSubmitted) return;
    setMcqAnswers((prev) => ({
      ...prev,
      [qId]: opt
    }));
  };

  const toggleFlag = (qId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Section A Scoring Calculation
  const mcqTotal = exam.sectionA.questions.length;
  let mcqCorrectCount = 0;
  exam.sectionA.questions.forEach((q) => {
    if (mcqAnswers[q.id] === q.correctOption) {
      mcqCorrectCount++;
    }
  });
  const mcqScore = mcqCorrectCount * 1;

  // Section B & C Self Score Calculation
  const sectionBScore = Object.values(selfScoreB).reduce((a, b) => a + b, 0);
  const sectionCScore = Object.values(selfScoreC).reduce((a, b) => a + b, 0);

  const finalEarnedMarks = mcqScore + sectionBScore + sectionCScore;
  const finalTotalMarks = exam.totalMarks;
  const percentage = Math.round((finalEarnedMarks / (finalTotalMarks || 60)) * 100);

  const getGrade = (pct: number) => {
    if (pct >= 80) return { grade: 'A-1 (Outstanding)', color: 'text-emerald-700 bg-emerald-100' };
    if (pct >= 70) return { grade: 'A (Excellent)', color: 'text-teal-700 bg-teal-100' };
    if (pct >= 60) return { grade: 'B (Good)', color: 'text-blue-700 bg-blue-100' };
    if (pct >= 50) return { grade: 'C (Fair)', color: 'text-amber-700 bg-amber-100' };
    if (pct >= 40) return { grade: 'D (Pass)', color: 'text-orange-700 bg-orange-100' };
    if (pct >= 33) return { grade: 'E (Minimum Pass)', color: 'text-yellow-700 bg-yellow-100' };
    return { grade: 'Fail (<33%)', color: 'text-rose-700 bg-rose-100' };
  };

  const gradeInfo = getGrade(percentage);

  return (
    <div className="space-y-6">
      {/* Top Floating Control Bar */}
      <div className="sticky top-2 z-40 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            title="Exit Exam"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              {exam.title}
            </h2>
            <span className="text-xs text-slate-500">
              BSEK / BISE Sindh Pattern • Total: {exam.totalMarks} Marks
            </span>
          </div>
        </div>

        {/* Timer Box */}
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-sm font-bold border transition-colors ${
              secondsRemaining < 300 && !isSubmitted
                ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}
          >
            <Clock className="w-4 h-4 text-emerald-700" />
            <span>{isSubmitted ? 'Exam Finished' : formatTime(secondsRemaining)}</span>
          </div>

          {!isSubmitted ? (
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Exam</span>
            </button>
          ) : (
            <button
              onClick={onExit}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
            >
              Back to Studio
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Submit Your Exam Paper?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You have answered {Object.keys(mcqAnswers).length} out of {exam.sectionA.questions.length} MCQs in Section A. 
              Once submitted, you will receive your instant score breakdown, board grade, and complete marking scheme.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
              >
                Continue Exam
              </button>
              <button
                onClick={() => {
                  setShowConfirmSubmit(false);
                  setIsSubmitted(true);
                }}
                className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Section Switcher Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-bold">
        {exam.sectionA.questions.length > 0 && (
          <button
            onClick={() => setActiveSection('A')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-2 ${
              activeSection === 'A'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>Section A (MCQs)</span>
            <span className={`px-2 py-0.5 rounded-full text-2xs ${activeSection === 'A' ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-100'}`}>
              {Object.keys(mcqAnswers).length}/{exam.sectionA.questions.length}
            </span>
          </button>
        )}

        {exam.sectionB.questions.length > 0 && (
          <button
            onClick={() => setActiveSection('B')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-2 ${
              activeSection === 'B'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>Section B (Short Qs)</span>
            <span className={`px-2 py-0.5 rounded-full text-2xs ${activeSection === 'B' ? 'bg-blue-800 text-blue-100' : 'bg-slate-100'}`}>
              {exam.sectionB.attemptCount} of {exam.sectionB.questions.length}
            </span>
          </button>
        )}

        {exam.sectionC.questions.length > 0 && (
          <button
            onClick={() => setActiveSection('C')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-2 ${
              activeSection === 'C'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>Section C (Detailed Qs)</span>
            <span className={`px-2 py-0.5 rounded-full text-2xs ${activeSection === 'C' ? 'bg-purple-800 text-purple-100' : 'bg-slate-100'}`}>
              {exam.sectionC.attemptCount} of {exam.sectionC.questions.length}
            </span>
          </button>
        )}
      </div>

      {/* RESULT REPORT BANNER (When Submitted) */}
      {isSubmitted && (
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-500/30 animate-in fade-in duration-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Award className="w-5 h-5 text-amber-300" />
                Official Sindh Board Mock Result Card
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif mt-1">
                Score: {finalEarnedMarks} / {finalTotalMarks} ({percentage}%)
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Class IX Biology • Candidate Assessment according to Sindh Board Rubric
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className={`px-4 py-2 rounded-xl text-center font-bold text-xs uppercase ${gradeInfo.color}`}>
                <span className="block text-2xs opacity-75">Board Grade</span>
                <span className="text-sm font-black">{gradeInfo.grade}</span>
              </div>

              <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-center">
                <span className="text-2xs text-slate-300 block">MCQ Accuracy</span>
                <span className="text-lg font-bold text-emerald-300">
                  {mcqCorrectCount} / {mcqTotal}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT DISPLAY */}
      {/* SECTION A: MCQS */}
      {activeSection === 'A' && exam.sectionA.questions.length > 0 && (
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 flex items-center justify-between">
            <div>
              <span className="font-bold block text-sm">Section 'A' (Multiple Choice Questions)</span>
              <span>12 Compulsory Questions • 1 Mark each • No negative marking</span>
            </div>
            <span className="font-bold text-emerald-800 bg-emerald-200 px-3 py-1 rounded-lg">
              Answered: {Object.keys(mcqAnswers).length} / {exam.sectionA.questions.length}
            </span>
          </div>

          <div className="space-y-4">
            {exam.sectionA.questions.map((q, index) => {
              const selectedOpt = mcqAnswers[q.id];
              const isFlagged = flaggedQuestions[q.id];
              const isCorrect = q.correctOption === selectedOpt;

              return (
                <div
                  key={q.id}
                  className={`bg-white border rounded-2xl p-5 shadow-xs transition-all ${
                    isSubmitted
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : selectedOpt
                        ? 'border-rose-300 bg-rose-50/20'
                        : 'border-slate-200'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Chapter {q.chapterNo}: {q.chapterTitle}
                      </span>
                    </div>

                    {!isSubmitted && (
                      <button
                        onClick={() => toggleFlag(q.id)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium flex items-center gap-1 transition-colors ${
                          isFlagged
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Flag className="w-3.5 h-3.5" />
                        <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
                      </button>
                    )}

                    {isSubmitted && (
                      <div className="text-xs font-bold">
                        {isCorrect ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" /> +1 Mark
                          </span>
                        ) : selectedOpt ? (
                          <span className="text-rose-600 flex items-center gap-1">
                            <XCircle className="w-4 h-4" /> 0 Marks
                          </span>
                        ) : (
                          <span className="text-slate-400">Unattempted (0)</span>
                        )}
                      </div>
                    )}
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                    {q.questionText}
                  </h4>

                  {/* Options */}
                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(['a', 'b', 'c', 'd'] as const).map((opt) => {
                        const optText = q.options![opt];
                        const isChosen = selectedOpt === opt;
                        const isThisCorrect = q.correctOption === opt;

                        let btnStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700';

                        if (isSubmitted) {
                          if (isThisCorrect) {
                            btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-500';
                          } else if (isChosen && !isThisCorrect) {
                            btnStyle = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                          } else {
                            btnStyle = 'opacity-60 border-slate-200 bg-slate-50 text-slate-500';
                          }
                        } else if (isChosen) {
                          btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500';
                        }

                        return (
                          <button
                            key={opt}
                            disabled={isSubmitted}
                            onClick={() => handleSelectOption(q.id, opt)}
                            className={`p-3 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-2.5 transition-all ${btnStyle}`}
                          >
                            <span
                              className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-xs uppercase shrink-0 ${
                                isChosen
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {opt}
                            </span>
                            <span className="flex-1 leading-snug">{optText}</span>
                            {isSubmitted && isThisCorrect && (
                              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation after submit */}
                  {isSubmitted && q.explanation && (
                    <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                      <strong className="block mb-0.5">Textbook Explanation:</strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION B: SHORT QUESTIONS */}
      {activeSection === 'B' && exam.sectionB.questions.length > 0 && (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex items-center justify-between">
            <div>
              <span className="font-bold block text-sm">Section 'B' (Short Answer Questions)</span>
              <span>Attempt any 6 out of 9 questions • 4 Marks each (Total 24 Marks)</span>
            </div>
            <span className="font-bold text-blue-800 bg-blue-200 px-3 py-1 rounded-lg">
              Target: 6 Questions
            </span>
          </div>

          <div className="space-y-4">
            {exam.sectionB.questions.map((q, index) => (
              <div
                key={q.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                    Question {index + 1} • Chapter {q.chapterNo} ({q.subtype})
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    4 Marks
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {q.questionText}
                </h4>

                {/* Candidate Workspace / Notes */}
                {!isSubmitted && (
                  <div>
                    <label className="text-2xs font-bold uppercase text-slate-400 block mb-1">
                      Type your answer notes / key bullet points:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Write your points, differences, or scientific explanation..."
                      value={studentNotes[q.id] || ''}
                      onChange={(e) =>
                        setStudentNotes({ ...studentNotes, [q.id]: e.target.value })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                )}

                {/* After Submission: Self Grading Rubric */}
                {isSubmitted && (
                  <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-900">Sindh Board Model Solution:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xs font-semibold text-slate-600">Self-Award Marks:</span>
                        {[0, 1, 2, 3, 4].map((m) => (
                          <button
                            key={m}
                            onClick={() => setSelfScoreB({ ...selfScoreB, [q.id]: m })}
                            className={`w-6 h-6 rounded-md font-bold text-xs transition-colors ${
                              selfScoreB[q.id] === m
                                ? 'bg-blue-700 text-white shadow-xs'
                                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    {q.tabulatedData ? (
                      <div className="overflow-x-auto rounded-lg border border-blue-200 bg-white">
                        <table className="w-full text-left text-2xs border-collapse">
                          <thead>
                            <tr className="bg-blue-100 text-blue-900 font-bold border-b border-blue-200">
                              <th className="p-2">Parameter</th>
                              <th className="p-2 border-x border-blue-200">{q.tabulatedData.titleA}</th>
                              <th className="p-2">{q.tabulatedData.titleB}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {q.tabulatedData.rows.map((r, rIdx) => (
                              <tr key={rIdx} className="border-b border-blue-50">
                                <td className="p-2 font-semibold text-slate-700">{r.parameter}</td>
                                <td className="p-2 border-x border-blue-50">{r.itemA}</td>
                                <td className="p-2">{r.itemB}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="whitespace-pre-line text-slate-800 leading-relaxed font-sans bg-white p-3 rounded-lg border border-blue-100">
                        {q.modelAnswer}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION C: DETAILED QUESTIONS */}
      {activeSection === 'C' && exam.sectionC.questions.length > 0 && (
        <div className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs text-purple-900 flex items-center justify-between">
            <div>
              <span className="font-bold block text-sm">Section 'C' (Detailed Answer Questions)</span>
              <span>Attempt any 2 out of 4 questions • 12 Marks each (Total 24 Marks)</span>
            </div>
            <span className="font-bold text-purple-800 bg-purple-200 px-3 py-1 rounded-lg">
              Target: 2 Questions
            </span>
          </div>

          <div className="space-y-4">
            {exam.sectionC.questions.map((q, index) => (
              <div
                key={q.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                    Question {index + 1} • Chapter {q.chapterNo}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    12 Marks
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {q.questionText}
                </h4>

                {q.diagramNote && (
                  <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-2xs text-amber-900">
                    <strong>Diagram Requirement: </strong> {q.diagramNote}
                  </div>
                )}

                {/* Candidate Workspace / Notes */}
                {!isSubmitted && (
                  <div>
                    <label className="text-2xs font-bold uppercase text-slate-400 block mb-1">
                      Candidate Answer Outline & Major Headings:
                    </label>
                    <textarea
                      rows={4}
                      placeholder="List main headings, physiological mechanisms, or diagram labels..."
                      value={studentNotes[q.id] || ''}
                      onChange={(e) =>
                        setStudentNotes({ ...studentNotes, [q.id]: e.target.value })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-hidden"
                    />
                  </div>
                )}

                {/* After Submission: Self Grading Rubric */}
                {isSubmitted && (
                  <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 space-y-3 text-xs">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="font-bold text-purple-900">12-Mark Model Solution & Rubric:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-2xs font-semibold text-slate-600">Award:</span>
                        {[0, 3, 6, 8, 10, 12].map((m) => (
                          <button
                            key={m}
                            onClick={() => setSelfScoreC({ ...selfScoreC, [q.id]: m })}
                            className={`px-2 py-1 rounded-md font-bold text-xs transition-colors ${
                              selfScoreC[q.id] === m
                                ? 'bg-purple-700 text-white shadow-xs'
                                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {m}m
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="whitespace-pre-line text-slate-800 leading-relaxed font-sans bg-white p-3 rounded-lg border border-purple-100">
                      {q.modelAnswer}
                    </div>

                    {q.keyPoints && (
                      <div className="text-2xs text-purple-900">
                        <strong>Examiner Essential Headings: </strong> {q.keyPoints.join(' • ')}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

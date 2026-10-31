import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  Award,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Flag,
  RotateCcw,
  Send,
  XCircle,
} from 'lucide-react';
import { GeneratedExam, Question } from '../types';

interface OnlineExamRunnerProps {
  exam: GeneratedExam;
  onExit: () => void;
}

const optionKeys = ['a', 'b', 'c', 'd'] as const;

type OptionKey = (typeof optionKeys)[number];

export const OnlineExamRunner: React.FC<OnlineExamRunnerProps> = ({ exam, onExit }) => {
  const totalSeconds = (exam.config.timeLimitMinutes || 20) * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
  const [activeSection, setActiveSection] = useState<'A' | 'B' | 'C'>(
    exam.sectionA.questions.length > 0 ? 'A' : exam.sectionB.questions.length > 0 ? 'B' : 'C'
  );
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, OptionKey>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [selfScoreB, setSelfScoreB] = useState<Record<string, number>>({});
  const [selfScoreC, setSelfScoreC] = useState<Record<string, number>>({});
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  useEffect(() => {
    if (isSubmitted) return;
    const interval = window.setInterval(() => {
      setSecondsRemaining((previous) => {
        if (previous <= 1) {
          window.clearInterval(interval);
          setIsSubmitted(true);
          return 0;
        }
        return previous - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [isSubmitted]);

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    return hours > 0
      ? `${hours}h ${mins.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
      : `${mins.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (qId: string, option: OptionKey) => {
    if (isSubmitted) return;
    setMcqAnswers((previous) => ({ ...previous, [qId]: option }));
  };

  const toggleFlag = (qId: string) => {
    if (isSubmitted) return;
    setFlaggedQuestions((previous) => ({ ...previous, [qId]: !previous[qId] }));
  };

  const mcqCorrectCount = useMemo(
    () => exam.sectionA.questions.filter((q) => mcqAnswers[q.id] === q.correctOption).length,
    [exam.sectionA.questions, mcqAnswers]
  );
  const answeredMcqs = Object.keys(mcqAnswers).length;
  const mcqTotal = exam.sectionA.questions.length;
  const mcqMistakes = exam.sectionA.questions.filter(
    (q) => mcqAnswers[q.id] && mcqAnswers[q.id] !== q.correctOption
  );
  const sectionBScore = Object.values(selfScoreB).reduce((sum, value) => sum + value, 0);
  const sectionCScore = Object.values(selfScoreC).reduce((sum, value) => sum + value, 0);
  const finalEarnedMarks = mcqCorrectCount + sectionBScore + sectionCScore;
  const percentage = Math.round((finalEarnedMarks / (exam.totalMarks || 60)) * 100);

  const getGrade = (pct: number) => {
    if (pct >= 80) return { grade: 'A-1 (Outstanding)', className: 'text-emerald-700 bg-emerald-100' };
    if (pct >= 70) return { grade: 'A (Excellent)', className: 'text-teal-700 bg-teal-100' };
    if (pct >= 60) return { grade: 'B (Good)', className: 'text-blue-700 bg-blue-100' };
    if (pct >= 50) return { grade: 'C (Fair)', className: 'text-amber-700 bg-amber-100' };
    if (pct >= 40) return { grade: 'D (Pass)', className: 'text-orange-700 bg-orange-100' };
    if (pct >= 33) return { grade: 'E (Minimum Pass)', className: 'text-yellow-700 bg-yellow-100' };
    return { grade: 'Fail (<33%)', className: 'text-rose-700 bg-rose-100' };
  };

  const gradeInfo = getGrade(percentage);

  const setSelfScore = (section: 'B' | 'C', id: string, score: number) => {
    if (isSubmitted) return;
    if (section === 'B') setSelfScoreB((previous) => ({ ...previous, [id]: score }));
    else setSelfScoreC((previous) => ({ ...previous, [id]: score }));
  };

  const renderQuestionAnswer = (question: Question, section: 'B' | 'C') => {
    const scores = section === 'B' ? selfScoreB : selfScoreC;
    const currentScore = scores[question.id] ?? 0;
    const maxScore = section === 'B' ? exam.sectionB.perQuestionMarks : exam.sectionC.perQuestionMarks;
    const expanded = expandedAnswers[question.id] ?? false;

    return (
      <div className="mt-4 space-y-3">
        <button
          type="button"
          onClick={() => setExpandedAnswers((previous) => ({ ...previous, [question.id]: !expanded }))}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? 'Hide Model Answer' : 'Show Model Answer'}
        </button>

        {expanded && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800 whitespace-pre-line">
            {question.modelAnswer}
            {question.keyPoints?.length ? (
              <ul className="mt-3 list-disc list-inside text-xs text-slate-600 space-y-1">
                {question.keyPoints.map((point, index) => <li key={index}>{point}</li>)}
              </ul>
            ) : null}
          </div>
        )}

        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-700">Self-check marks</span>
            <span className="text-xs font-bold text-emerald-700">{currentScore}/{maxScore}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {Array.from({ length: maxScore + 1 }, (_, score) => (
              <button
                key={score}
                type="button"
                disabled={isSubmitted}
                onClick={() => setSelfScore(section, question.id, score)}
                className={`min-w-8 px-2 py-1.5 rounded-lg text-xs font-bold border ${currentScore === score ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
              >
                {score}
              </button>
            ))}
          </div>
        </div>

        <textarea
          value={studentNotes[question.id] || ''}
          onChange={(event) => setStudentNotes((previous) => ({ ...previous, [question.id]: event.target.value }))}
          disabled={isSubmitted}
          placeholder="Optional revision note..."
          className="w-full min-h-20 resize-y rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
    );
  };

  const resetExam = () => {
    setSecondsRemaining(totalSeconds);
    setMcqAnswers({});
    setFlaggedQuestions({});
    setSelfScoreB({});
    setSelfScoreC({});
    setStudentNotes({});
    setExpandedAnswers({});
    setIsSubmitted(false);
    setShowConfirmSubmit(false);
  };

  return (
    <div className="space-y-5 overflow-x-hidden pb-8">
      <div className="sticky top-2 z-40 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <button onClick={onExit} className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 shrink-0" title="Exit Exam">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight truncate">{exam.title}</h2>
            <span className="text-[11px] text-slate-500">{exam.boardName} • {exam.totalMarks} Marks</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            Score: {mcqCorrectCount}/{answeredMcqs} correct
          </div>
          <div className={`flex items-center gap-2 px-3 py-2 rounded-xl font-mono text-xs font-bold border ${secondsRemaining < 300 && !isSubmitted ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse' : 'bg-slate-100 border-slate-200 text-slate-800'}`}>
            <Clock className="w-4 h-4 text-emerald-700" />
            {isSubmitted ? 'Exam Finished' : formatTime(secondsRemaining)}
          </div>
          {!isSubmitted ? (
            <button onClick={() => setShowConfirmSubmit(true)} className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-2">
              <Send className="w-3.5 h-3.5" /> Submit Exam
            </button>
          ) : (
            <button onClick={resetExam} className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center gap-2">
              <RotateCcw className="w-3.5 h-3.5" /> Try Again
            </button>
          )}
        </div>
      </div>

      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center"><CheckCircle className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-slate-900">Submit Your Exam Paper?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">You have answered {answeredMcqs} of {mcqTotal} MCQs. Your MCQ score and self-checked Section B/C marks will be included in the result.</p>
            <div className="flex flex-wrap justify-end gap-3 pt-2">
              <button onClick={() => setShowConfirmSubmit(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Continue Exam</button>
              <button onClick={() => { setShowConfirmSubmit(false); setIsSubmitted(true); }} className="px-5 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold">Yes, Submit Now</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-bold [scrollbar-width:none]">
        {exam.sectionA.questions.length > 0 && (
          <button onClick={() => setActiveSection('A')} className={`px-4 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap shrink-0 ${activeSection === 'A' ? 'bg-emerald-700 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
            Section A (MCQs) <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeSection === 'A' ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-100'}`}>{answeredMcqs}/{mcqTotal}</span>
          </button>
        )}
        {exam.sectionB.questions.length > 0 && (
          <button onClick={() => setActiveSection('B')} className={`px-4 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap shrink-0 ${activeSection === 'B' ? 'bg-blue-700 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
            Section B (Short Qs) <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-700">{Object.keys(selfScoreB).length}/{exam.sectionB.questions.length}</span>
          </button>
        )}
        {exam.sectionC.questions.length > 0 && (
          <button onClick={() => setActiveSection('C')} className={`px-4 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap shrink-0 ${activeSection === 'C' ? 'bg-purple-700 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
            Section C (Detailed Qs) <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-700">{Object.keys(selfScoreC).length}/{exam.sectionC.questions.length}</span>
          </button>
        )}
      </div>

      {isSubmitted && (
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white p-5 sm:p-7 rounded-2xl shadow-xl border border-emerald-500/30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider"><Award className="w-5 h-5 text-amber-300" /> Mock Exam Result</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif mt-1">Score: {finalEarnedMarks} / {exam.totalMarks} ({percentage}%)</h3>
              <p className="text-slate-300 text-xs mt-1">MCQs: {mcqCorrectCount}/{mcqTotal} correct • Section B: {sectionBScore}/{exam.sectionB.totalMarks} • Section C: {sectionCScore}/{exam.sectionC.totalMarks}</p>
            </div>
            <div className={`px-4 py-2 rounded-xl text-center font-bold text-xs uppercase ${gradeInfo.className}`}><span className="block text-[10px] opacity-75">Grade</span><span className="text-sm">{gradeInfo.grade}</span></div>
          </div>
        </div>
      )}

      {activeSection === 'A' && exam.sectionA.questions.length > 0 && (
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div><span className="font-bold block text-sm">Section A — Multiple Choice Questions</span><span>Choose an option to get immediate feedback.</span></div>
            <span className="font-bold text-emerald-800 bg-emerald-200 px-3 py-1 rounded-lg self-start sm:self-auto">Score: {mcqCorrectCount}/{answeredMcqs} correct</span>
          </div>

          {exam.sectionA.questions.map((question, index) => {
            const selected = mcqAnswers[question.id];
            const answered = Boolean(selected);
            const correct = question.correctOption === selected;
            return (
              <div key={question.id} className={`bg-white border rounded-2xl p-4 sm:p-5 shadow-xs ${answered ? (correct ? 'border-emerald-300' : 'border-rose-300') : 'border-slate-200'}`}>
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">{index + 1}</span>
                    <div className="min-w-0"><h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{question.questionText}</h3><span className="text-[11px] text-slate-500">Chapter {question.chapterNo}: {question.chapterTitle}</span></div>
                  </div>
                  {!isSubmitted && <button onClick={() => toggleFlag(question.id)} className={`text-[11px] px-2 py-1 rounded-lg shrink-0 ${flaggedQuestions[question.id] ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'text-slate-400 hover:bg-slate-100'}`}><Flag className="w-3.5 h-3.5 inline mr-1" />{flaggedQuestions[question.id] ? 'Flagged' : 'Flag'}</button>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {optionKeys.map((key) => {
                    const isRight = question.correctOption === key;
                    const isChosen = selected === key;
                    const className = !answered
                      ? 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50'
                      : isRight
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-400'
                      : isChosen
                      ? 'border-rose-500 bg-rose-50 text-rose-900 ring-1 ring-rose-400'
                      : 'border-slate-200 bg-white text-slate-500';
                    return (
                      <button key={key} type="button" disabled={isSubmitted} onClick={() => handleSelectOption(question.id, key)} className={`w-full min-w-0 p-3 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-2.5 transition-all ${className}`}>
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs uppercase shrink-0 ${answered && isRight ? 'bg-emerald-600 text-white' : answered && isChosen ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-700'}`}>{key}</span>
                        <span className="flex-1 leading-snug break-words">{question.options?.[key]}</span>
                        {answered && isRight && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {answered && isChosen && !isRight && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {answered && (
                  <div className={`mt-3 rounded-xl border p-3 text-xs ${correct ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
                    <div className="font-bold flex items-center gap-1.5 mb-1">{correct ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}{correct ? 'Correct!' : `Wrong. Correct answer: ${question.options?.[question.correctOption || 'a']}`}</div>
                    <p className="leading-relaxed">{question.explanation || 'Review the related textbook topic for this question.'}</p>
                  </div>
                )}
              </div>
            );
          })}

          {mcqMistakes.length > 0 && (
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
              <h3 className="font-bold text-sm text-rose-900">Mistakes to review ({mcqMistakes.length})</h3>
              <ul className="mt-2 space-y-1.5 text-xs text-rose-900 list-disc list-inside">
                {mcqMistakes.map((question) => <li key={question.id}>{question.questionText}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {activeSection === 'B' && exam.sectionB.questions.length > 0 && (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900"><span className="font-bold block text-sm">Section B — Short Questions</span>Attempted: {Object.keys(selfScoreB).length}/{exam.sectionB.questions.length}</div>
          {exam.sectionB.questions.map((question) => (
            <div key={question.id} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{question.questionText}</h3>
              {renderQuestionAnswer(question, 'B')}
            </div>
          ))}
        </div>
      )}

      {activeSection === 'C' && exam.sectionC.questions.length > 0 && (
        <div className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs text-purple-900"><span className="font-bold block text-sm">Section C — Detailed Questions</span>Attempted: {Object.keys(selfScoreC).length}/{exam.sectionC.questions.length}</div>
          {exam.sectionC.questions.map((question) => (
            <div key={question.id} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{question.questionText}</h3>
              {renderQuestionAnswer(question, 'C')}
            </div>
          ))}
        </div>
      )}

      {isSubmitted && mcqMistakes.length > 0 && (
        <div className="bg-white border border-rose-200 rounded-2xl p-4 sm:p-5">
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rose-600" /> Mistakes to review</h3>
          <div className="mt-3 space-y-2">
            {mcqMistakes.map((question) => (
              <div key={question.id} className="rounded-xl bg-rose-50 border border-rose-100 p-3 text-xs text-rose-900">
                <div className="font-bold">{question.questionText}</div>
                <div className="mt-1">Correct answer: {question.options?.[question.correctOption || 'a']}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

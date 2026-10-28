import React, { useState } from 'react';
import { GeneratedExam, Question } from '../types';
import { Printer, Eye, EyeOff, PlayCircle, ArrowLeft, Download, Check, Sparkles } from 'lucide-react';

interface ExamPaperViewProps {
  exam: GeneratedExam;
  onBack: () => void;
  onStartCbt: () => void;
}

export const ExamPaperView: React.FC<ExamPaperViewProps> = ({
  exam,
  onBack,
  onStartCbt
}) => {
  const [showSolutions, setShowSolutions] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Action Toolbar (Hidden in Print) */}
      <div className="print:hidden bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Studio</span>
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowSolutions(!showSolutions)}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
              showSolutions
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
            }`}
          >
            {showSolutions ? (
              <>
                <EyeOff className="w-4 h-4 text-amber-600" />
                <span>Hide Solutions / Marking Scheme</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-emerald-600" />
                <span>Show Solutions & Marking Rubric</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Official Paper (PDF)</span>
          </button>

          <button
            onClick={onStartCbt}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-colors"
          >
            <PlayCircle className="w-4 h-4 text-emerald-200" />
            <span>Take Test Online (CBT Mode)</span>
          </button>
        </div>
      </div>

      {/* Official Paper Sheet (A4 Styled Paper) */}
      <div className="bg-white border border-slate-300 p-8 sm:p-12 rounded-2xl shadow-md max-w-4xl mx-auto print:border-none print:shadow-none print:p-0 print:max-w-none text-slate-900 font-serif leading-normal">
        {/* Board Header */}
        <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-left text-xs font-sans font-bold text-slate-700">
              <div>Serial No: <span className="font-mono">{exam.id.slice(-6).toUpperCase()}</span></div>
              <div>Date: {exam.createdDate}</div>
            </div>

            {/* Roll Number Box */}
            <div className="flex items-center gap-1 font-sans text-xs">
              <span className="font-bold mr-1">Roll No:</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-7 border-2 border-slate-900 flex items-center justify-center font-bold text-sm bg-white"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-wide">
            {exam.boardName}
          </h1>
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-800 mt-0.5">
            {exam.session}
          </h2>
          <div className="text-sm sm:text-base font-bold text-slate-800 mt-1">
            {exam.grade}
          </div>
          <div className="text-lg sm:text-xl font-extrabold uppercase mt-1 tracking-wide">
            {exam.subject}
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm font-bold font-sans mt-3 pt-2 border-t border-slate-400">
            <span>Time Allowed: {exam.timeAllowed}</span>
            <span>Max. Marks: {exam.totalMarks}</span>
          </div>
        </div>

        {/* General Candidate Instructions */}
        <div className="bg-slate-50 border border-slate-300 rounded-lg p-3 text-2xs sm:text-xs font-sans text-slate-700 mb-6 space-y-1">
          <span className="font-bold block text-slate-900 uppercase">General Instructions:</span>
          <p>1. Check that this paper contains all three sections (Section 'A', 'B', and 'C').</p>
          <p>2. Section 'A' consists of Multiple Choice Questions (MCQs) and is compulsory.</p>
          <p>3. Section 'B' contains Short Answer Questions. Attempt any SIX (06) questions.</p>
          <p>4. Section 'C' contains Detailed Answer Questions. Attempt any TWO (02) questions.</p>
          <p>5. Write all answers in the provided answer script. Draw neat and labeled diagrams wherever necessary.</p>
        </div>

        {/* ========================================================= */}
        {/* SECTION A: MCQS */}
        {/* ========================================================= */}
        {exam.sectionA.questions.length > 0 && (
          <div className="mb-8 page-break-after">
            <div className="border-b-2 border-slate-900 pb-1 mb-4 flex items-center justify-between font-sans">
              <h3 className="text-sm sm:text-base font-black tracking-wide">
                {exam.sectionA.title}
              </h3>
              <span className="text-xs sm:text-sm font-bold bg-slate-200 px-2.5 py-0.5 rounded-sm">
                Marks: {exam.sectionA.marks}
              </span>
            </div>

            <p className="text-xs font-sans text-slate-600 italic mb-4">
              {exam.sectionA.instructions}
            </p>

            <div className="space-y-4 font-sans text-xs sm:text-sm">
              {exam.sectionA.questions.map((q, idx) => (
                <div key={q.id} className="pb-3 border-b border-dashed border-slate-200">
                  <div className="flex items-start gap-2">
                    <span className="font-bold shrink-0">Q.1 ({idx + 1})</span>
                    <span className="font-medium text-slate-900 leading-snug">
                      {q.questionText}
                    </span>
                    <span className="text-xs text-slate-400 font-mono shrink-0 ml-auto">[1]</span>
                  </div>

                  {/* 4 Options Grid */}
                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mt-2 pl-6">
                      {(['a', 'b', 'c', 'd'] as const).map((opt) => {
                        const isCorrect = q.correctOption === opt;
                        return (
                          <div
                            key={opt}
                            className={`flex items-baseline gap-2 py-0.5 px-2 rounded-md ${
                              showSolutions && isCorrect ? 'bg-emerald-100 text-emerald-950 font-bold' : ''
                            }`}
                          >
                            <span className="font-bold text-slate-700">({opt})</span>
                            <span className="text-slate-800">{q.options![opt]}</span>
                            {showSolutions && isCorrect && (
                              <span className="text-xs text-emerald-700 font-bold ml-1">✓ Correct</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {showSolutions && q.explanation && (
                    <div className="mt-2 ml-6 p-2 bg-emerald-50 rounded text-xs text-emerald-900 border border-emerald-200 font-sans">
                      <strong>Reason: </strong> {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SECTION B: SHORT QUESTIONS */}
        {/* ========================================================= */}
        {exam.sectionB.questions.length > 0 && (
          <div className="mb-8">
            <div className="border-b-2 border-slate-900 pb-1 mb-4 flex items-center justify-between font-sans">
              <h3 className="text-sm sm:text-base font-black tracking-wide">
                {exam.sectionB.title}
              </h3>
              <span className="text-xs sm:text-sm font-bold bg-slate-200 px-2.5 py-0.5 rounded-sm">
                Marks: {exam.sectionB.totalMarks}
              </span>
            </div>

            <p className="text-xs font-sans text-slate-600 italic mb-4">
              {exam.sectionB.instructions}
            </p>

            <div className="space-y-4 font-sans text-xs sm:text-sm">
              {exam.sectionB.questions.map((q, idx) => (
                <div key={q.id} className="pb-3 border-b border-dashed border-slate-200">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <span className="font-bold shrink-0">Q.{idx + 2}.</span>
                      <span className="font-medium text-slate-900 leading-snug">
                        {q.questionText}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-700 shrink-0 ml-2 font-mono">
                      (04)
                    </span>
                  </div>

                  {showSolutions && (
                    <div className="mt-3 ml-6 p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs space-y-2">
                      <div className="font-bold text-blue-900">Sindh Board Model Answer:</div>
                      {q.tabulatedData ? (
                        <div className="overflow-x-auto rounded border border-blue-200 bg-white">
                          <table className="w-full text-left text-2xs border-collapse">
                            <thead>
                              <tr className="bg-blue-100 text-blue-900 font-bold border-b border-blue-200">
                                <th className="p-1.5">Parameter</th>
                                <th className="p-1.5 border-x border-blue-200">{q.tabulatedData.titleA}</th>
                                <th className="p-1.5">{q.tabulatedData.titleB}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {q.tabulatedData.rows.map((r, rIdx) => (
                                <tr key={rIdx} className="border-b border-blue-100">
                                  <td className="p-1.5 font-semibold text-slate-700">{r.parameter}</td>
                                  <td className="p-1.5 border-x border-blue-100">{r.itemA}</td>
                                  <td className="p-1.5">{r.itemB}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="whitespace-pre-line text-slate-800 leading-relaxed">
                          {q.modelAnswer}
                        </div>
                      )}

                      {q.keyPoints && (
                        <div className="text-2xs text-blue-800 pt-1 border-t border-blue-200">
                          <strong>Examiner Rubric: </strong> {q.keyPoints.join(' • ')}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SECTION C: DETAILED QUESTIONS */}
        {/* ========================================================= */}
        {exam.sectionC.questions.length > 0 && (
          <div className="mb-6">
            <div className="border-b-2 border-slate-900 pb-1 mb-4 flex items-center justify-between font-sans">
              <h3 className="text-sm sm:text-base font-black tracking-wide">
                {exam.sectionC.title}
              </h3>
              <span className="text-xs sm:text-sm font-bold bg-slate-200 px-2.5 py-0.5 rounded-sm">
                Marks: {exam.sectionC.totalMarks}
              </span>
            </div>

            <p className="text-xs font-sans text-slate-600 italic mb-4">
              {exam.sectionC.instructions}
            </p>

            <div className="space-y-5 font-sans text-xs sm:text-sm">
              {exam.sectionC.questions.map((q, idx) => (
                <div key={q.id} className="pb-4 border-b border-dashed border-slate-200">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <span className="font-bold shrink-0">
                        Q.{exam.sectionB.questions.length + idx + 2}.
                      </span>
                      <span className="font-bold text-slate-900 leading-snug">
                        {q.questionText}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-700 shrink-0 ml-2 font-mono">
                      (12)
                    </span>
                  </div>

                  {q.diagramNote && (
                    <div className="ml-6 mt-1 text-2xs italic text-slate-500 font-sans">
                      (Note: Neat, well-labeled diagram carries 4 marks)
                    </div>
                  )}

                  {showSolutions && (
                    <div className="mt-3 ml-6 p-4 bg-purple-50/70 border border-purple-200 rounded-lg text-xs space-y-2">
                      <div className="font-bold text-purple-900">12-Mark Model Descriptive Solution:</div>
                      <div className="whitespace-pre-line text-slate-800 leading-relaxed font-sans">
                        {q.modelAnswer}
                      </div>
                      {q.keyPoints && (
                        <div className="pt-2 border-t border-purple-200 text-2xs text-purple-800">
                          <strong>Essential Headings for 12/12: </strong>
                          {q.keyPoints.join(' • ')}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Paper Footer */}
        <div className="text-center font-sans text-xs text-slate-500 pt-6 border-t border-slate-300">
          *** END OF QUESTION PAPER - SINDH TEXTBOOK BOARD CLASS IX BIOLOGY ***
        </div>
      </div>
    </div>
  );
};

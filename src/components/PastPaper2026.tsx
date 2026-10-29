import React, { useEffect, useState } from 'react';

interface PaperQuestion {
  id?: string;
  q?: string;
  options?: string[];
  ans?: string;
}

interface PaperData {
  year: number;
  subject: string;
  class: string;
  maxMarks: number;
  timeAllowed: string;
  sections: {
    sectionA: PaperQuestion[];
    sectionB: { title: string; totalMarks: number; instruction: string; questions: string[] };
    sectionC: { title: string; totalMarks: number; instruction: string; questions: string[] };
  };
}

export const PastPaper2026: React.FC = () => {
  const [paper, setPaper] = useState<PaperData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/data/paper2026.json')
      .then((response) => {
        if (!response.ok) throw new Error('Paper not found');
        return response.json();
      })
      .then(setPaper)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="bg-white rounded-2xl border border-red-200 p-6 text-red-700">
        The 2026 past paper could not be loaded. Please refresh the page.
      </div>
    );
  }

  if (!paper) {
    return <div className="bg-white rounded-2xl border border-slate-200 p-6 text-slate-600">Loading 2026 past paper…</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Sindh Textbook Board • Class 9</p>
            <h2 className="text-2xl font-bold font-serif text-slate-900">2026 Biology Past Paper</h2>
            <p className="text-sm text-slate-600 mt-1">{paper.class} • {paper.subject}</p>
          </div>
          <div className="text-sm font-semibold text-slate-700 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
            {paper.maxMarks} Marks • {paper.timeAllowed}
          </div>
        </div>
      </div>

      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-slate-900">Section A — MCQs</h3>
        <p className="text-sm text-slate-500 mb-5">12 multiple-choice questions</p>
        <div className="space-y-5">
          {paper.sections.sectionA.map((item, index) => (
            <div key={item.id ?? index} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
              <p className="font-semibold text-slate-900">{index + 1}. {item.q}</p>
              <div className="grid sm:grid-cols-2 gap-2 mt-3">
                {(item.options ?? []).map((option, optionIndex) => (
                  <div key={optionIndex} className="rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-sm text-slate-700">
                    {String.fromCharCode(65 + optionIndex)}. {option}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold text-emerald-700">Answer: {item.ans}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-slate-900">{paper.sections.sectionB.title}</h3>
        <p className="text-sm text-slate-500 mb-4">{paper.sections.sectionB.instruction}</p>
        <ol className="list-decimal pl-5 space-y-3 text-slate-700">
          {paper.sections.sectionB.questions.map((question, index) => <li key={index}>{question}</li>)}
        </ol>
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-slate-900">{paper.sections.sectionC.title}</h3>
        <p className="text-sm text-slate-500 mb-4">{paper.sections.sectionC.instruction}</p>
        <ol className="list-decimal pl-5 space-y-3 text-slate-700">
          {paper.sections.sectionC.questions.map((question, index) => <li key={index}>{question}</li>)}
        </ol>
      </section>
    </div>
  );
};

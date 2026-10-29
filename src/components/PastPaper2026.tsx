import React, { useState } from 'react';

interface PaperQuestion {
  id?: string;
  q: string;
  options?: string[];
  ans?: string;
}

interface SolvedQuestion {
  q: string;
  a: string[];
}

interface PaperSection {
  title: string;
  totalMarks: number;
  instruction: string;
  questions?: string[];
  solutions?: SolvedQuestion[];
}

interface PaperData {
  year: number;
  subject: string;
  class: string;
  maxMarks: number;
  timeAllowed: string;
  sections: {
    sectionA: PaperQuestion[];
    sectionB: PaperSection;
    sectionC: PaperSection;
  };
}

export const PastPaper2026: React.FC = () => {
  const [paper, setPaper] = useState<PaperData | null>(null);
  const [error, setError] = useState(false);
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});

  React.useEffect(() => {
    fetch('/data/paper2026.json')
      .then((response) => {
        if (!response.ok) throw new Error('Paper not found');
        return response.json();
      })
      .then(setPaper)
      .catch(() => setError(true));
  }, []);

  const toggleAnswer = (question: string) => {
    setOpenAnswers((current) => ({ ...current, [question]: !current[question] }));
  };

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

  const renderAnswerDrawer = (question: SolvedQuestion) => {
    const isOpen = Boolean(openAnswers[question.q]);

    return (
      <div className="mt-3">
        <button
          type="button"
          onClick={() => toggleAnswer(question.q)}
          className="w-full flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-left font-semibold text-emerald-800 hover:bg-emerald-100 transition"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? 'Hide Model Answer' : 'Show Model Answer'}</span>
          <span className="text-lg">{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && (
          <div className="mt-2 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 space-y-2">
            {question.a.map((point, index) => <p key={index}>{point}</p>)}
          </div>
        )}
      </div>
    );
  };

  const renderSolvedSection = (section: PaperSection) => (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
      <p className="text-sm text-slate-500 mb-4">{section.instruction}</p>
      <ol className="list-decimal pl-5 space-y-4 text-slate-700">
        {(section.solutions ?? []).map((question, index) => (
          <li key={`${question.q}-${index}`}>
            <div>{question.q}</div>
            {renderAnswerDrawer(question)}
          </li>
        ))}
      </ol>
    </section>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Sindh Textbook Board • Class 9</p>
            <h2 className="text-2xl font-bold font-serif text-slate-900">{paper.year} Biology Past Paper</h2>
            <p className="text-sm text-slate-600 mt-1">{paper.class} • {paper.subject}</p>
          </div>
          <div className="text-sm font-semibold text-slate-700 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
            {paper.maxMarks} Marks • {paper.timeAllowed}
          </div>
        </div>
      </div>

      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-slate-900">Section A — MCQs</h3>
        <p className="text-sm text-slate-500 mb-5">{paper.sections.sectionA.length} multiple-choice questions</p>
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

      {renderSolvedSection(paper.sections.sectionB)}
      {renderSolvedSection(paper.sections.sectionC)}
    </div>
  );
};

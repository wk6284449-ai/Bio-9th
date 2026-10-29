import React, { useEffect, useState } from 'react';

interface PaperQuestion { id?: string; q: string; options?: string[]; ans?: string; }
interface SolvedQuestion { q: string; a: string[]; }
interface PaperSection { title?: string; totalMarks?: number; instruction: string; questions?: string[]; solutions?: SolvedQuestion[]; }
interface PaperData { year: number; subject: string; class: string; maxMarks: number; timeAllowed: string; sections: { sectionA: PaperQuestion[]; sectionB: PaperSection; sectionC: PaperSection; }; }

const years = [2026, 2025, 2024, 2023, 2022];

export const PastPaper2026: React.FC = () => {
  const [papers, setPapers] = useState<Record<number, PaperData>>({});
  const [selectedYear, setSelectedYear] = useState(2026);
  const [error, setError] = useState(false);
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    Promise.all([
      fetch('/data/paper2026.json').then((r) => { if (!r.ok) throw new Error('2026 paper not found'); return r.json(); }),
      fetch('/data/pastpapers-2022-2025.json').then((r) => { if (!r.ok) throw new Error('Past papers not found'); return r.json(); }),
      fetch('/data/pastpaper-solutions-2022-2025.json').then((r) => { if (!r.ok) throw new Error('Solutions not found'); return r.json(); }),
      fetch('/data/pastpaper-solutions-2026.json').then((r) => { if (!r.ok) throw new Error('2026 solutions not found'); return r.json(); })
    ])
      .then(([paper2026, olderPapers, olderSolutions, solution2026]) => {
        const mergedOlder = Object.fromEntries(Object.entries(olderPapers).map(([year, paper]) => {
          const p = paper as PaperData;
          const s = olderSolutions[year] ?? {};
          return [year, { ...p, sections: { ...p.sections, sectionB: { ...p.sections.sectionB, solutions: s.sectionB ?? [] }, sectionC: { ...p.sections.sectionC, solutions: s.sectionC ?? [] } } }];
        }));
        const p2026 = paper2026 as PaperData;
        const merged2026 = { ...p2026, sections: { ...p2026.sections, sectionB: { ...p2026.sections.sectionB, solutions: solution2026.sectionB ?? [] }, sectionC: { ...p2026.sections.sectionC, solutions: solution2026.sectionC ?? [] } } };
        setPapers({ 2026: merged2026, ...mergedOlder });
      })
      .catch(() => setError(true));
  }, []);

  const toggleAnswer = (key: string) => setOpenAnswers((current) => ({ ...current, [key]: !current[key] }));
  if (error) return <div className="bg-white rounded-2xl border border-red-200 p-6 text-red-700">The past papers could not be loaded. Please refresh the page.</div>;
  const paper = papers[selectedYear];
  if (!paper) return <div className="bg-white rounded-2xl border border-slate-200 p-6 text-slate-600">Loading past papers…</div>;

  const renderAnswerDrawer = (question: SolvedQuestion) => {
    const key = `${selectedYear}-${question.q}`;
    const isOpen = Boolean(openAnswers[key]);
    return <div className="mt-3">
      <button type="button" onClick={() => toggleAnswer(key)} className="w-full flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-left font-semibold text-emerald-800 hover:bg-emerald-100 transition" aria-expanded={isOpen}>
        <span>{isOpen ? 'Hide Model Answer' : 'Show Model Answer'}</span><span className="text-lg">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="mt-2 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 space-y-2">{question.a.map((point, index) => <p key={index}>{point}</p>)}</div>}
    </div>;
  };

  const renderSection = (section: PaperSection, label: string) => {
    const solutionMap = new Map((section.solutions ?? []).map((item) => [item.q.trim(), item]));
    const questions = section.questions ?? [];
    return <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h3 className="text-xl font-bold text-slate-900">{section.title ?? label}</h3>
      <p className="text-sm text-slate-500 mb-4">{section.instruction}</p>
      {questions.length > 0 ? <ol className="list-decimal pl-5 space-y-4 text-slate-700">
        {questions.map((question, index) => {
          const solution = solutionMap.get(question.trim()) || (section.solutions ?? []).find((item) => question.includes(item.q) || item.q.includes(question));
          return <li key={`${question}-${index}`}>
            <div>{question}</div>
            {solution ? renderAnswerDrawer(solution) : <div className="mt-2 text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">Model answer coming soon.</div>}
          </li>;
        })}
      </ol> : section.solutions?.length ? <ol className="list-decimal pl-5 space-y-4 text-slate-700">
        {section.solutions.map((question, index) => <li key={`${question.q}-${index}`}><div>{question.q}</div>{renderAnswerDrawer(question)}</li>)}
      </ol> : null}
    </section>;
  };

  return <div className="space-y-6">
    <div className="bg-white rounded-2xl border border-amber-200 shadow-sm p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Sindh Textbook Board • Class 9</p><h2 className="text-2xl font-bold font-serif text-slate-900">Biology Past Papers</h2><p className="text-sm text-slate-600 mt-1">2022–2026 • MCQs, short questions and detailed questions with model answers</p></div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Past paper year">
          {years.map((year) => <button key={year} type="button" role="tab" aria-selected={selectedYear === year} onClick={() => setSelectedYear(year)} className={`px-4 py-2 rounded-xl text-sm font-bold border transition ${selectedYear === year ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}>{year}</button>)}
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"><div><h3 className="text-xl font-bold text-slate-900">{paper.year} Biology Past Paper</h3><p className="text-sm text-slate-600 mt-1">{paper.class} • {paper.subject}</p></div><div className="text-sm font-semibold text-slate-700 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">{paper.maxMarks} Marks • {paper.timeAllowed}</div></div>
    </div>

    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"><h3 className="text-xl font-bold text-slate-900">Section A — MCQs</h3><p className="text-sm text-slate-500 mb-5">{paper.sections.sectionA.length} multiple-choice questions</p><div className="space-y-5">{paper.sections.sectionA.map((item, index) => <div key={item.id ?? index} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0"><p className="font-semibold text-slate-900">{index + 1}. {item.q}</p><div className="grid sm:grid-cols-2 gap-2 mt-3">{(item.options ?? []).map((option, optionIndex) => <div key={optionIndex} className="rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-sm text-slate-700">{String.fromCharCode(65 + optionIndex)}. {option}</div>)}</div><p className="mt-2 text-sm font-semibold text-emerald-700">Answer: {item.ans}</p></div>)}</div></section>
    {renderSection(paper.sections.sectionB, 'Section B — Short Answer Questions')}
    {renderSection(paper.sections.sectionC, 'Section C — Detailed Answer Questions')}
  </div>;
};

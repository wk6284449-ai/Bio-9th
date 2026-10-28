import React, { useState, useMemo } from 'react';
import { ALL_QUESTIONS } from '../data/chaptersData';
import { Question } from '../types';
import { Search, Copy, Check, Table, BookOpen, Layers } from 'lucide-react';

export const DifferencesViewer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Extract all difference subtype questions
  const differenceQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => q.subtype === 'difference');
  }, []);

  const filtered = useMemo(() => {
    return differenceQuestions.filter((q) => {
      const matchChapter = selectedChapter === 'all' || q.chapterNo === selectedChapter;
      const qText = (q.questionText + (q.tabulatedData?.titleA || '') + (q.tabulatedData?.titleB || '')).toLowerCase();
      const matchSearch = !searchQuery || qText.includes(searchQuery.toLowerCase());
      return matchChapter && matchSearch;
    });
  }, [differenceQuestions, selectedChapter, searchQuery]);

  const handleCopyTable = (q: Question) => {
    if (!q.tabulatedData) return;
    const header = `Parameter\t${q.tabulatedData.titleA}\t${q.tabulatedData.titleB}\n`;
    const rows = q.tabulatedData.rows
      .map((r) => `${r.parameter}\t${r.itemA}\t${r.itemB}`)
      .join('\n');
    const fullText = `${q.questionText}\n\n${header}${rows}`;

    navigator.clipboard.writeText(fullText);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-6 rounded-2xl shadow-sm border border-indigo-700/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Table className="w-4 h-4 text-cyan-300" />
              High-Frequency Board Section 'B' Questions
            </div>
            <h2 className="text-2xl font-bold font-serif mt-1">Differentiate Between (Tabulated Comparisons)</h2>
            <p className="text-indigo-100 text-sm mt-1 max-w-2xl">
              Sindh Board examiners award 4 out of 4 full marks only when distinctions are written in a structured table with clear comparison parameters.
            </p>
          </div>
          <div className="bg-indigo-950/40 p-3 rounded-xl border border-indigo-600/30 text-xs text-indigo-200">
            <span className="font-bold text-amber-300 block mb-0.5">Examiner Rubric:</span>
            Write 4 distinct differences with a Parameter column for 4 full marks.
          </div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search differences (e.g. Mitosis, Xylem, Arteries, Prokaryote)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-2xs"
          />
        </div>

        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
          aria-label="Filter by chapter"
          className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-2xs text-slate-700"
        >
          <option value="all">All Chapters ({differenceQuestions.length} Comparisons)</option>
          {Array.from(new Set(differenceQuestions.map((q) => q.chapterNo))).sort((a,b)=>a-b).map((ch) => (
            <option key={ch} value={ch}>
              Chapter {ch}
            </option>
          ))}
        </select>
      </div>

      {/* Difference Cards Grid */}
      <div className="space-y-6">
        {filtered.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center text-slate-500">
            No distinction questions match your search filters.
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-indigo-200 transition-all space-y-4"
            >
              {/* Question Heading */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    Chapter {item.chapterNo}: {item.chapterTitle}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    4 Marks (Section B)
                  </span>
                </div>

                <button
                  onClick={() => handleCopyTable(item)}
                  className="inline-flex items-center gap-1.5 text-xs text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg font-medium transition-colors self-start sm:self-auto"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied Table!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Comparison</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {item.questionText}
              </h3>

              {/* Two-Column Comparison Table */}
              {item.tabulatedData && (
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 text-xs uppercase tracking-wider font-bold border-b border-slate-200">
                        <th className="py-3 px-4 w-1/4">Parameter / Feature</th>
                        <th className="py-3 px-4 w-3/8 text-indigo-900 bg-indigo-50/70 border-x border-slate-200">
                          {item.tabulatedData.titleA}
                        </th>
                        <th className="py-3 px-4 w-3/8 text-teal-900 bg-teal-50/70">
                          {item.tabulatedData.titleB}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {item.tabulatedData.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-4 font-semibold text-slate-800 text-xs sm:text-sm bg-slate-50/40">
                            {row.parameter}
                          </td>
                          <td className="py-3 px-4 border-x border-slate-200 leading-relaxed text-xs sm:text-sm">
                            {row.itemA}
                          </td>
                          <td className="py-3 px-4 leading-relaxed text-xs sm:text-sm">
                            {row.itemB}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Examiner Tip Bullet Points */}
              {item.keyPoints && item.keyPoints.length > 0 && (
                <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600 border border-slate-200 flex flex-wrap gap-x-4 gap-y-1">
                  <span className="font-bold text-slate-700">Key Points for Full Marks:</span>
                  {item.keyPoints.map((kp, kIdx) => (
                    <span key={kIdx} className="inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      {kp}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

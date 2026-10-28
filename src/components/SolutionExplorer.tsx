import React, { useState, useMemo } from 'react';
import { ALL_QUESTIONS, CHAPTERS_LIST } from '../data/chaptersData';
import { Question, QuestionSubtype, QuestionSection } from '../types';
import { 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Layers, 
  Sparkles, 
  BookOpen, 
  Lightbulb 
} from 'lucide-react';

interface SolutionExplorerProps {
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onOpenMockModalWithChapter?: (chNo: number) => void;
}

export const SolutionExplorer: React.FC<SolutionExplorerProps> = ({
  bookmarkedIds,
  onToggleBookmark,
  onOpenMockModalWithChapter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [selectedSubtype, setSelectedSubtype] = useState<QuestionSubtype | 'all' | 'bookmarked'>('all');
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});
  const [selectedMcqOptions, setSelectedMcqOptions] = useState<Record<string, 'a' | 'b' | 'c' | 'd'>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectOption = (qId: string, optKey: 'a' | 'b' | 'c' | 'd') => {
    setSelectedMcqOptions((prev) => ({
      ...prev,
      [qId]: optKey
    }));
  };

  const handleCopyAnswer = (q: Question) => {
    let copyText = `${q.questionText}\n\n`;
    if (q.tabulatedData) {
      copyText += `${q.tabulatedData.titleA} vs ${q.tabulatedData.titleB}\n`;
      copyText += q.tabulatedData.rows.map(r => `• ${r.parameter}: ${r.itemA} | ${r.itemB}`).join('\n');
    } else {
      copyText += q.modelAnswer;
    }
    navigator.clipboard.writeText(copyText);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => {
      // Bookmark filter
      if (selectedSubtype === 'bookmarked') {
        if (!bookmarkedIds.includes(q.id)) return false;
      } else if (selectedSubtype !== 'all') {
        if (q.subtype !== selectedSubtype) return false;
      }

      // Chapter filter
      if (selectedChapter !== 'all' && q.chapterNo !== selectedChapter) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inQuestion = q.questionText.toLowerCase().includes(query);
        const inAnswer = q.modelAnswer.toLowerCase().includes(query);
        const inCh = q.chapterTitle.toLowerCase().includes(query);
        const inExpl = q.explanation ? q.explanation.toLowerCase().includes(query) : false;
        if (!inQuestion && !inAnswer && !inCh && !inExpl) return false;
      }

      return true;
    });
  }, [selectedChapter, selectedSubtype, searchQuery, bookmarkedIds]);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-6 rounded-2xl shadow-sm border border-emerald-800/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Sindh Textbook Board (Jamshoro) Class 9 Biology
            </div>
            <h2 className="text-2xl font-bold font-serif mt-1">Official Solution & Model Answer Bank</h2>
            <p className="text-emerald-100 text-sm mt-1 max-w-2xl">
              Authentic solved textbook review questions, MCQs with explanations, tabulated differences, scientific reasoning, and 12-mark detailed answers matching Sindh Board marking rubrics.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-950/60 p-3 rounded-xl border border-emerald-600/30 text-xs text-emerald-200">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>Includes all 9 textbook chapters with full SLO solutions</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by topic, concept, term (e.g. Transpiration, Laveran, Mitosis, Scurvy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            aria-label="Filter by chapter"
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-700 font-medium"
          >
            <option value="all">All 9 Chapters</option>
            {CHAPTERS_LIST.map((c) => (
              <option key={c.number} value={c.number}>
                Ch {c.number}: {c.title}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100 text-xs">
          <button
            onClick={() => setSelectedSubtype('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedSubtype === 'all'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Questions ({ALL_QUESTIONS.length})
          </button>
          <button
            onClick={() => setSelectedSubtype('mcq')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedSubtype === 'mcq'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            MCQs (Section A)
          </button>
          <button
            onClick={() => setSelectedSubtype('difference')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedSubtype === 'difference'
                ? 'bg-indigo-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Differentiate Tables (Sec B)
          </button>
          <button
            onClick={() => setSelectedSubtype('reasoning')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedSubtype === 'reasoning'
                ? 'bg-amber-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Scientific Reasoning (Sec B)
          </button>
          <button
            onClick={() => setSelectedSubtype('definition')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedSubtype === 'definition'
                ? 'bg-teal-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Definitions & Terms
          </button>
          <button
            onClick={() => setSelectedSubtype('detailed')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedSubtype === 'detailed'
                ? 'bg-purple-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Long / Detailed (Sec C)
          </button>
          <button
            onClick={() => setSelectedSubtype('bookmarked')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1 transition-colors ${
              selectedSubtype === 'bookmarked'
                ? 'bg-amber-500 text-slate-900'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            Saved for Revision ({bookmarkedIds.length})
          </button>
        </div>
      </div>

      {/* Question Results List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Showing {filteredQuestions.length} questions matching your criteria</span>
          {selectedChapter !== 'all' && (
            <span className="text-emerald-700 font-semibold">
              Filter: Chapter {selectedChapter}
            </span>
          )}
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500">
            <HelpCircle className="w-10 h-10 mx-auto text-slate-300 mb-2" />
            <p className="text-base font-semibold text-slate-700">No matching questions found</p>
            <p className="text-xs text-slate-400 mt-1">Try relaxing your search terms or selecting "All Chapters".</p>
          </div>
        ) : (
          filteredQuestions.map((q, index) => {
            const isBookmarked = bookmarkedIds.includes(q.id);
            const isExpanded = expandedAnswers[q.id] ?? (q.subtype === 'mcq' ? true : false);
            const userMcqChoice = selectedMcqOptions[q.id];

            return (
              <div
                key={q.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-emerald-200 transition-all space-y-4"
              >
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Ch {q.chapterNo}: {q.chapterTitle}
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                        q.section === 'Section_A'
                          ? 'bg-emerald-100 text-emerald-800'
                          : q.section === 'Section_B'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {q.section.replace('_', ' ')} • {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
                    </span>
                    <span className="text-xs uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                      {q.subtype}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleBookmark(q.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isBookmarked
                          ? 'bg-amber-50 border-amber-300 text-amber-600'
                          : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                      }`}
                      title={isBookmarked ? 'Remove from saved' : 'Save for revision'}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-600" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={() => handleCopyAnswer(q)}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                      title="Copy Question & Answer"
                    >
                      {copiedId === q.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Question Statement */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {q.questionText}
                  </h3>
                  {q.textbookRef && (
                    <span className="text-xs text-slate-400 mt-1 block font-mono">
                      Ref: {q.textbookRef}
                    </span>
                  )}
                </div>

                {/* Interactive MCQs rendering */}
                {q.subtype === 'mcq' && q.options && (
                  <div className="space-y-2 pt-1">
                    <span className="text-xs text-slate-500 font-semibold block">Select your answer:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(['a', 'b', 'c', 'd'] as const).map((optKey) => {
                        const optText = q.options![optKey];
                        const isChosen = userMcqChoice === optKey;
                        const isCorrect = q.correctOption === optKey;
                        const hasAnswered = !!userMcqChoice;

                        let styleClasses = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700';
                        if (hasAnswered) {
                          if (isCorrect) {
                            styleClasses = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-500';
                          } else if (isChosen && !isCorrect) {
                            styleClasses = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                          }
                        }

                        return (
                          <button
                            key={optKey}
                            onClick={() => handleSelectOption(q.id, optKey)}
                            className={`p-3 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-2.5 transition-all ${styleClasses}`}
                          >
                            <span
                              className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-xs uppercase shrink-0 ${
                                hasAnswered && isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : hasAnswered && isChosen
                                  ? 'bg-rose-500 text-white'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {optKey}
                            </span>
                            <span className="flex-1 leading-tight">{optText}</span>
                            {hasAnswered && isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {hasAnswered && isChosen && !isCorrect && (
                              <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {userMcqChoice && q.explanation && (
                      <div className="mt-2 p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                        <span className="font-bold flex items-center gap-1 text-emerald-800 mb-0.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          Explanation & Textbook Reason:
                        </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                )}

                {/* For Non-MCQ: Toggle & Show Model Answer */}
                {q.subtype !== 'mcq' && (
                  <div>
                    <button
                      onClick={() => toggleExpand(q.id)}
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5 py-1 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          <span>Hide Model Answer</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          <span>Show Sindh Board Model Solution</span>
                        </>
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs sm:text-sm text-slate-800">
                        {/* Tabular data if difference question */}
                        {q.tabulatedData ? (
                          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-100 text-slate-800 uppercase tracking-wider font-bold border-b border-slate-200">
                                  <th className="py-2.5 px-3">Parameter</th>
                                  <th className="py-2.5 px-3 border-x border-slate-200 text-indigo-900 bg-indigo-50/50">
                                    {q.tabulatedData.titleA}
                                  </th>
                                  <th className="py-2.5 px-3 text-teal-900 bg-teal-50/50">
                                    {q.tabulatedData.titleB}
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {q.tabulatedData.rows.map((row, rIdx) => (
                                  <tr key={rIdx}>
                                    <td className="py-2 px-3 font-semibold text-slate-700 bg-slate-50/30">
                                      {row.parameter}
                                    </td>
                                    <td className="py-2 px-3 border-x border-slate-200">
                                      {row.itemA}
                                    </td>
                                    <td className="py-2 px-3">
                                      {row.itemB}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="whitespace-pre-line leading-relaxed font-sans">
                            {q.modelAnswer}
                          </div>
                        )}

                        {/* Diagram Note if applicable */}
                        {q.diagramNote && (
                          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg text-xs text-purple-900">
                            <span className="font-bold block mb-1">Diagram Marking Note (Sindh Board):</span>
                            {q.diagramNote}
                          </div>
                        )}

                        {/* Key Points for full marks */}
                        {q.keyPoints && q.keyPoints.length > 0 && (
                          <div className="pt-2 border-t border-slate-200/60">
                            <span className="text-xs font-bold text-slate-600 block mb-1">
                              Examiner Marking Points (4/4 Marks Rubric):
                            </span>
                            <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-600">
                              {q.keyPoints.map((point, pIdx) => (
                                <li key={pIdx}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

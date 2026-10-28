import React, { useState } from 'react';
import { CHAPTERS_LIST } from '../data/chaptersData';
import { MockExamConfig } from '../types';
import { X, Sliders, CheckSquare, Clock, Award, PlayCircle, Printer, FileText } from 'lucide-react';

interface MockExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (config: MockExamConfig, launchMode: 'print' | 'cbt') => void;
  preselectedChapter?: number;
}

export const MockExamModal: React.FC<MockExamModalProps> = ({
  isOpen,
  onClose,
  onGenerate,
  preselectedChapter
}) => {
  const [examType, setExamType] = useState<'full_board' | 'custom_chapters' | 'mcq_only'>('full_board');
  const [selectedChapters, setSelectedChapters] = useState<number[]>(
    preselectedChapter ? [preselectedChapter] : [1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
  const [includeSectionA, setIncludeSectionA] = useState(true);
  const [includeSectionB, setIncludeSectionB] = useState(true);
  const [includeSectionC, setIncludeSectionC] = useState(true);
  const [customTitle, setCustomTitle] = useState('Secondary School Certificate Part-I (Class IX) Biology Mock Exam');
  const [timeMinutes, setTimeMinutes] = useState(180);

  if (!isOpen) return null;

  const handlePresetSelect = (type: 'full_board' | 'custom_chapters' | 'mcq_only') => {
    setExamType(type);
    if (type === 'full_board') {
      setSelectedChapters([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      setIncludeSectionA(true);
      setIncludeSectionB(true);
      setIncludeSectionC(true);
      setTimeMinutes(180);
      setCustomTitle('BSEK / BISE Sindh Board Model Biology Examination (Full Syllabus)');
    } else if (type === 'mcq_only') {
      setSelectedChapters([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      setIncludeSectionA(true);
      setIncludeSectionB(false);
      setIncludeSectionC(false);
      setTimeMinutes(20);
      setCustomTitle('Sindh Board Class IX Biology Section A (M.C.Q) Speed Test');
    } else if (type === 'custom_chapters') {
      setTimeMinutes(90);
      setCustomTitle('Class IX Biology Unit Assessment Paper');
    }
  };

  const toggleChapter = (chNum: number) => {
    if (selectedChapters.includes(chNum)) {
      if (selectedChapters.length > 1) {
        setSelectedChapters(selectedChapters.filter((c) => c !== chNum));
      }
    } else {
      setSelectedChapters([...selectedChapters, chNum].sort((a, b) => a - b));
    }
  };

  const handleSelectAllChapters = () => {
    setSelectedChapters([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  };

  const handleLaunch = (mode: 'print' | 'cbt') => {
    const config: MockExamConfig = {
      title: customTitle,
      examType,
      selectedChapters,
      includeSectionA,
      includeSectionB: examType === 'mcq_only' ? false : includeSectionB,
      includeSectionC: examType === 'mcq_only' ? false : includeSectionC,
      totalMarks: examType === 'mcq_only' ? 12 : 60,
      timeLimitMinutes: timeMinutes
    };

    onGenerate(config, mode);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-emerald-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Sliders className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif">Sindh Board Mock Exam Generator</h2>
              <p className="text-xs text-emerald-200">
                Customized according to Sindh Textbook Board Jamshoro & BSEK Exam Blueprint
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white p-1 rounded-lg hover:bg-emerald-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Presets */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Select Exam Format Preset:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handlePresetSelect('full_board')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  examType === 'full_board'
                    ? 'border-emerald-600 bg-emerald-50 ring-1 ring-emerald-500 text-emerald-950'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm">Official Board Paper</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
                    60 Marks
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Full 3 Hours. Sec A (12 MCQs), Sec B (6 of 9 Qs), Sec C (2 of 4 Qs).
                </p>
              </button>

              <button
                type="button"
                onClick={() => handlePresetSelect('mcq_only')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  examType === 'mcq_only'
                    ? 'border-emerald-600 bg-emerald-50 ring-1 ring-emerald-500 text-emerald-950'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm">Section A Speed Test</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
                    12 Marks
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  20 Minutes. 12 randomized MCQs with instant OMR scoring.
                </p>
              </button>

              <button
                type="button"
                onClick={() => handlePresetSelect('custom_chapters')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  examType === 'custom_chapters'
                    ? 'border-emerald-600 bg-emerald-50 ring-1 ring-emerald-500 text-emerald-950'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm">Unit / Chapter Test</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-900">
                    Custom
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Test specific chapters (e.g. Ch 1-3 for first term tests).
                </p>
              </button>
            </div>
          </div>

          {/* Exam Title */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Examination Paper Heading:
            </label>
            <input
              type="text"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Chapter Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Syllabus Chapters ({selectedChapters.length} Selected):
              </label>
              <button
                type="button"
                onClick={handleSelectAllChapters}
                className="text-xs text-emerald-700 hover:text-emerald-900 font-semibold"
              >
                Select All 9 Chapters
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {CHAPTERS_LIST.map((ch) => {
                const isSelected = selectedChapters.includes(ch.number);
                return (
                  <button
                    key={ch.number}
                    type="button"
                    onClick={() => toggleChapter(ch.number)}
                    className={`px-3 py-2 rounded-xl text-left border text-xs transition-colors flex items-center gap-2 ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-emerald-600 border-emerald-600 text-white font-bold'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected ? '✓' : ''}
                    </span>
                    <span className="truncate">
                      Ch {ch.number}: {ch.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sections to Include */}
          {examType !== 'mcq_only' && (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Exam Sections Breakdown:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSectionA}
                    onChange={(e) => setIncludeSectionA(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded-md focus:ring-emerald-500"
                  />
                  <div>
                    <span className="font-bold text-xs block text-slate-800">Section A (MCQs)</span>
                    <span className="text-2xs text-slate-500">12 Marks (Compulsory)</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSectionB}
                    onChange={(e) => setIncludeSectionB(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded-md focus:ring-emerald-500"
                  />
                  <div>
                    <span className="font-bold text-xs block text-slate-800">Section B (Short Qs)</span>
                    <span className="text-2xs text-slate-500">24 Marks (6 of 9)</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSectionC}
                    onChange={(e) => setIncludeSectionC(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded-md focus:ring-emerald-500"
                  />
                  <div>
                    <span className="font-bold text-xs block text-slate-800">Section C (Detailed Qs)</span>
                    <span className="text-2xs text-slate-500">24 Marks (2 of 4)</span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Time Limit Setting */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="font-bold text-xs block text-slate-800">Examination Time Duration</span>
                <span className="text-2xs text-slate-500">Standard board exam is 3 Hours (180 mins)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                min="10"
                max="240"
                step="5"
                value={timeMinutes}
                onChange={(e) => setTimeMinutes(Number(e.target.value))}
                className="w-20 px-2.5 py-1.5 border border-slate-200 rounded-lg text-sm text-center font-bold"
              />
              <span className="text-xs text-slate-500 font-medium">Minutes</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-slate-600 hover:text-slate-800 text-xs font-semibold"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => handleLaunch('print')}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 shadow-2xs transition-colors"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>Generate Official Board Paper (Print/PDF)</span>
          </button>

          <button
            type="button"
            onClick={() => handleLaunch('cbt')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <PlayCircle className="w-4 h-4 text-emerald-200" />
            <span>Start Online CBT Mock Test</span>
          </button>
        </div>
      </div>
    </div>
  );
};

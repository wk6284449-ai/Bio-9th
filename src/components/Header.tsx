import React from 'react';
import { BookOpen, Table, Activity, Award, PlusCircle, FileText } from 'lucide-react';

export type ActiveTab = 'solutions' | 'differences' | 'diagrams' | 'pastpaper2026';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenMockModal: () => void;
  onOpenPolicyModal: () => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange, onOpenMockModal, onOpenPolicyModal, savedCount }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex items-center justify-center shadow-sm shrink-0 border border-emerald-500/30"><BookOpen className="w-6 h-6" /></div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 whitespace-nowrap">Sindh Textbook Board • Class 9</span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold font-serif text-slate-900 leading-tight truncate">SindhBio 9 • Biology Exam & Solution Portal</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={onOpenPolicyModal} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl text-slate-700 hover:text-emerald-800 hover:bg-slate-100 border border-slate-200 transition-colors"><Award className="w-4 h-4 text-emerald-600" /><span>Board Paper Pattern</span></button>
            <button onClick={onOpenMockModal} className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs hover:shadow transition-all"><PlusCircle className="w-4 h-4 text-emerald-200" /><span>Create Mock Exam</span></button>
          </div>
        </div>

        <div className="relative mt-3 pt-2 border-t border-slate-100">
          <div className="tab-scroll flex items-center gap-1 sm:gap-2 overflow-x-auto text-xs font-bold pr-8" aria-label="Main navigation">
            <button onClick={() => onTabChange('solutions')} className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'solutions' ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200' : 'hover:bg-slate-100 hover:text-slate-900'}`}><BookOpen className="w-4 h-4 text-emerald-600" /><span>Q&A Solution Bank</span></button>
            <button onClick={() => onTabChange('pastpaper2026')} className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'pastpaper2026' ? 'bg-amber-50 text-amber-800 font-bold border border-amber-200' : 'hover:bg-slate-100 hover:text-slate-900'}`}><FileText className="w-4 h-4 text-amber-600" /><span>Past Papers</span></button>
            <button onClick={() => onTabChange('differences')} className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'differences' ? 'bg-blue-50 text-blue-800 font-bold border border-blue-200' : 'hover:bg-slate-100 hover:text-slate-900'}`}><Table className="w-4 h-4 text-blue-600" /><span>Differences Hub (Tables)</span></button>
            <button onClick={() => onTabChange('diagrams')} className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'diagrams' ? 'bg-teal-50 text-teal-800 font-bold border border-teal-200' : 'hover:bg-slate-100 hover:text-slate-900'}`}><Activity className="w-4 h-4 text-teal-600" /><span>Interactive Diagrams</span></button>
          </div>
          <div className="tab-fade-right" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Header, ActiveTab } from './components/Header';
import { SolutionExplorer } from './components/SolutionExplorer';
import { DifferencesViewer } from './components/DifferencesViewer';
import { DiagramsViewer } from './components/DiagramsViewer';
import { PastPaper2026 } from './components/PastPaper2026';
import { MockExamModal } from './components/MockExamModal';
import { ExamPaperView } from './components/ExamPaperView';
import { OnlineExamRunner } from './components/OnlineExamRunner';
import { BoardPolicyModal } from './components/BoardPolicyModal';
import { GeneratedExam, MockExamConfig } from './types';
import { generateSindhBoardMockExam } from './utils/examGenerator';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('solutions');
  const [activeView, setActiveView] = useState<'studio' | 'paper_view' | 'cbt_runner'>('studio');
  const [currentExam, setCurrentExam] = useState<GeneratedExam | null>(null);
  const [isMockModalOpen, setIsMockModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [preselectedCh, setPreselectedCh] = useState<number | undefined>(undefined);

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sindh_bio_bookmarks');
      return saved ? JSON.parse(saved) : ['ch1-mcq-1', 'ch5-diff-1', 'ch9-long-1'];
    } catch {
      return ['ch1-mcq-1', 'ch5-diff-1', 'ch9-long-1'];
    }
  });

  useEffect(() => {
    try { localStorage.setItem('sindh_bio_bookmarks', JSON.stringify(bookmarkedIds)); } catch (e) { console.error(e); }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
  };

  const handleOpenMockModal = (chapterNo?: number) => {
    setPreselectedCh(chapterNo);
    setIsMockModalOpen(true);
  };

  const handleGenerateExam = (config: MockExamConfig, launchMode: 'print' | 'cbt') => {
    const exam = generateSindhBoardMockExam(config);
    setCurrentExam(exam);
    setIsMockModalOpen(false);
    setActiveView(launchMode === 'cbt' ? 'cbt_runner' : 'paper_view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100/70 font-sans text-slate-800 flex flex-col selection:bg-emerald-200 selection:text-emerald-950">
      {activeView === 'studio' && (
        <Header
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onOpenMockModal={() => handleOpenMockModal()}
          onOpenPolicyModal={() => setIsPolicyModalOpen(true)}
          savedCount={bookmarkedIds.length}
        />
      )}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {activeView === 'studio' && (
          <>
            {activeTab === 'solutions' && (
              <SolutionExplorer
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={toggleBookmark}
                onOpenMockModalWithChapter={handleOpenMockModal}
              />
            )}
            {activeTab === 'pastpaper2026' && <PastPaper2026 />}
            {activeTab === 'differences' && <DifferencesViewer />}
            {activeTab === 'diagrams' && <DiagramsViewer />}
          </>
        )}

        {activeView === 'paper_view' && currentExam && (
          <ExamPaperView exam={currentExam} onBack={() => setActiveView('studio')} onStartCbt={() => setActiveView('cbt_runner')} />
        )}

        {activeView === 'cbt_runner' && currentExam && (
          <OnlineExamRunner exam={currentExam} onExit={() => setActiveView('studio')} />
        )}
      </main>

      {activeView === 'studio' && (
        <footer className="border-t border-slate-200 bg-white mt-12 py-8 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">SindhBio 9</span>
              <span>•</span>
              <span>Sindh Textbook Board (STBB Jamshoro) Biology Preparation Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsPolicyModalOpen(true)} className="hover:text-emerald-700 underline underline-offset-2">Sindh Board Paper Blueprint</button>
              <button onClick={() => handleOpenMockModal()} className="hover:text-emerald-700 font-semibold">Generate Custom Paper</button>
            </div>
          </div>
        </footer>
      )}

      <MockExamModal isOpen={isMockModalOpen} onClose={() => setIsMockModalOpen(false)} onGenerate={handleGenerateExam} preselectedChapter={preselectedCh} />
      <BoardPolicyModal isOpen={isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />
      <Analytics />
    </div>
  );
}

import React, { useState } from 'react';
import { BIOLOGY_DIAGRAMS, BiologyDiagram, DiagramLabel } from '../data/diagramsData';
import { Heart, Activity, CheckCircle, Info, Sparkles, BookOpen } from 'lucide-react';

export const DiagramsViewer: React.FC = () => {
  const [selectedDiagramId, setSelectedDiagramId] = useState<string>(BIOLOGY_DIAGRAMS[0].id);
  const [selectedLabel, setSelectedLabel] = useState<DiagramLabel | null>(BIOLOGY_DIAGRAMS[0].labels[0]);

  const activeDiagram = BIOLOGY_DIAGRAMS.find((d) => d.id === selectedDiagramId) || BIOLOGY_DIAGRAMS[0];

  const handleSelectDiagram = (diag: BiologyDiagram) => {
    setSelectedDiagramId(diag.id);
    setSelectedLabel(diag.labels[0] || null);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-900 to-emerald-800 text-white p-6 rounded-2xl shadow-sm border border-emerald-700/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Sindh Board High-Yield Biological Diagrams
            </div>
            <h2 className="text-2xl font-bold font-serif mt-1">Interactive Diagram & Anatomy Studio</h2>
            <p className="text-emerald-100 text-sm mt-1 max-w-2xl">
              In Class 9 Sindh Board examinations, neat labelled diagrams carry up to 40% of marks in Section C. 
              Click on anatomical markers to learn key functions and exact board labeling rules.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-950/40 p-3 rounded-xl border border-emerald-600/30">
            <BookOpen className="w-5 h-5 text-amber-300 shrink-0" />
            <span className="text-xs text-emerald-200">
              Exam Tip: Always use HB pencil & label parts on the right side using horizontal guidelines.
            </span>
          </div>
        </div>
      </div>

      {/* Diagram Selection Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {BIOLOGY_DIAGRAMS.map((diag) => {
          const isSelected = diag.id === selectedDiagramId;
          return (
            <button
              key={diag.id}
              onClick={() => handleSelectDiagram(diag)}
              className={`p-4 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'bg-emerald-50 border-emerald-600 shadow-xs ring-1 ring-emerald-500'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-xs font-bold uppercase text-emerald-700 block">
                Chapter {diag.chapterNo}
              </span>
              <span className="font-bold text-slate-800 text-sm block mt-0.5 line-clamp-1">
                {diag.title}
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                {diag.labels.length} Key Labelled Parts
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Diagram Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Interactive Visual Canvas */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Chapter {activeDiagram.chapterNo}: {activeDiagram.chapterTitle}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{activeDiagram.title}</h3>
              <p className="text-xs text-slate-500">{activeDiagram.subtitle}</p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg inline-block">
                {activeDiagram.boardRelevance}
              </span>
            </div>
          </div>

          {/* SVG Visual Stage */}
          <div className="relative w-full aspect-4/3 bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center p-4 shadow-inner">
            {activeDiagram.svgType === 'heart' && (
              <svg viewBox="0 0 400 350" className="w-full h-full max-h-[380px]">
                {/* Background grid */}
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </linearGradient>
                  <linearGradient id="deoxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="aortaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>

                {/* Vena Cava (Deoxygenated blue) */}
                <path d="M100 40 L100 130 Q105 150 120 160" fill="none" stroke="#2563eb" strokeWidth="24" strokeLinecap="round" />
                <path d="M100 240 L100 310" fill="none" stroke="#2563eb" strokeWidth="22" strokeLinecap="round" />

                {/* Aorta Arch (Red) */}
                <path d="M190 120 Q190 40 230 40 Q270 40 270 120 L270 200" fill="none" stroke="#dc2626" strokeWidth="26" strokeLinecap="round" />
                {/* Aortic branches */}
                <line x1="210" y1="42" x2="205" y2="15" stroke="#dc2626" strokeWidth="10" strokeLinecap="round" />
                <line x1="230" y1="40" x2="230" y2="12" stroke="#dc2626" strokeWidth="10" strokeLinecap="round" />
                <line x1="250" y1="44" x2="255" y2="15" stroke="#dc2626" strokeWidth="10" strokeLinecap="round" />

                {/* Pulmonary Artery (Blue) crossing */}
                <path d="M170 160 Q210 110 280 85" fill="none" stroke="#3b82f6" strokeWidth="22" strokeLinecap="round" />

                {/* Heart Muscle Body Silhouette */}
                <path d="M110 140 C80 160 80 230 110 270 C140 310 190 330 205 340 C220 330 270 310 300 270 C330 230 330 160 300 140 C260 120 220 150 205 160 C190 150 150 120 110 140 Z" fill="url(#heartGradient)" opacity="0.9" stroke="#7f1d1d" strokeWidth="4" />

                {/* Left/Right Ventricle Interior */}
                <path d="M125 180 Q155 200 185 200 L185 295 Q150 270 125 220 Z" fill="#1e3a8a" opacity="0.6" />
                <path d="M225 180 Q255 200 285 200 L285 220 Q260 270 225 295 Z" fill="#b91c1c" opacity="0.6" />

                {/* Interventricular Septum */}
                <rect x="188" y="190" width="32" height="120" rx="10" fill="#991b1b" stroke="#7f1d1d" strokeWidth="2" />

                {/* Valves */}
                <line x1="140" y1="185" x2="170" y2="185" stroke="#fef08a" strokeWidth="4" strokeDasharray="4 2" />
                <line x1="240" y1="185" x2="270" y2="185" stroke="#fef08a" strokeWidth="4" strokeDasharray="4 2" />
              </svg>
            )}

            {activeDiagram.svgType === 'digestive' && (
              <svg viewBox="0 0 400 350" className="w-full h-full max-h-[380px]">
                {/* Head profile silhouette */}
                <path d="M180 20 Q220 20 225 45 Q240 50 240 65 Q225 70 215 75 L215 100 L185 100 Z" fill="#334155" opacity="0.4" />
                
                {/* Esophagus */}
                <path d="M200 90 L200 140" stroke="#f87171" strokeWidth="12" strokeLinecap="round" />

                {/* Liver */}
                <path d="M120 140 Q170 120 190 145 Q180 180 130 180 Q110 160 120 140 Z" fill="#991b1b" opacity="0.85" stroke="#7f1d1d" strokeWidth="2" />
                {/* Gallbladder */}
                <circle cx="150" cy="170" r="10" fill="#22c55e" stroke="#15803d" strokeWidth="2" />

                {/* Stomach */}
                <path d="M195 140 Q250 135 255 170 Q250 200 200 195 Q185 170 195 140 Z" fill="#f43f5e" opacity="0.8" stroke="#be123c" strokeWidth="3" />

                {/* Pancreas */}
                <path d="M200 195 Q235 200 250 195" stroke="#facc15" strokeWidth="10" strokeLinecap="round" />

                {/* Small Intestine (coiled central) */}
                <path d="M170 230 Q200 210 230 230 Q200 250 170 260 Q230 270 200 290" fill="none" stroke="#fb923c" strokeWidth="14" strokeLinecap="round" />

                {/* Large Intestine / Colon (framing) */}
                <path d="M140 280 L140 210 Q140 190 170 190 L230 190 Q260 190 260 210 L260 280 L200 280 L200 330" fill="none" stroke="#059669" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}

            {activeDiagram.svgType === 'mitosis' && (
              <svg viewBox="0 0 400 350" className="w-full h-full max-h-[380px]">
                {/* 4 Quadrants for Mitosis Stages */}
                {/* Quadrant 1: Prophase */}
                <circle cx="100" cy="90" r="65" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
                <circle cx="100" cy="90" r="45" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M85 80 L95 100 M95 80 L85 100" stroke="#f43f5e" strokeWidth="4" />
                <path d="M105 80 L115 100 M115 80 L105 100" stroke="#3b82f6" strokeWidth="4" />

                {/* Quadrant 2: Metaphase */}
                <circle cx="300" cy="90" r="65" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
                <line x1="300" y1="35" x2="300" y2="145" stroke="#facc15" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M295 70 L305 70 M300 65 L300 75" stroke="#f43f5e" strokeWidth="4" />
                <path d="M295 90 L305 90 M300 85 L300 95" stroke="#3b82f6" strokeWidth="4" />
                <path d="M295 110 L305 110 M300 105 L300 115" stroke="#10b981" strokeWidth="4" />

                {/* Quadrant 3: Anaphase */}
                <circle cx="100" cy="250" r="65" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
                {/* V shaped chromatids pulled */}
                <path d="M75 235 L85 245 L75 255" fill="none" stroke="#f43f5e" strokeWidth="3" />
                <path d="M125 235 L115 245 L125 255" fill="none" stroke="#f43f5e" strokeWidth="3" />
                <path d="M75 260 L85 270 L75 280" fill="none" stroke="#3b82f6" strokeWidth="3" />
                <path d="M125 260 L115 270 L125 280" fill="none" stroke="#3b82f6" strokeWidth="3" />

                {/* Quadrant 4: Telophase */}
                <path d="M250 200 C270 200 290 230 290 250 C290 270 270 300 250 300 C270 270 270 230 250 200 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <path d="M350 200 C330 200 310 230 310 250 C310 270 330 300 350 300 C330 270 330 230 350 200 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="265" cy="250" r="16" fill="#334155" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
                <circle cx="335" cy="250" r="16" fill="#334155" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
              </svg>
            )}

            {activeDiagram.svgType === 'cell' && (
              <svg viewBox="0 0 400 350" className="w-full h-full max-h-[380px]">
                {/* Left: Plant Cell (Hexagonal with cell wall) */}
                <polygon points="60,60 140,40 180,100 160,260 80,280 40,200" fill="#065f46" stroke="#10b981" strokeWidth="8" />
                <polygon points="65,65 135,48 172,102 153,252 82,270 47,198" fill="#047857" opacity="0.7" />
                {/* Plant Vacuole */}
                <ellipse cx="100" cy="160" rx="35" ry="50" fill="#38bdf8" opacity="0.6" stroke="#0284c7" strokeWidth="2" />
                {/* Chloroplasts */}
                <ellipse cx="70" cy="90" rx="10" ry="6" fill="#22c55e" stroke="#15803d" />
                <ellipse cx="130" cy="230" rx="10" ry="6" fill="#22c55e" stroke="#15803d" />

                {/* Right: Animal Cell (Round, flexible) */}
                <circle cx="290" cy="160" r="75" fill="#475569" stroke="#f43f5e" strokeWidth="4" />
                {/* Nucleus */}
                <circle cx="280" cy="160" r="24" fill="#64748b" stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="280" cy="160" r="8" fill="#0f172a" />
                {/* Mitochondria */}
                <ellipse cx="320" cy="120" rx="12" ry="7" fill="#fb923c" stroke="#c2410c" />
                <ellipse cx="310" cy="200" rx="12" ry="7" fill="#fb923c" stroke="#c2410c" />
                {/* Centrioles */}
                <rect x="250" y="110" width="8" height="4" fill="#e2e8f0" />
                <rect x="252" y="112" width="4" height="8" fill="#e2e8f0" />
              </svg>
            )}

            {/* Interactive Pins mapped onto SVG canvas */}
            {activeDiagram.labels.map((label) => {
              const isSelected = selectedLabel?.id === label.id;
              return (
                <button
                  key={label.id}
                  onClick={() => setSelectedLabel(label)}
                  style={{ left: `${label.x}%`, top: `${label.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'z-30 scale-125'
                      : 'z-20 hover:scale-115 opacity-85 hover:opacity-100'
                  }`}
                  title={label.name}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-lg border-2 ${
                      isSelected
                        ? 'bg-amber-400 text-slate-900 border-white ring-4 ring-amber-400/40 animate-pulse'
                        : 'bg-emerald-600 text-white border-white'
                    }`}
                  >
                    •
                  </span>
                  <span
                    className={`absolute left-7 whitespace-nowrap text-xs font-semibold px-2 py-0.5 rounded-md shadow-md backdrop-blur-xs pointer-events-none transition-opacity ${
                      isSelected
                        ? 'bg-amber-400 text-slate-900 font-bold block opacity-100'
                        : 'bg-slate-900/90 text-white hidden sm:block opacity-75'
                    }`}
                  >
                    {label.name}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-xs text-slate-400 mt-2 text-center">
            Click on any anatomical marker on the diagram to inspect its physiological function and board scoring notes.
          </p>
        </div>

        {/* Selected Label Details Card */}
        <div className="lg:col-span-4 space-y-4">
          {selectedLabel ? (
            <div className="bg-white border border-emerald-200 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Selected Structure</span>
                  <h4 className="text-lg font-bold text-slate-900">{selectedLabel.name}</h4>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                  Biological Function & Role
                </span>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {selectedLabel.description}
                </p>
              </div>

              {selectedLabel.boardTip && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
                  <span className="font-bold flex items-center gap-1.5 text-amber-800 mb-1">
                    <Info className="w-4 h-4 text-amber-600" />
                    Sindh Board Exam Examiner Tip
                  </span>
                  {selectedLabel.boardTip}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center text-slate-500 text-sm">
              Select a label on the diagram to read its model description.
            </div>
          )}

          {/* Quick List of All Labels */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              All {activeDiagram.labels.length} Exam Labels:
            </h5>
            <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
              {activeDiagram.labels.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedLabel(item)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                    selectedLabel?.id === item.id
                      ? 'bg-emerald-100 text-emerald-900 font-bold'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="truncate">
                    {idx + 1}. {item.name}
                  </span>
                  {selectedLabel?.id === item.id && (
                    <span className="text-emerald-700 text-xs shrink-0">Selected</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

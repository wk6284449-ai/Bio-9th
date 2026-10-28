import React from 'react';
import { X, CheckCircle, AlertTriangle, BookOpen, Award, FileText } from 'lucide-react';

interface BoardPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BoardPolicyModal: React.FC<BoardPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-emerald-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-emerald-200 hover:text-white p-1 rounded-lg hover:bg-emerald-600/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Award className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-200 font-bold">
                Sindh Education & Literacy Department
              </span>
              <h2 className="text-2xl font-bold font-serif">
                Sindh Board Examination Policy (Class IX Biology)
              </h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          {/* Blueprint Summary Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Section A (M.C.Qs)</span>
              <div className="text-2xl font-black text-emerald-900 mt-1">12 Marks (20%)</div>
              <p className="text-xs text-emerald-700 mt-1">12 Compulsory MCQs. 1 Mark each. No negative marking.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wide">Section B (Short Qs)</span>
              <div className="text-2xl font-black text-blue-900 mt-1">24 Marks (40%)</div>
              <p className="text-xs text-blue-700 mt-1">Attempt 6 out of 9 questions. 4 Marks each.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <span className="text-xs font-bold text-purple-800 uppercase tracking-wide">Section C (Detailed Qs)</span>
              <div className="text-2xl font-black text-purple-900 mt-1">24 Marks (40%)</div>
              <p className="text-xs text-purple-700 mt-1">Attempt 2 out of 3 or 4 questions. 12 Marks each.</p>
            </div>
          </div>

          {/* New Policy Key Highlights */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              SLO (Student Learning Outcomes) Based Assessment
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Under the revised assessment scheme by BSEK Karachi and Sindh Education Boards (Jamshoro, Hyderabad, Sukkur, Mirpurkhas, Larkana), rote memorization is minimized. Questions assess three cognitive domains:
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block text-sm mb-1">Knowledge (40%)</span>
                Recall of biological definitions, terminology, scientist names, and organ functions.
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block text-sm mb-1">Understanding (40%)</span>
                Tabulated distinctions, comparing physiological processes, and scientific reasoning.
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block text-sm mb-1">Application (20%)</span>
                Diagram interpretations, experimental setups (e.g. Laveran malaria, enzyme graph trends).
              </div>
            </div>
          </div>

          {/* Golden Rules to Score 90%+ in Sindh Board */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              Sindh Board Biology Scoring Guidelines
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <span><strong>Always present differences in a 2-column table</strong> with a "Basis of Difference / Parameter" column. Paragraph comparisons lose up to 50% marks in Sindh Board exams.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <span><strong>Draw diagrams with sharp HB pencil</strong> and label all anatomical parts on the right side using ruler guidelines. Diagrams carry 4–6 marks in long questions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <span><strong>Write scientific names correctly:</strong> Generic name capitalized, specific name lowercase, and <u>underlined separately</u> when handwritten (e.g., <u>Brassica</u> <u>campestris</u>).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                <span><strong>Respect the 4-mark breakdown:</strong> In Section B, write at least 4 clear bullet points or 4 differences to ensure the examiner awards full marks.</span>
              </li>
            </ul>
          </div>

          {/* Time Management Advice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 space-y-1">
              <span className="font-bold text-sm block">Exam Hall Time Management (3 Hours / 180 Minutes)</span>
              <p>• <strong>Section A (MCQs):</strong> 15-20 minutes. Fill OMR sheet carefully without overwriting.</p>
              <p>• <strong>Section B (6 Short Qs):</strong> 60 minutes (~10 minutes per question).</p>
              <p>• <strong>Section C (2 Long Qs):</strong> 80 minutes (~40 minutes per question including diagrams).</p>
              <p>• <strong>Review & Revision:</strong> Final 15-20 minutes to verify question numbers and labels.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-medium transition-colors shadow-sm"
          >
            Understood, Start Practicing
          </button>
        </div>
      </div>
    </div>
  );
};

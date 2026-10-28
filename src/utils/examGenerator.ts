import { ALL_QUESTIONS } from '../data/chaptersData';
import { GeneratedExam, MockExamConfig, Question } from '../types';

/**
 * Fisher-Yates shuffle algorithm to randomize questions
 */
function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Generates an official Sindh Board examination paper conforming to the 2024-2026 blueprint
 */
export function generateSindhBoardMockExam(config: MockExamConfig): GeneratedExam {
  const selectedChSet = new Set(config.selectedChapters);
  const eligibleQuestions = ALL_QUESTIONS.filter((q) =>
    selectedChSet.has(q.chapterNo)
  );

  // 1. Pick Section A (MCQs)
  let sectionAQuestions: Question[] = [];
  if (config.includeSectionA) {
    const allMcqs = eligibleQuestions.filter((q) => q.section === 'Section_A');
    const shuffledMcqs = shuffle(allMcqs);

    const targetMcqCount = config.examType === 'mcq_only' 
      ? Math.min(shuffledMcqs.length, 20) 
      : Math.min(shuffledMcqs.length, 12);

    // Pick across distinct chapters when possible
    const pickedByChapter = new Map<number, Question[]>();
    for (const q of shuffledMcqs) {
      if (!pickedByChapter.has(q.chapterNo)) {
        pickedByChapter.set(q.chapterNo, []);
      }
      pickedByChapter.get(q.chapterNo)!.push(q);
    }

    const balanced: Question[] = [];
    const chapterKeys = Array.from(pickedByChapter.keys());
    let round = 0;
    while (balanced.length < targetMcqCount && round < 10) {
      for (const ch of chapterKeys) {
        const pool = pickedByChapter.get(ch) || [];
        if (pool.length > 0 && balanced.length < targetMcqCount) {
          balanced.push(pool.pop()!);
        }
      }
      round++;
    }

    // Fill remaining if needed
    for (const q of shuffledMcqs) {
      if (balanced.length >= targetMcqCount) break;
      if (!balanced.some((b) => b.id === q.id)) {
        balanced.push(q);
      }
    }

    sectionAQuestions = balanced;
  }

  // 2. Pick Section B (Short Answer Questions - 9 questions, attempt 6)
  let sectionBQuestions: Question[] = [];
  if (config.includeSectionB && config.examType !== 'mcq_only') {
    const differences = shuffle(eligibleQuestions.filter((q) => q.subtype === 'difference'));
    const reasoning = shuffle(eligibleQuestions.filter((q) => q.subtype === 'reasoning'));
    const definitions = shuffle(eligibleQuestions.filter((q) => q.subtype === 'definition'));
    const otherShorts = shuffle(eligibleQuestions.filter((q) => q.section === 'Section_B' && q.subtype !== 'difference' && q.subtype !== 'reasoning' && q.subtype !== 'definition'));

    const pickedDifferences = differences.slice(0, 3);
    const pickedReasoning = reasoning.slice(0, 3);
    const pickedDefinitions = definitions.slice(0, 3);

    let combined = [...pickedDifferences, ...pickedReasoning, ...pickedDefinitions];
    
    // Fallback if not enough specific subtypes
    if (combined.length < 9) {
      const remainingPool = shuffle([...differences.slice(3), ...reasoning.slice(3), ...definitions.slice(3), ...otherShorts]);
      for (const item of remainingPool) {
        if (combined.length >= 9) break;
        if (!combined.some(q => q.id === item.id)) {
          combined.push(item);
        }
      }
    }

    // In unit tests with fewer questions, clamp to at least 4-6
    if (config.examType === 'custom_chapters' && combined.length < 6) {
      // Keep what we have
    } else if (combined.length > 9) {
      combined = combined.slice(0, 9);
    }

    sectionBQuestions = shuffle(combined);
  }

  // 3. Pick Section C (Detailed Answer Questions - 4 questions, attempt 2)
  let sectionCQuestions: Question[] = [];
  if (config.includeSectionC && config.examType !== 'mcq_only') {
    const longQs = shuffle(eligibleQuestions.filter((q) => q.section === 'Section_C'));
    const targetLongCount = config.examType === 'custom_chapters' ? Math.min(longQs.length, 3) : Math.min(longQs.length, 4);
    sectionCQuestions = longQs.slice(0, targetLongCount);
  }

  // Calculate actual total marks
  let calculatedMarks = 0;
  if (config.includeSectionA) {
    calculatedMarks += sectionAQuestions.length * 1;
  }
  if (config.includeSectionB) {
    const bAttemptCount = Math.min(6, sectionBQuestions.length);
    calculatedMarks += bAttemptCount * 4;
  }
  if (config.includeSectionC) {
    const cAttemptCount = Math.min(2, sectionCQuestions.length);
    calculatedMarks += cAttemptCount * 12;
  }

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return {
    id: `mock-exam-${Date.now()}`,
    title: config.title || 'Secondary School Certificate Part-I (Class IX) Examination',
    boardName: 'BOARD OF SECONDARY EDUCATION KARACHI / BISE SINDH',
    session: 'ANNUAL EXAMINATION 2026',
    subject: 'BIOLOGY (THEORY)',
    grade: 'CLASS IX (SCIENCE GROUP)',
    totalMarks: calculatedMarks > 0 ? calculatedMarks : 60,
    timeAllowed: config.examType === 'mcq_only' ? '20 Minutes' : `${Math.floor(config.timeLimitMinutes / 60)} Hours ${config.timeLimitMinutes % 60 ? (config.timeLimitMinutes % 60) + ' Mins' : ''}`,
    createdDate: today,
    config,
    sectionA: {
      title: "SECTION 'A' (MULTIPLE CHOICE QUESTIONS - M.C.Qs)",
      instructions: `Attempt ALL ${sectionAQuestions.length} questions. Each question carries 01 mark. Write your chosen option (a, b, c, or d) in the answer script or shade the OMR bubble. Do not use pencil.`,
      marks: sectionAQuestions.length * 1,
      questions: sectionAQuestions
    },
    sectionB: {
      title: "SECTION 'B' (SHORT ANSWER QUESTIONS)",
      instructions: `Attempt any ${Math.min(6, sectionBQuestions.length)} questions from this section. Each question carries 04 marks. Answer in concise headings, tabulated differences, or numbered scientific reasons.`,
      totalMarks: Math.min(6, sectionBQuestions.length) * 4,
      attemptCount: Math.min(6, sectionBQuestions.length),
      perQuestionMarks: 4,
      questions: sectionBQuestions
    },
    sectionC: {
      title: "SECTION 'C' (DETAILED ANSWER QUESTIONS)",
      instructions: `Attempt any ${Math.min(2, sectionCQuestions.length)} questions from this section. Each question carries 12 marks. Draw neat and well-labeled diagrams wherever necessary.`,
      totalMarks: Math.min(2, sectionCQuestions.length) * 12,
      attemptCount: Math.min(2, sectionCQuestions.length),
      perQuestionMarks: 12,
      questions: sectionCQuestions
    }
  };
}

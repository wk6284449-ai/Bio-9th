export type QuestionSection = 'Section_A' | 'Section_B' | 'Section_C';

export type QuestionSubtype =
  | 'mcq'
  | 'blank'
  | 'definition'
  | 'difference'
  | 'reasoning'
  | 'detailed';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface TabularDifferenceRow { parameter: string; itemA: string; itemB: string; }
export interface DifferenceData { titleA: string; titleB: string; rows: TabularDifferenceRow[]; }

export interface Question {
  id: string;
  chapterNo: number;
  chapterTitle: string;
  section: QuestionSection;
  subtype: QuestionSubtype;
  questionText: string;
  marks: number;
  difficulty: DifficultyLevel;
  textbookRef?: string;
  options?: { a: string; b: string; c: string; d: string; };
  correctOption?: 'a' | 'b' | 'c' | 'd';
  explanation?: string;
  modelAnswer: string;
  keyPoints?: string[];
  tabulatedData?: DifferenceData;
  diagramNote?: string;
  diagramKey?: string;
  outsideTextbookPages?: boolean;
}

export interface Chapter { id: number; number: number; title: string; summary: string; totalQuestions: number; highYieldTopics: string[]; }
export interface MockExamConfig { title: string; examType: 'full_board' | 'custom_chapters' | 'mcq_only'; selectedChapters: number[]; includeSectionA: boolean; includeSectionB: boolean; includeSectionC: boolean; totalMarks: number; timeLimitMinutes: number; }
export interface GeneratedExam {
  id: string; title: string; boardName: string; session: string; subject: string; grade: string; totalMarks: number; timeAllowed: string; createdDate: string; config: MockExamConfig;
  sectionA: { title: string; instructions: string; marks: number; questions: Question[]; };
  sectionB: { title: string; instructions: string; totalMarks: number; attemptCount: number; perQuestionMarks: number; questions: Question[]; };
  sectionC: { title: string; instructions: string; totalMarks: number; attemptCount: number; perQuestionMarks: number; questions: Question[]; };
}
export interface ExamUserAnswers { mcqAnswers: Record<string, 'a' | 'b' | 'c' | 'd'>; selfCheckedSectionB: Record<string, boolean>; selfCheckedSectionC: Record<string, boolean>; timeSpentSeconds: number; isSubmitted: boolean; }

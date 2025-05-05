export type Subject = {
  id: number;
  name: string;
};

export type subjectCombinations = {
  id: number;
  subject1: Subject;
  subject2: Subject;
};

export type Specialization = {
  id: number;
  name: string;
  description: string | null;
};

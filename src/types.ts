export interface Division {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  divisionId: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  categoryId: string;
  tip?: string;
}

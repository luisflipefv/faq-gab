export interface FaqItem {
  id: string | number;
  question: string;
  answer: string;
  topicIds: string[];
  tip?: string;
  tipLink?: string; 
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
}

export interface IQuestion {
  questionId: number;
  channel: string;
  imgUrl: string;
  user: string;
  question: string;
  time: string;
  isAnswered: boolean;
}

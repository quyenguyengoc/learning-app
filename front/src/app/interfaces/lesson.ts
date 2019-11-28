export interface Lesson {
  id: number;
  name: string;
  percent: number;
  detail: { kanji: Array<any> };
}

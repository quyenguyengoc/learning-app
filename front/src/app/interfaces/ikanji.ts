import { IExample } from './iexample';

export interface IKanji {
  id: number;
  kanji_text: string;
  kanji_pron: string[];
  kun_pron: string[];
  on_pron: string[];
  mean: string;
  memo: string[];
  radical: { label: string; value: string }[];
  examples: IExample[];
}

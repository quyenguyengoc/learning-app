import { IKanji } from '../interfaces/ikanji';
import { IExample } from '../interfaces/iexample';

export class Kanji implements IKanji {
  
  public id: number;
  public kanji_text: string;
  public kanji_pron: string[];
  public kun_pron: string[];
  public on_pron: string[];
  public mean: string;
  public memo: string[];
  public radical: { label: string; value: string }[];
  public examples: IExample[];

  constructor(
    object: {
      id: number;
      kanji_text: string;
      kanji_pron: string[];
      kun_pron: string[];
      on_pron: string[];
      mean: string;
      memo: string[];
      radical: string[];
    }
    ) {
    Object.assign(this, object)
  }
}
import { KanjiTopic } from './kanji_topic';

export class Lesson {

  public id: number;
  public name: string;
  public percent: number;
  public detail: { kanji: KanjiTopic[] }

  constructor(object: {id: number; name: string; percent: number; detail: { kanji: any[] }}) {
    let detail: { kanji: any[] } = { kanji: [] };
    if (object.detail) {
      detail.kanji = object.detail.kanji.map((data: any) => {
        return new KanjiTopic(data);
      });
    }
    Object.assign(this, object);
    this.detail = detail;
  }
    
  learning(): KanjiTopic[] {
    return this.detail.kanji.filter((topic: KanjiTopic) => {
      return topic.learning();
    });
  }
}

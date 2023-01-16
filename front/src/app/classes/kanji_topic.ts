import { IKanji } from '../interfaces/ikanji';
import { ITopic } from '../interfaces/itopic';
import { ANS_STATUS } from '../enums/ans_status';
import { LEVEL } from '../enums/level';

export class KanjiTopic implements ITopic {
  public id: number;
  public topic: IKanji;
  public level: LEVEL;
  public status: ANS_STATUS = ANS_STATUS.NOTANSWER;

  constructor(object: { id: number; topic: IKanji; level: string; status: number }) {
    Object.assign(this, object);
  }
  
  isCorrect(): boolean {
    return this.status === ANS_STATUS.CORRECT;
  }
  
  isIncorrect(): boolean {
    return this.status === ANS_STATUS.INCORRECT;
  }
  
  notAnswered(): boolean {
    return this.status === ANS_STATUS.NOTANSWER;
  }

  learning(): boolean {
    return true;
  }
}
import { Kanji } from '../classes/kanji';
import { LEVEL } from '../enums/level';
import { ANS_STATUS } from '../enums/ans_status';

export interface ITopic {
  id: number;
  topic: Kanji;
  level: LEVEL;
  status: ANS_STATUS;
}
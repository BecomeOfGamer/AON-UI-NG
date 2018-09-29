import { Tips } from './Tips';

export interface Buff {

  /**
   * String 名稱
   */
  Name: string;

  /**
   * String 圖片路徑
   */
  Webpath: string;

  /**
   * Boolean 是否是增益（否為減益）
   */
  Friendly: boolean;

  /**
   * String 提示
   */
  BuffTips: string;

  /**
   * Number 堆疊成數
   */
  Stacks: number;

  /**
   * Number 持續剩餘時間
   */
  Duration: number;

  /**
   * Number 持續總時間
   */
  MaxDuration: number;

  /**
   * Boolean 是否可堆疊
   */
  CanStacks: boolean;

  /**
   * Object Buff提示(重新組合)
   */
  Tips: Tips;
}

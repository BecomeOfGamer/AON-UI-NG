import { Tips } from './Tips';

export interface Skill {

  /**
   * 技能名稱
   */
  Name: string;

  /**
   * 是否啟用(有效性)
   */
  Enabled: boolean;

  /**
   * 是否顯示
   */
  Display: boolean;

  /**
   * 是否開啟(持續性)
   */
  Toggle: boolean;

  /**
   * 圖片路徑
   */
  Webpath: string;

  /**
   * 技能描述
   */
  Description: string;

  /**
   * CD百分比
   */
  CDPercent: number;

  /**
   * 目前CD時間
   */
  CurrentCD: number;

  /**
   * 目前最大CD時間
   */
  MaxCD: number;

  /**
   * 該技能目前可不可以升級
   */
  CanLevelUp: boolean;

  /**
   * 技能等級
   */
  CurrentLevel: number;

  /**
   * 技能最大等級
   */
  MaxLevel: number;

  /**
   * 技能提示(重新組合)
   */
  Tips: Tips;
}

export interface HeroCharacter {

  /**
   * 力量
   */
  Strength: number;

  /**
   * 敏捷
   */
  Agility: number;

  /**
   * 智力
   */
  Intelligence: number;

  /**
   * 外加力量
   */
  AdditionStrength: number;

  /**
   * 外加敏捷
   */
  AdditionAgility: number;

  /**
   * 外加智力
   */
  AdditionIntelligence: number;

  /**
   * 復活倒數
   */
  DeadTime: number;

  /**
   * 死亡給敵經驗值
   */
  BountyEXP: number;

  /**
   * 等級
   */
  CurrentLevel: number;

  /**
   * 目前經驗值
   */
  CurrentEXP: number;
}

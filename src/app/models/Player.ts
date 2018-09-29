export interface Player {

  /**
   * 英雄名稱
   */
  UnitName: string;

  /**
   * 隊伍編號
   */
  TeamId: number;

  /**
   * 是否存活中
   */
  IsAlive: number;

  /**
   * 移動速度
   */
  CurrentMoveSpeed: number;

  /**
   * 最大生命
   */
  CurrentMaxHP: number;

  /**
   * 生命
   */
  CurrentHP: number;

  /**
   * 最大魔力
   */
  CurrentMaxMP: number;

  /**
   * 魔力
   */
  CurrentMP: number;

  /**
   * 攻擊速度
   */
  CurrentAttackSpeed: number;

  /**
   * 等級
   */
  CurrentLevel: number;

  /**
   * 經驗值
   */
  CurrentEXP: number;

  /**
   * 攻擊值
   */
  CurrentAttack: number;

  /**
   * 護甲值
   */
  CurrentArmor: number;

  /**
   * 攻擊範圍
   */
  CurrentAttackRange: number;
}

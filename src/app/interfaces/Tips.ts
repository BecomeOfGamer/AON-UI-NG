export interface Tips {

  /**
   * 標題 Ex. '暈車'
   */
  header: string;

  /**
   * 內容 Ex. '坐車上山，山區顛簸暈眩，持續<num>2</num><agi>(+1)</agi>秒。'
   */
  content: string;

  /**
   * TAG 說明
   *
   * num      - 數值
   * comment  - 註解
   * unique   - 唯一性
   * heavy    - 重點
   * str      - 力量附加
   * agi      - 敏捷附加
   * int      - 智慧附加
   */
}

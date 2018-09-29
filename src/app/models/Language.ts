export interface Language {

  /**
   * 語系代號
   */
  key: string;

  /**
   * 語系縮圖
   */
  icon: string;

  /**
   * 多國語系變數 (assets/i18n/...)
   */
  text: string;

  /**
   * 語系使用
   */
  checked: boolean;
}

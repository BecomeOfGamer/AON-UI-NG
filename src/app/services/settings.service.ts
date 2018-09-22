import { Injectable } from '@angular/core';
import { Settings } from '../interfaces/Settings';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SettingsService {

  private settings: Settings;

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * 初始化設定檔案.
   * @returns {Settings}
   */
  public init(): Settings {
    // 之後要改成讀取用戶端本地檔案, 目前先寫死
    this.settings = { language: 'en' };
    return this.settings;
  }

  /**
   * 更新 model 的 settings
   * @param {string} language
   * @returns {Promise<Settings>}
   */
  public setLanguage(language: string): void {
    this.settings.language = language;
  }

  /**
   * 取得設定檔案 settings
   * @returns {Settings}
   */
  public getSettings(): Settings {
    return JSON.parse(JSON.stringify(this.settings));
  }

}

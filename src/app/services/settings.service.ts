import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../models/Settings';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private settings: Settings;

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * 初始化設定檔
   * @returns {Settings}
   */
  public init(): Settings {
    // 之後要改成讀取用戶端本地檔案, 目前先寫死
    this.settings = { language: 'zh-tw' };
    return this.settings;
  }

  /**
   * 設定語系檔
   * @param {string} language
   */
  public setLanguage(language: string): void {
    this.settings.language = language;
  }

  /**
   * 取得設定檔案
   * @returns {Settings}
   */
  public getSettings(): Settings {
    return JSON.parse(JSON.stringify(this.settings));
  }

}

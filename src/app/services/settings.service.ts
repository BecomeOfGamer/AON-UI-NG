import { Injectable } from '@angular/core';
import { Settings } from '../models/settings';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SettingsService {

  private settings: Settings;

  constructor(
    private http: HttpClient,
  ) { }

  public init(): Settings {
    this.settings = { language: 'en' };
    return this.settings;
  }

  /**
   * Set the new language and update the settingsService.
   * @param {string} language
   * @returns {Promise<Settings>}
   */
  public setLanguage(language: string): void {
    this.settings.language = language;
  }

  /**
   * Return a copy of the current settingsService.
   * @returns {Settings}
   */
  public getSettings(): Settings {
    return JSON.parse(JSON.stringify(this.settings));
  }

}

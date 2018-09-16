import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Settings } from '../../models/settings';

import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public settings: Settings;

  public languages: Array<Object>;

  constructor(
    private settingsService: SettingsService,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    this.languages = [{
      value: 'en',
      translate: 'LANGUAGES.EN',
    }, {
      value: 'zh-tw',
      translate: 'LANGUAGES.ZH-TW',
    }];
  }

  public setLanguage(event: any) {
    this.settings.language = event.target.value.split(' ')[1];
    this.settingsService.setLanguage(this.settings.language);
    this.translateService.use(this.settings.language);
  }

}

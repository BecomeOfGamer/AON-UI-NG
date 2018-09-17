import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Settings } from '../../models/settings';

import { SettingsService } from '../../services/settings.service';

import { faCoffee, faCog, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public settings: Settings;

  public languages: Array<Object>;

  public faCoffee = faCoffee;

  constructor(
    private settingsService: SettingsService,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    this.languages = [{
      key: 'en',
      text: 'LANGUAGES.EN',
      icon: 'flag-icon-en',
    }, {
      key: 'zh-tw',
      text: 'LANGUAGES.ZH-TW',
      icon: 'flag-icon-tw',
    }];
  }

  public setLanguage(event: any) {
    this.settings.language = event.target.value.split(' ')[1];
    this.settingsService.setLanguage(this.settings.language);
    this.translateService.use(this.settings.language);
  }

}

import { Component, OnInit } from '@angular/core';

import { Settings } from '@models/Settings';
import { Language } from '@models/Language';

import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private settings: Settings;

  constructor(
    private settingsService: SettingsService,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.init();

    const langs: Array<Language> = this.settings.languages;
    this.translateService.setDefaultLang(langs.find(value => value.checked).key);
  }

}

import { Component, OnInit } from '@angular/core';

import { Settings } from './models/Settings';

import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from './services/settings.service';

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
    this.translateService.setDefaultLang(this.settings.language);
  }

}

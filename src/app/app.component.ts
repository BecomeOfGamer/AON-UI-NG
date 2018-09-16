import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Settings } from './models/settings';

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
    this.setTranslations(this.settings.language);
  }

  public setTranslations(language: string): Promise<any> {
    this.translateService.setDefaultLang(language);
    return this.translateService.use(language).toPromise();
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Settings } from '@models/Settings';
import { SettingsService } from '@services/settings.service';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public settings: Settings;
  public faCoffee = faCoffee;

  constructor(
    private settingsService: SettingsService,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  public setLanguage(event: string) {
    this.settingsService.setLanguage(event);
    console.log(this.settings);
    this.translateService.use(event);
  }

}

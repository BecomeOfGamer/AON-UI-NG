import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SettingsService } from './services/settings.service';

import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

import { SettingsComponent } from './container/settings/settings.component';
import { PlayerComponent } from './container/player/player.component';
import { SkillComponent } from './container/skill/skill.component';
import { SkillCDComponent } from './container/skill-cd/skill-cd.component';
import { PlayerLifeComponent } from './container/player-life/player-life.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    PlayerComponent,
    SkillComponent,
    SkillCDComponent,
    PlayerLifeComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { DropdownComponent } from './components/dropdown/dropdown.component';

import { SettingsComponent } from './container/settings/settings.component';
import { PlayerComponent } from './container/player/player.component';
import { PlayerLifeComponent } from './container/player-life/player-life.component';
import { SkillComponent } from './container/skill/skill.component';
import { SkillCDComponent } from './container/skill-cd/skill-cd.component';
import { BuffComponent } from './container/buff/buff.component';
import { BuffCdComponent } from './container/buff-cd/buff-cd.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    SettingsComponent,
    PlayerComponent,
    PlayerLifeComponent,
    SkillComponent,
    SkillCDComponent,
    BuffComponent,
    BuffCdComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

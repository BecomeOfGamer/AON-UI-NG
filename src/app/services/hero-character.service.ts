import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroCharacter } from '@models/HeroCharacter';
import MockHeroCharacter from '@mock/MockHeroCharacter';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroCharacterService {

  private hero: HeroCharacter;

  constructor() { }

  /**
   * 初始化角色資訊
   * @returns {Observable<HeroCharacter>}
   */
  public getHero(): Observable<HeroCharacter> {
    this.hero = environment.production ? null : MockHeroCharacter;
    return of(this.hero);
  }

  /**
   * 更新角色資訊
   * @param hero 角色資訊
   */
  public update(hero: HeroCharacter): void {
    this.hero = hero;
  }
}

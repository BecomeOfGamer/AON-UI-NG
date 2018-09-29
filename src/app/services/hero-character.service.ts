import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroCharacter } from '../models/HeroCharacter';
import MockHeroCharacter from '../mock/MockHeroCharacter';

@Injectable({
  providedIn: 'root'
})
export class HeroCharacterService {

  constructor() { }

  /**
   * 初始化角色資訊
   * @returns {Observable<HeroCharacter>}
   */
  public getHero(): Observable<HeroCharacter> {
    return of(MockHeroCharacter);
  }
}

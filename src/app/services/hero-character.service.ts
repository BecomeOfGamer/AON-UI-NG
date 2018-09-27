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
   * Initial hero character.
   * @returns {Observable<HeroCharacter>}
   */
  public getHero(): Observable<HeroCharacter> {
    return of(MockHeroCharacter);
  }
}

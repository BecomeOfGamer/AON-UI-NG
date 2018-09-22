import { Injectable } from '@angular/core';

import { HeroCharacter } from '../models/HeroCharacter';
import MockHeroCharacter from '../mock/MockHeroCharacter';

@Injectable({
  providedIn: 'root'
})
export class HeroCharacterService {

  private heroCharacter: HeroCharacter;

  constructor() { }

  /**
   * Initial hero character.
   * @returns {HeroCharacter}
   */
  public init(): HeroCharacter {
    // return from UE4 or mock datas
    this.heroCharacter = MockHeroCharacter;
    return this.heroCharacter;
  }
}

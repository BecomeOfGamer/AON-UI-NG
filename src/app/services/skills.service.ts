import { Injectable } from '@angular/core';

import { Skill } from '../models/Skill';
import MockSkills from '../mock/MockSkills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills: Array<Skill>;

  constructor() { }

  /**
   * Initial skills.
   * @returns {Array<Skill>}
   */
  public init(): Array<Skill> {
    // return from UE4 or mock datas
    this.skills = MockSkills;
    return this.skills;
  }
}

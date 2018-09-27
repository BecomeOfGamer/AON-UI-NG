import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from '../models/Skill';
import MockSkills from '../mock/MockSkills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  /**
   * Initial skills.
   * @returns {Observable<Skill[]>}
   */
  public getSkills(): Observable<Skill[]> {
    return of(MockSkills);
  }
}

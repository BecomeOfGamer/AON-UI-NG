import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from '@models/Skill';
import MockSkills from '@mock/MockSkills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  /**
   * 初始化技能
   * @returns {Observable<Skill[]>}
   */
  public getSkills(): Observable<Skill[]> {
    return of(MockSkills);
  }
}

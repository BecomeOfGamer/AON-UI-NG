import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from '@models/Skill';
import MockSkills from '@mock/MockSkills';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills: Array<Skill>;

  constructor() { }

  /**
   * 初始化技能
   * @returns {Observable<Skill[]>}
   */
  public getSkills(): Observable<Skill[]> {
    this.skills = environment.production ? [] : MockSkills;
    return of(this.skills);
  }

  /**
   * 更新玩家資訊
   * @param player 玩家資訊
   */
  public update(skills: Array<Skill>): void {
    this.skills = skills;
  }
}

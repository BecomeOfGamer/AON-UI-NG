import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Buff } from '@models/Buff';
import MockBuffs from '@mock/MockBuffs';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class BuffsService {

  private buffs: Array<Buff>;

  constructor() { }

  /**
   * 初始化增減益
   * @returns {Observable<Buff[]>}
   */
  public getBuffs(): Observable<Buff[]> {
    this.buffs = environment.production ? [] : MockBuffs;
    return of(this.buffs);
  }

  /**
   * 更新玩家資訊
   * @param player 玩家資訊
   */
  public update(buffs: Array<Buff>): void {
    this.buffs = buffs;
  }
}

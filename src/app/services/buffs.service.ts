import { Injectable } from '@angular/core';

import { Buff } from '../models/Buff';
import MockBuffs from '../mock/MockBuffs';

@Injectable({
  providedIn: 'root'
})
export class BuffsService {

  private buffs: Array<Buff>;

  constructor() { }

  /**
   * Initial buffs.
   * @returns {Array<Buff>}
   */
  public init(): Array<Buff> {
    // return from UE4 or mock datas
    this.buffs = MockBuffs;
    return this.buffs;
  }
}

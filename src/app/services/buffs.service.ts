import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Buff } from '../models/Buff';
import MockBuffs from '../mock/MockBuffs';

@Injectable({
  providedIn: 'root'
})
export class BuffsService {

  constructor() { }

  /**
   * Initial buffs.
   * @returns {Observable<Buff[]>}
   */
  public getBuffs(): Observable<Buff[]> {
    return of(MockBuffs);
  }
}

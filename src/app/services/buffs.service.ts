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
   * 初始化增減益
   * @returns {Observable<Buff[]>}
   */
  public getBuffs(): Observable<Buff[]> {
    return of(MockBuffs);
  }
}

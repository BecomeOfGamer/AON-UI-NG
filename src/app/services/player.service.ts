import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '../models/Player';
import MockPlayer from '../mock/MockPlayer';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  /**
   * Initial player.
   * @returns {Observable<Player>}
   */
  public getPlayer(): Observable<Player> {
    return of(MockPlayer);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '@models/Player';
import MockPlayer from '@mock/MockPlayer';
import { Mock } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private player: Player;

  constructor() { }

  /**
   * 初始化玩家資訊
   * @returns {Observable<Player>}
   */
  public getPlayer(): Observable<Player> {
    this.player = MockPlayer;
    return of(this.player);
  }

  public update(player: Player): void {
    this.player = player;
  }
}

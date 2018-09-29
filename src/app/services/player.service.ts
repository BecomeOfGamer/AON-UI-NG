import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '@models/Player';
import MockPlayer from '@mock/MockPlayer';

import { environment } from '@env/environment';

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
    this.player = environment.production ? null : MockPlayer;
    return of(this.player);
  }

  /**
   * 更新玩家資訊
   * @param player 玩家資訊
   */
  public update(player: Player): void {
    this.player = player;
  }
}

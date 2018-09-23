import { Injectable } from '@angular/core';

import { Player } from '../models/Player';
import MockPlayer from '../mock/MockPlayer';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private player: Player;

  constructor() { }

  /**
   * Initial player.
   * @returns {Player}
   */
  public init(): Player {
    // return from UE4 or mock datas
    this.player = MockPlayer;
    return this.player;
  }
}

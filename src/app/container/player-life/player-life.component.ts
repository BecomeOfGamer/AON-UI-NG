import { Component, OnInit } from '@angular/core';

import { Player } from '../../models/Player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-life',
  templateUrl: './player-life.component.html',
  styleUrls: ['./player-life.component.scss']
})
export class PlayerLifeComponent implements OnInit {

  public player: Player;

  constructor(
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    this.player = this.playerService.init();
  }

}

import { Component, OnInit } from '@angular/core';

import { HeroCharacter } from '../../models/HeroCharacter';
import { HeroCharacterService } from '../../services/hero-character.service';

import { Player } from '../../models/Player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public hero: HeroCharacter;
  public player: Player;

  constructor(
    private heroCharacterService: HeroCharacterService,
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    this.hero = this.heroCharacterService.init();
    this.player = this.playerService.init();
  }

}

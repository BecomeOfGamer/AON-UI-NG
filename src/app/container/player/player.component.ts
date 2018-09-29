import { Component, OnInit } from '@angular/core';

import { Player } from '@models/Player';
import { PlayerService } from '@services/player.service';

import { HeroCharacter } from '@models/HeroCharacter';
import { HeroCharacterService } from '@services/hero-character.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public player: Player;
  public hero: HeroCharacter;

  constructor(
    private playerService: PlayerService,
    private heroService: HeroCharacterService,
  ) { }

  ngOnInit() {
    this.playerService.getPlayer().subscribe(player => this.player = player);
    this.heroService.getHero().subscribe(hero => this.hero = hero);
  }

}

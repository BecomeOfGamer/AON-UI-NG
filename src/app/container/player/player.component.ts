import { Component, OnInit } from '@angular/core';

import { HeroCharacter } from '../../models/HeroCharacter';
import { HeroCharacterService } from '../../services/hero-character.service';

import { Skill } from '../../models/Skill';
import { SkillsService } from '../../services/skills.service';

import { Buff } from '../../models/Buff';
import { BuffsService } from '../../services/buffs.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public hero: HeroCharacter;
  public skills: Array<Skill>;
  public buffs: Array<Buff>;

  constructor(
    private heroCharacterService: HeroCharacterService,
    private skillsService: SkillsService,
    private buffsService: BuffsService,
  ) { }

  ngOnInit() {
    this.hero = this.heroCharacterService.init();
    this.skills = this.skillsService.init();
    this.buffs = this.buffsService.init();
  }

}

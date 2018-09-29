import { Component, OnInit } from '@angular/core';

import { Skill } from '@models/Skill';
import { SkillsService } from '@services/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  public skills: Array<Skill>;
  public levels: Array<any> = [];

  constructor(
    private skillsService: SkillsService,
  ) { }

  ngOnInit() {
    this.skillsService.getSkills().subscribe(skills => this.skills = skills);
  }

}

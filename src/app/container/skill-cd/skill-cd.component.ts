import { Component, OnInit, Input } from '@angular/core';

import CDAnimation from '../../utils/skill-animation';

import { Skill } from '../../models/Skill';
import { Tips } from '../../models/Tips';

@Component({
  selector: 'app-skill-cd',
  templateUrl: './skill-cd.component.html',
  styleUrls: ['./skill-cd.component.scss']
})
export class SkillCDComponent implements OnInit {

  // 動畫演算法度量衡為[千]
  private finish = 0;
  private total = 1000;

  @Input() private skill: Skill;

  public webpath: string;
  public toggle: boolean;
  public percent: number;
  public currentLevel: number;
  public maxLevel: number;
  public tips: Tips;

  constructor() { }

  ngOnInit() {
    this.webpath = this.skill.Webpath;
    this.toggle = this.skill.Toggle;
    this.percent = Math.round(this.skill.CDPercent * 100);
    this.currentLevel = this.skill.CurrentLevel;
    this.maxLevel = this.skill.MaxLevel;
    this.tips = this.skill.Tips;

    // Set current load
    this.finish = this.percent * 10;
    this.finish = this.finish + (50 / this.skill.MaxCD);
  }

  /**
   * 渲染技能冷卻動畫
   * @param no {string}
   */
  public renderSliceStyle(no: number): Object {
    return CDAnimation(no, this.finish, this.total);
    // Example Style
    // this.slice1style = {
    //   'transform': `rotate(60deg)`,
    //   'ms-transform': `rotate(60deg)`,
    //   'moz-transform': `rotate(60degg)`,
    //   'webkit-transform': `rotate(60deg)`,
    //   'o-transform': `rotate(60deg)`,
    //   'zoom': 1,
    // };
    // this.slice2style = {
    //   'transform': `rotate(0deg)`,
    //   'ms-transform': `rotate(0deg)`,
    //   'moz-transform': `rotate(0degg)`,
    //   'webkit-transform': `rotate(0deg)`,
    //   'o-transform': `rotate(0deg)`,
    //   'zoom': 1,
    // };
  }

  /**
   * 渲染技能圖案
   */
  public renderWebpath(): BackroundImage {
    return { 'background-image': `url(/assets/${this.webpath})` };
  }

  /**
   * 渲染技能啟動
   */
  public renderToggle(): BackroundImage {
    return { 'background-image': this.toggle ? `url('/assets/skill-toggle.png')` : '' };
  }

}

interface BackroundImage {
  'background-image': string;
}

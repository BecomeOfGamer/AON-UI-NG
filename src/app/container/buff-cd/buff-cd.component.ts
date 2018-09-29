import { Component, OnInit, Input } from '@angular/core';

import CDAnimation from '@utils/skill-animation';

import { Buff } from '@models/Buff';
import { Tips } from '@models/Tips';

import { environment } from '@env/environment';

@Component({
  selector: 'app-buff-cd',
  templateUrl: './buff-cd.component.html',
  styleUrls: ['./buff-cd.component.scss']
})
export class BuffCdComponent implements OnInit {

  // 動畫演算法度量衡為[千]
  private finish = 0;
  private total = 1000;

  @Input() private buff: Buff;

  public webpath: string;
  public toggle: boolean;
  public percent: number;
  public currentLevel: number;
  public maxLevel: number;
  public tips: Tips;

  constructor() { }

  ngOnInit() {
    this.init();

    if (!environment.production) {
      this.mockBuffAnimate();
    }
  }

  /**
  * 渲染技能冷卻動畫
  * @param no {string}
  */
  public renderSliceStyle(no: number): Object {
    return CDAnimation(no, this.finish, this.total);
  }

  /**
   * 渲染技能圖案
   */
  public renderWebpath(): Object {
    return { 'background-image': `url(/assets/${this.webpath})` };
  }

  private init() {
    this.webpath = this.buff.Webpath;
    // this.percent = Math.round(this.buff.CDPercent * 100);
    this.percent = this.buff.MaxDuration > 0 ? Math.round((this.buff.MaxDuration - this.buff.Duration) / this.buff.MaxDuration * 100) : 0;
    this.tips = this.buff.Tips;

    // Set current load
    this.finish = this.percent * 10;
    // this.finish = this.finish + (50 / this.buff.MaxDuration);
  }

  private mockBuffAnimate() {
    setInterval(() => {
      const { Duration, MaxDuration } = this.buff;
      this.buff.Duration = Duration - 0.01 >= 0 ? Duration - 0.01 : MaxDuration;
      this.init();
    }, 10);
  }

}

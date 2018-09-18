import { Component, OnInit } from '@angular/core';

import CDAnimation from '../../utils/skill-animation';

@Component({
  selector: 'app-buff-cd',
  templateUrl: './buff-cd.component.html',
  styleUrls: ['./buff-cd.component.scss']
})
export class BuffCdComponent implements OnInit {

  public slice1style: Object;
  public slice2style: Object;

  public finish = 400;
  public total = 1000;
  public percent = (this.finish / this.total) * 100;

  constructor() { }

  ngOnInit() {
    this.slice1style = CDAnimation(1, this.finish, this.total);
    this.slice2style = CDAnimation(2, this.finish, this.total);

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

}

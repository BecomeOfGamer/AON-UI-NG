import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-cd',
  templateUrl: './skill-cd.component.html',
  styleUrls: ['./skill-cd.component.scss']
})
export class SkillCDComponent implements OnInit {

  public slice1style;
  public slice2style;

  constructor() { }

  ngOnInit() {
    this.slice1style = {
      'transform': `rotate(50deg)`,
      'ms-transform': `rotate(50deg)`,
      'moz-transform': `rotate(50degg)`,
      'webkit-transform': `rotate(50deg)`,
      'o-transform': `rotate(50deg)`,
      'zoom': 1,
    };

    this.slice2style = {
      'transform': `rotate(50deg)`,
      'ms-transform': `rotate(50deg)`,
      'moz-transform': `rotate(50degg)`,
      'webkit-transform': `rotate(50deg)`,
      'o-transform': `rotate(50deg)`,
      'zoom': 1,
    };
  }

}

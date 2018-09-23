import { Component, OnInit } from '@angular/core';

import { Buff } from '../../models/Buff';
import { BuffsService } from '../../services/buffs.service';

@Component({
  selector: 'app-buff',
  templateUrl: './buff.component.html',
  styleUrls: ['./buff.component.scss']
})
export class BuffComponent implements OnInit {

  public buffs: Array<Buff>;

  constructor(
    private buffsService: BuffsService,
  ) { }

  ngOnInit() {
    this.buffs = this.buffsService.init();
  }

}

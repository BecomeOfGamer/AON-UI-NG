import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faCoffee, faCog, faCheck } from '@fortawesome/free-solid-svg-icons';

import { Language } from '../../models/language';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public faCog = faCog;
  public faCheck = faCheck;

  @Input() title: String = 'Button';
  @Input() datas: Array<Language>;

  @Output() choose: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public clickHandler(item: Language) {
    this.datas = this.datas.map((data: Language) => {
      data.checked = data.key === item.key ? true : false;
      return data;
    });

    this.choose.emit(item.key);
  }

}

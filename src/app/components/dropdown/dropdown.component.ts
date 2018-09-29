import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faCog, faCheck } from '@fortawesome/free-solid-svg-icons';

import { Language } from '@models/Language';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public faCog = faCog;
  public faCheck = faCheck;

  /**
   * Dropdown items
   */
  @Input() public datas: Array<Language>;

  /**
   * Item click event
   */
  @Output() public choose: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public clickHandler(item: Language) {
    this.datas = this.datas.map(data => {
      data.checked = data.key === item.key ? true : false;
      return data;
    });
    this.choose.emit(item.key);
  }

}

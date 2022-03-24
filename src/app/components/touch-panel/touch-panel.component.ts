import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-touch-panel',
  templateUrl: './touch-panel.component.html',
  styleUrls: ['./touch-panel.component.scss'],
})
export class TouchPanelComponent implements OnInit {
  @Input() panelNumbers: number[];
  @Input() numbersLength: number;
  @Input() onNumberVerificaion = false;

  @Output() numberSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public sendNumber(num: number) {
    this.numberSelected.emit(num);
  }
}

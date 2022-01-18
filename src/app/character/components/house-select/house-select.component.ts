import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-house-select',
  templateUrl: './house-select.component.html',
})
export class HouseSelectComponent {
  @Output() onHouseChange = new EventEmitter<string>()

  constructor() { }

  onChange(event: any) {
    this.onHouseChange.emit(event.value)
  }
}

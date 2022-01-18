import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-wizard-table',
  templateUrl: './wizard-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardTableComponent {
  @Input() data: any = []
  displayedColumns = ['name', 'age', 'patronus', 'image']

  constructor() { }
}

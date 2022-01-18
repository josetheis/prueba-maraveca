import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { WizardTableComponent } from './components/wizard-table/wizard-table.component';

@NgModule({
  declarations: [WizardTableComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule, MatPaginatorModule],
  exports: [WizardTableComponent],
})
export class SharedModule {}

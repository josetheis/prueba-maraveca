import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { HouseSelectComponent } from './components/house-select/house-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CharacterComponent,
    HouseSelectComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MatSelectModule,
    MatTableModule,
    SharedModule
  ]
})
export class CharacterModule { }

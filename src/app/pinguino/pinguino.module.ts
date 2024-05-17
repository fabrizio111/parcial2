import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPinguinoComponent } from './list-pinguino/list-pinguino.component';
import { DetailPinguinoComponent } from './detail-pinguino/detail-pinguino.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListPinguinoComponent, DetailPinguinoComponent],
  exports: [ListPinguinoComponent]
})
export class PinguinoModule { }

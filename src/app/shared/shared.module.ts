import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe
  ],
  // providers:[] si on veut
})
export class SharedModule { }

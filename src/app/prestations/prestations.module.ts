import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PrestationsRoutingModule} from './prestations-routing.module'; // ajout



@NgModule({
  declarations: [PrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule // ajout
  ]
})
export class PrestationsModule { }

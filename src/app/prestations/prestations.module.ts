import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PrestationsRoutingModule} from './prestations-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component'; // ajout
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PrestationsComponent, ListPrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule, // ajout
    SharedModule // J3 PM1 ajout
  ]
})
export class PrestationsModule { }

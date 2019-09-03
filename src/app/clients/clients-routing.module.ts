import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent} from './pages/clients/clients.component';

// ajout
const appRoutes: Routes = [
  { path: '', component: ClientsComponent }
];


@NgModule({
  declarations: [],
  imports: [

    RouterModule.forChild(
      appRoutes  // ajout
      )

  ]
})
export class ClientsRoutingModule { }

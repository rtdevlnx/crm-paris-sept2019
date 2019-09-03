import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrestationsComponent } from './pages/prestations/prestations.component';


// ajout
const appRoutes: Routes = [
  { path: '', component: PrestationsComponent }
];


@NgModule({
  // declarations: [],
  imports: [

    RouterModule.forChild(
       appRoutes  // ajout
       )

    // CommonModule
  ]
})


export class PrestationsRoutingModule { }




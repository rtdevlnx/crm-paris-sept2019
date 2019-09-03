import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// https://angular.io/guide/router
import { RouterModule, Routes, Router } from '@angular/router'; // import du routerModule des routes à ajouter
import { LoginComponent } from './login/pages/login/login.component';


// https://angular.io/guide/router


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: '/login', // en mettant /, redirection total depuis .com
    pathMatch: 'full'
  },

   // Prestations en Dyn :  Etape 1
  // https://angular.io/guide/router#lazy-loading-route-configuration

  { // route dynamique pour prestations
    // loadChildren: () => import('./prestations/prestations.module').then(mod => mod.PrestationsModule),
    path: 'prestations',
     // tslint:disable-next-line: max-line-length
     loadChildren: () => import('src/app/prestations/prestations.module').then(mod => mod.PrestationsModule), // le routeur importe juste un module
  },

  /*
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' } // data a envoyer
  },
*/
  // { path: '**', component: PageNotFoundComponent } // pout toutes les url inconnues, 404


  { // route dynamique pour prestations
    // loadChildren: () => import('./prestations/prestations.module').then(mod => mod.PrestationsModule),
    path: 'clients',
     // tslint:disable-next-line: max-line-length
     loadChildren: () => import('src/app/clients/clients.module').then(mod => mod.ClientsModule), // le routeur importe juste un module
  },


];


@NgModule({
 // declarations: [],
  imports: [ // router initialisé qu'nune seule fois, au demarrag de l'appli
    RouterModule.forRoot(// meth forRoot(1 arg = 1 tab de routes), ne peut etre initialisé q'1 seule fois dans l'app (Singleton)
      appRoutes, // tableau de toutes named appRoutes
      { enableTracing: false, // <-- debugging purposes only // verif si le user s'est bien connecté (token)
        preloadingStrategy: 'PreloadAllModules' // le Routeur preload en tache de fond les modules

      }
    )
  ]
})




export class RoutingModule {

  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
​
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));

  }
}

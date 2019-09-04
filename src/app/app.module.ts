// J3 PM1 : https://angular.io/api/core/LOCALE_ID
import { LOCALE_ID } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RoutingModule } from './routing.module'; // import auto after rajout J2-PM-3 ci-dessous
import { UiModule } from './ui/ui.module';

// J3 PM1 : https://angular.io/guide/i18n
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModule, // rajouté J2-PM-3
    UiModule,
    FontAwesomeModule,
    LoginModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR' } // J3 PM1
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

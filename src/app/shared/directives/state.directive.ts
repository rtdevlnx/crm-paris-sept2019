import { Directive, Input, HostBinding, OnChanges } from '@angular/core';


@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {


 @Input() appState ;
 @HostBinding ('class') nomClass: string;

  constructor() {   }


  ngOnChanges() { // mieux que ngOnInit qui n'est app qu'1 cois afater le const
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }



  private formatClass(state): string{
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}`;
  }


// creer string state-option si this.appState vaut Option
// creer string state-annule si this.appState vaut Annulé
// creer string state-confirme si this.appState vaut Confirmé

// Binder la propriété class de l'élément host (td) avec ce string






}


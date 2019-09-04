import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';
// import { TestBed } from '@angular/core/testing';

export class Prestation implements PrestationI{ // ajout implements PrestationI

  id: string;
  typePresta: string;
  client: string;
  nbJours = 1;
  tjmHt = 600;
  tauxTva = 20;
  state = State.OPTION;
  comment: string;

  constructor(fields?: Partial<Prestation>){
    if (fields){
      Object.assign(this, fields);
    }

  }

  totalHt(): number {
    // init : throw new Error("Method not implemented.");
    return this.tjmHt * this.nbJours;
  }


  totalTtc(tva?: number): number {
    // init :  throw new Error("Method not implemented.");
    if (tva) {
      if (tva <= 0) {
        return this.totalHt();
      }
      return this.totalHt() * (1 + tva / 100);
    }
    return this.totalHt() * (1 + this.tauxTva / 100);
  } // mutiple return possibles / possible aussi 1 seul return avec une var qui change de valeur

}



/*

let test = new Prestation();
let test = new Prestation({'id':'hjdqhxqjKLJ'});


test.id = 'hjdqhxqjKLJ';
*/







import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakeCollection } from './fake-collection';

@Injectable({ // decorator pour montrer que c'est un SVC
  providedIn: 'root' // Depuis Ang6 : plus besoin de le dec in providers dans AppRoot, inst des le demm de root
})


export class PrestationsService {


  private pCollection: Prestation[]; // Attribut pCollection de type Tab[] de Prestation



 // Constructeur
  constructor() {
    this.collection = fakeCollection;

  }

// get Collection
get collection(): Prestation[]{
  return this.pCollection;
}

// set Collection
set collection(col: Prestation[]){
  this.pCollection = col;
}

// update item in Collection
public update(item, state) {
   console.log(item);
   item.state = state;
   console.log(item);
 }

// add item in Collection

// get item by id in Collection

}

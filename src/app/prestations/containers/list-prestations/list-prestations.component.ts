import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';



@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})


export class ListPrestationsComponent implements OnInit { // implements nom_itf

  public collection: Prestation[];

  public headers = [
  'Type',
  'Client',
  'Durée',
  'Total Ht',
  'Total Ttc',
  'State',
  'Action'
];



  constructor(
    private prestationsService: PrestationsService

  ) {   }


  ngOnInit() { // life Cycle  : Angular use it pour initialiser des proprietes
  this.collection = this.prestationsService.collection;

  }

}

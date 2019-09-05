import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {

  public states = State ; // variable states = State, qui contient State enum, pour faire une reference

  @Input() // decorator pour
  item: Prestation;

  constructor() {
    // console.log(this.item);
  }

  ngOnInit() {
    console.log(this.item);
  }

  public changeState(arg, item){

    item.state = arg.target.value;

    // console.log(arg.target.value);
    // this.prestationsService.update(item, arg.target.value);
  }
}

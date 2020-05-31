import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: 'crop-advisory.component.html',
  styleUrls: ['crop-advisory.component.css']
})


export class CropAdvisoryComponent implements OnInit {
  ngOnInit() {}
// tslint:disable-next-line:member-ordering
  selectedscheme = 'District';
  // tslint:disable-next-line:member-ordering
  schemes: Array<any> = [
    { name: 'Farming', states: [{ name: 'Crop Insurance',
        cities: ['Pradhan Mantri Fasal Bima Yojana', 'TATA AIG'] }, { name: 'Fertilizer Insurance',
        cities: ['TATA AIG', 'B'] }] },
    { name: 'Animal Husbandry', states: [{ name: 'Livestock Insurance', cities: ['Dairy', 'Fishery'] }, { name: 'SBI Insurance',
        cities: ['Cattle', 'Sheep & Goat'] }, { name: 'HDFC', cities: ['Cattle Insurance'] }] },
  ];
  // tslint:disable-next-line:member-ordering
  states: Array<any>;
  // tslint:disable-next-line:member-ordering
  cities: Array<any>;

  changeScheme(Scheme) {
    this.selectedscheme = Scheme;
    this.states = this.schemes.find(cntry => cntry.name === Scheme).states;
  }
  changeState(state) {
    this.cities = this.schemes.find(cntry => cntry.name === this.selectedscheme).states.find(stat => stat.name === state).cities;
  }
}




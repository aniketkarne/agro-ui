import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as L from "leaflet";
import { Layer, tileLayer, geoJSON, LayerOptions } from 'leaflet';
import 'leaflet-providers';


@Component({
  selector: 'app-user-details',
  templateUrl: 'crop-advisory.component.html',
  styleUrls: ['crop-advisory.component.css']
})


export class CropAdvisoryComponent implements OnInit {
  private url: string = "assets/pune.geojson";
  constructor(private http: HttpClient) {}


  map: L.Map;
  json;
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 8,
    center: L.latLng(18.5074213, 73.7871499)
  };
  ngOnInit() {

  }

  onMapReady(map: L.Map) {
    this.http.get(this.url).subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json).addTo(map);
      this.map = map;
    });
  }


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
  toggleShow = false;
  showHideMap()
  {
    this.toggleShow = true;
  }

  showMap(url)
  {
    this.toggleShow = false;
    this.url = url;
    this.onMapReady(this.map);
  }


  loadMap()
  {
    alert("here");
    //this.onMapReady();
  }
}




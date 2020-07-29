import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-search-bar-content',
  templateUrl: './search-bar-content.component.html',
  styleUrls: ['./search-bar-content.component.css']
})
export class SearchBarContentComponent implements OnInit {

  value: number = 2000;
  value2: number = 80000;
  value3: number = 2004;
  value4: number = 2015;
  highValue: number = 12000;

  options: Options = {
    floor: 0,
    ceil: 40000
  };
  options2: Options = {
    floor: 0,
    ceil: 200000
  };
  options3: Options = {
    floor: 2000,
    ceil: 2020
  };
  options4: Options = {
    floor: 2002,
    ceil: 2020
  };
  
  constructor() { }
  
  ngOnInit(): void { 
  }

}


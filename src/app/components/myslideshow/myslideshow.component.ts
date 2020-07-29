import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myslideshow',
  templateUrl: './myslideshow.component.html',
  styleUrls: ['./myslideshow.component.css']
})
export class MyslideshowComponent implements OnInit {

  // myTable : [];
  myTable = ['car_landscape.jpeg','car_landscape2.jpg','car_landscape3.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}

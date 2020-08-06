import { Component, OnInit } from '@angular/core';
import { AdvertsService } from 'src/app/services/adverts.service';
import { Advert } from 'src/app/models/advert';

@Component({
  selector: 'app-my-garage',
  templateUrl: './my-garage.component.html',
  styleUrls: ['./my-garage.component.css']
})
export class MyGarageComponent implements OnInit {

  lastUpdate = new Promise(
    (resolve,reject)=>{
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        },2500
      );
    }
  )
  advertCount : number;
  adverts : Advert[];

  constructor(private httpget : AdvertsService, private readAdverts: AdvertsService) { }

  ngOnInit(): void {
    this.httpget.getGarage1().subscribe( data => {
      this.adverts = data;
      this.advertCount = this.adverts.length;
    });
  }
}

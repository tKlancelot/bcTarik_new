import { Component, OnInit } from '@angular/core';
import { AdvertsService } from 'src/app/services/adverts.service';
import { Advert } from 'src/app/models/advert';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
 
// such override allows to keep some initial values
 
export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: false, striped: false,  max: 150 });
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class HomeComponent implements OnInit {
  
  advert : Advert[];
  isLoading: boolean;
  advertCount : number;


  constructor(private httpget : AdvertsService, private readadverts : AdvertsService, private deleteThisAdvert : AdvertsService) {

  }

  ngOnInit(): void {
    this.httpget.getAllAdverts().subscribe( data => {
      this.advert = data;
      this.isLoading = false;
      this.advertCount = this.advert.length;
    });
  }
}
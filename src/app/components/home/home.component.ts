import { Component, OnInit } from '@angular/core';
import { AdvertsService } from 'src/app/services/adverts.service';
import { Advert } from 'src/app/models/advert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  advert : Advert[];
  isLoading: boolean;
  advertCount : number;
  
  constructor(private httpget : AdvertsService, private readadverts : AdvertsService) { }

  // deleteThisShoe(id: number): void {
  //     this.isLoading = true;
  //     this.deleteShoe.deleteShoe(id).subscribe(then => {
  //       this.deleteShoe.getAllShoes().subscribe((data: Shoes[]) => {
  //         this.shoes = data;
  //         this.isLoading = false;
  //       });
  //     });
  //   }

  ngOnInit(): void {
    this.httpget.getAllAdverts().subscribe( data => {
      this.advert = data;
      this.isLoading = false;
      this.advertCount = this.advert.length;
    });
  }
}
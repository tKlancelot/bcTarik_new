import { Component, OnInit } from '@angular/core';
import { GarageOwner } from 'src/app/models/garage-owner';
import { GarageOwnerService } from 'src/app/services/garage-owner.service';
import { AdvertsService } from 'src/app/services/adverts.service';
import { Advert } from 'src/app/models/advert';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  advert : Advert[];
  garageOwner : GarageOwner[];
  isLoading: boolean;
  garageOwnerCount : number;
  advertCount : number;
  tableau : boolean = true ;
  
  constructor(
    private httpget : GarageOwnerService,  
    private deleteGarageOwner : GarageOwnerService,
    private readAdverts : AdvertsService,
    private deleteThisAdvert : AdvertsService
    ) {
  
  }

  deleteThisGarageOwner(id: number): void {
    this.isLoading = true;
    this.deleteGarageOwner.deleteGarageOwner(id).subscribe(then => {
      this.deleteGarageOwner.getAllGarageOwners().subscribe((data: GarageOwner[]) => {
        this.garageOwner = data;
        this.isLoading = false;
      });
    });
  }

  deleteThisAd(id: number): void {
    this.isLoading = true;
    this.deleteThisAdvert.deleteAdvert(id).subscribe(then => {
      this.deleteThisAdvert.getAllAdverts().subscribe((data: Advert[]) => {
        this.advert = data;
        this.isLoading = false;
      });
    });
  }

  showAdverts(){
    if(this.tableau = true){
      this.tableau = false;
    }
  }

  showGarageOwners(){
    this.tableau = true;
  }  

  ngOnInit(): void {
    this.httpget.getAllGarageOwners().subscribe( data => {
      this.garageOwner = data;
      this.isLoading = false;
      this.garageOwnerCount = this.garageOwner.length;
    });
    this.readAdverts.getAllAdverts().subscribe( data => {
      this.advert = data;
      this.isLoading = false;
      this.advertCount = this.advert.length;
    });
  }
}
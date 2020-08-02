import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { ActivatedRoute } from '@angular/router';
import { AdvertsService } from 'src/app/services/adverts.service';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.css']
})
export class AdvertDetailComponent implements OnInit {

  id : number;
  element : Advert;
  isLoading : boolean;

  constructor(private route : ActivatedRoute, private recupId : AdvertsService) { }


  ngOnInit() {
    this.isLoading = true;
    this.recupId.getOneAdvert(+this.route.snapshot.paramMap.get('id')).subscribe((data:
    Advert) => {
    this.element = data;
    this.isLoading = false;
    });
  }
}
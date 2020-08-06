import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/app/models/advert';
import { AdvertsService } from 'src/app/services/adverts.service';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {
  
  advert : Advert;
  brands = ['renault','peugeot','citroën','honda','toyota','mitsubishi','wolkswagen','mercedes','fiat','kia'];

  constructor(private addAdvert : AdvertsService, private router: Router) { }
  
  onSubmit() {
    this.addAdvert.addAdvert(this.advert).subscribe(then => {
    this.router.navigate(['/myGarage/1']);
    });
  }

  ngOnInit(): void {
    this.advert = new Advert();
  }

}
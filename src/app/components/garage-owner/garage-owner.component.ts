import { Component, OnInit } from '@angular/core';
import { GarageOwnerService } from 'src/app/services/garage-owner.service';
import { ActivatedRoute } from '@angular/router';
import { GarageOwner } from 'src/app/models/garage-owner';
import { GaragesService } from 'src/app/services/garages.service';
import { Garage } from 'src/app/models/garage';
import { elementAt } from 'rxjs/internal/operators';


@Component({
  selector: 'app-garage-owner',
  templateUrl: './garage-owner.component.html',
  styleUrls: ['./garage-owner.component.css']
})
export class GarageOwnerComponent implements OnInit {

id : number;
element : GarageOwner;
show : boolean;

garage : Garage[];
garageCount : number;


  constructor(private route : ActivatedRoute, private recupId : GarageOwnerService, private httpget : GaragesService, private readGarages : GaragesService) { }

  ngOnInit(): void {
    this.recupId.getOneGarageOwner(+this.route.snapshot.paramMap.get('id')).subscribe((data:
    GarageOwner) => {
    this.element = data;
    });

    this.httpget.getGarageWhereId().subscribe( data => {
      this.garage = data;
      this.garageCount = this.garage.length;
    });
  }
} 
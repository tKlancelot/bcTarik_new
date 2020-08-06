import { Component, OnInit } from '@angular/core';
import { GarageOwnerService } from 'src/app/services/garage-owner.service';
import { ActivatedRoute } from '@angular/router';
import { GarageOwner } from 'src/app/models/garage-owner';
import { nlBeLocale } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-header-garage-owner',
  templateUrl: './header-garage-owner.component.html',
  styleUrls: ['./header-garage-owner.component.css']
})
export class HeaderGarageOwnerComponent implements OnInit {

  message = 'hello';

  // bello = (<string>this.message).replace('h','b');
  // hola = this.bello.slice(0,2);

  id : number;
  element : GarageOwner;
  
  constructor(private route : ActivatedRoute, private recupId : GarageOwnerService) { }


  ngOnInit(): void {

    this.recupId.getOneGarageOwner(+this.route.snapshot.paramMap.get('id')).subscribe((data:
    GarageOwner) => {
    this.element = data;
    });
  }

}

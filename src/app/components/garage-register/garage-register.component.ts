import { Component, OnInit } from '@angular/core';
import { GarageOwnerService } from 'src/app/services/garage-owner.service';
import { Router } from '@angular/router';
import { GarageOwner } from 'src/app/models/garage-owner';

@Component({
  selector: 'app-garage-register',
  templateUrl: './garage-register.component.html',
  styleUrls: ['./garage-register.component.css']
})

export class GarageRegisterComponent implements OnInit {
  
  garageOwner : GarageOwner;
  
  constructor(private addGarageOwner : GarageOwnerService, private router: Router) { }

  onSubmit() {
    this.addGarageOwner.addGarageOwner(this.garageOwner).subscribe(then => {
    this.router.navigate(['/garageLogin']);
    });
  }

  ngOnInit(): void {
    this.garageOwner = new GarageOwner();
  }

}
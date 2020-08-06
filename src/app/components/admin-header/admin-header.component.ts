import { Component, OnInit } from '@angular/core';
import { GarageOwnerService } from 'src/app/services/garage-owner.service';
import { GarageOwner } from 'src/app/models/garage-owner';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }

}

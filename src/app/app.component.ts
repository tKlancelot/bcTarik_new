import { Component, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
  :host >>> .alert-md-local {
    background-color: #68d4f8;
    border-color: #48b4d8;
    color: #fff;
    
  }
  `
  ]

})
export class AppComponent {
  title = 'projectBC';
  disabled: boolean = false;

  isCollapsed = false;

  // decommenter lorsque app finished
  
  // constructor(private router: Router) { 
  //   this.router.navigate(['/clientView']);
  // }
  

}

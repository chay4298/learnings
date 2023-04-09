import { Component } from '@angular/core';

@Component({
  //selector can be be created as element
  selector: 'app-servers',
  //selector can be created as attribute
  // selector: ['app-servers'],
  //selector can be created as class 
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  //used for creating HTML template in component file
  /*
  template : `
  <app-server></app-server>
  <app-server></app-server>
  `,
  */
  styleUrls: ['./servers.component.css']
  //used for creating CSS template in component file
  /*
  styles:`[
    h3{
      color: DodgerBlue
    }
  `]
  */
})
export class ServersComponent {

}

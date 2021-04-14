import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sala-de-juegos';
  usuario=localStorage.getItem('user'); 

  constructor (public router:Router){
      console.log(this.router.url);
  }

  
}




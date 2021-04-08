import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import {Usuario} from '../../clases/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Usuario = new Usuario();
  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

  Registrar(){
    /*console.log(this.user);
    this.loginService.Registrar(this.user);*/
  }

  async Login(){
    
    console.log( await this.loginService.Login(this.user));
  }
}

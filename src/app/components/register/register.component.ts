import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { LoginServiceService } from '../../services/login-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:Usuario = new Usuario();
  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

  Registrar(){
    console.log(this.loginService.Registrar(this.user));
  }
}

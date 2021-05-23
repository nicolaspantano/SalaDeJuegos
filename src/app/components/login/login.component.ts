import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Usuario} from '../../clases/usuario';
import Swal, {SweetAlertIcon} from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Usuario = new Usuario();
  form:FormGroup;
  correo:string="";
  password:string="";
  private isEmail = /\S+@\S+\.\S+/;
  constructor(private router:Router,private fb:FormBuilder,private userSvc:UsuarioService) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(){
    this.form = this.fb.group({
      correo: ['', [Validators.required,Validators.pattern(this.isEmail)]],
      password: ['', [Validators.required]]
    });

  }

  async Login(){
    
    //console.log( await this.loginService.Login(this.user));
    this.alert('info', 'Validando datos');
    console.log("Login",this.user);
    this.userSvc.BuscarUsuario(this.user).valueChanges().subscribe(res => {
      if(res.length!=0){
        localStorage.setItem('token',this.user.correo);
        this.alert('success','Login exitoso');
        Swal.fire({
          title:'Login exitoso',
          icon:'success'
        }
        ).then(() => {
          this.router.navigateByUrl('');
        })
        
      }
      else{
        this.alert('error','Usuario incorrecto');
      }
    })
  }

  HardcodearUsuario(){
    this.user.correo='prueba@hotmail.com';
    this.user.password='123456';
  }

  alert(icon: SweetAlertIcon, titulo: string, text?:string) {
   Swal.fire({
     title:titulo,
     text:text,
     icon:icon
   })
  }

  isValid(field:string){
    const validateField = this.form.get(field);
    return !validateField.valid && validateField.touched
      ? 'is-invalid'
      : validateField.touched
        ? 'is-valid'
        : '';
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { LoginServiceService } from '../../services/login-service.service';
import {UsuarioService} from '../../services/usuario.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:Usuario = new Usuario();
  form:FormGroup;
  public id:any;
  correo:string="";
  password:string="";
  private isEmail = /\S+@\S+\.\S+/;
  constructor(private router:Router,private fb: FormBuilder, private userSvc:UsuarioService) { }

  ngOnInit(): void {
    this.initForm();
  }

  async Registrar(){
    //console.log(this.loginService.Registrar(this.user));
    await this.userSvc.BuscarUsuario(this.user).valueChanges().subscribe(res => {
      if(res.length == 0){
        this.userSvc.Crear(this.user).then(()=>{
          console.log("creado");
          localStorage.setItem('token',this.user.correo);
          //this.router.navigateByUrl('');
        })
      }
      else{
        console.log('ya existe'); 
      }
    })
    
  }

  private initForm(){
    this.form = this.fb.group({
      correo: ['', [Validators.required,Validators.pattern(this.isEmail)]],
      password: ['', [Validators.required]]
    });

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

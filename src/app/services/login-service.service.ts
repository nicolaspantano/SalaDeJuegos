import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConexionFirebaseDatabaseService} from './conexion-firebase-database.service';
import { Usuario } from '../clases/usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  firebase :ConexionFirebaseDatabaseService;
  public isLogged:any = false;
  

  constructor(private bd:AngularFirestore, private router:Router) { 
   this.firebase = new ConexionFirebaseDatabaseService(bd);
  }

  Login(user:Usuario){
    this.firebase.col$('usuarios',(ref:any) => ref.where('email','==',user.email)).subscribe(res => {
      let usuario = <Usuario>res[0];
      if(usuario.password == user.password){
        this.isLogged=true;
        this.router.navigateByUrl('');
      }
    });
   
  }

  async Registrar(user:Usuario){
    

    this.firebase.col$('usuarios',(ref:any) => ref.where('email','==',user.email)).subscribe(res => {
      let usuario = <Usuario>res[0];
      if(usuario){
          return false
      }
      this.firebase.add('usuarios',user);
      this.router.navigateByUrl('/');
      return true;
    });

  }

  
}

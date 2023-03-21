import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  form={
    correo: "",
    contrasena:""
  }

  constructor(private Auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.Auth.authState.subscribe(user=>{
      if(user){
        this.router.navigate(['/inicio'])
      }
    })
  }
  
  
  IniciarSesion(){
    this.Auth.signInWithEmailAndPassword(this.form.correo, this.form.contrasena).then((userCredential)=>{
      // Signed in
      const User = userCredential.user;
      console.log(User)
      alert("Bienvenid@!")
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
}

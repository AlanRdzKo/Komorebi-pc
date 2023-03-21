import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form={
    usuario: "",
    correo: "",
    contrasena: ""
  }
  ccontrasena: any

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  
  adduser(form:any){
    var promise = new Promise((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(form.correo,form.contrasena)
      .then((result) => {
        resolve(result)
      })
      .catch(function(error){
        if(error.code == 'auth/invalid-email'){
          alert("Ingresa un correo electrónico valido!.")
        }
        if(error.code == 'auth/email-already-in-use'){
          alert('Ese correo ya se encuentra en registrado.')
        }
        if(error.code == 'auth/weak-password'){
          alert('La contraseña debe tener almenos 6 caracteres!.')
        }
      })
    })
    return promise;
  }
  
    registrarme(){
      if(this.form.usuario != '' && this.form.correo != '' && this.form.contrasena != '' && this.ccontrasena != ''){
        if(this.form.contrasena != this.ccontrasena){
          alert("Las contraseñas no coinciden")
        }
        else{
          this.adduser(this.form).then((result)=>{
            if(result){
              alert("¡Registrado correctamente!")
              this.ngOnInit()
              location.reload()
            }
            else{
              alert("Error. Intenta nuevamente.")
            }
          })
        }
      }
      else{
        alert("Favor de completar los datos.")
      }
    }
  }

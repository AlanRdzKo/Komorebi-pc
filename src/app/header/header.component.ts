import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  usuario_activo: boolean | undefined;
  constructor(private auth: AngularFireAuth, private router:Router) {
  }

  ngOnInit(): void {
    this.auth.authState.subscribe(user => {
      if (user){
        this.usuario_activo = true
      }
      else{
        this.usuario_activo = false
      }
    })
  }

  cerrarSesion(){
    this.auth.authState.subscribe(user =>{
      if(user){
        this.auth.signOut().then(()=>{
          localStorage.removeItem('user');
          alert("Sesion finalizada!")
          window.location.reload()
        })
      }
      else{
        this.router.navigate(['/home'])
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private router:Router) { }

  ngOnInit(): void {
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
        this.router.navigate(['/inicio'])
      }
    })
  }

}

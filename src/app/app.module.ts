import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { AboutusComponent } from './content/aboutus/aboutus.component';
import { HelpComponent } from './content/help/help.component';


import { PatchnotesComponent } from './content/patchnotes/patchnotes.component';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './sesion/sesion.component';
import { RegisterComponent } from './register/register.component';
import { PracticaComponent } from './practica/practica.component';

import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { CrudService } from './services/crud.service';
import { ProgToolsComponent } from './content/prog-tools/prog-tools.component';

const appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'contact',component: ContactComponent}, 
  {path: 'aboutus',component: AboutusComponent}, 
  {path: 'help',component: HelpComponent}, 
  {path: 'patchnotes',component: PatchnotesComponent},
  {path: 'sesion', component: SesionComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'practica', component: PracticaComponent},
  {path: 'prog-tools', component: ProgToolsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PatchnotesComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    HelpComponent,
    ContentComponent,
    NavbarComponent,
    HeaderComponent,
    ContactComponent,
    SesionComponent,
    RegisterComponent,
    PracticaComponent,
    ProgToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    OwlModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

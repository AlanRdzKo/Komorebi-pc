import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargascriptsService {

  constructor() { }

carga(archivos:string[]){
  console.log(archivos)
  for (let archivo of archivos){
    console.log(archivo)
    let script = document.createElement("script");
    script.src = archivo;
    let body = document.getElementsByTagName("body")["0"];
    body.appendChild(script);
  }
}
}

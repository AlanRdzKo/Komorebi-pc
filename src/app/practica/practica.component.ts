import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css'] 
})
export class PracticaComponent implements OnInit {

  // Declaracion de variable //
  texto: string
  nombre: string
  apellido: string
  nomcomp: string
  num1; num2; suma; mult; Nume1; Nume2; resop: number
  Arreglo: Array<string>
  nombreAlumno: string // Var
  genero: string
  Calif: number
  Op: string
 // Fin declaracion de variables //

  constructor() { 
    this.texto = 'Hola Mundo'
    this.nombre = 'Alan Martin'
    this.apellido = 'Rodriguez Ceballos'
    this.nomcomp = this.nombre +' '+ this.apellido
    this.num1 = 5
    this.num2 = 8
    this.suma = this.num1 + this.num2
    this.mult = this.num1 * this.num2
    this.Arreglo = []
    this.nombreAlumno = ''
    this.genero = ''
    this.Calif=0
    this.Op = ''
    this.Nume1 = 0
    this.Nume2 = 0
    this.resop = 0
  }
  ngOnInit(): void {
    // EJECUTAR PROCESOS //
    console.log(this.texto)

    // Alerta //

    alert(this.texto)
  }
  agregar(): void{
    if (this.nombreAlumno == '') {
      console.log('Ingresa un valor valido.')
    } else {
      this.Arreglo.push(this.nombreAlumno)
      console.log(this.Arreglo) 
    }
  }
  recorrer(): void{
    console.log('Recorrer arreglo')
    for (let x = 0; x < this.Arreglo.length; x++) 
    {
      console.log(this.Arreglo[x]) 
    }
  }
  Comparar(): void
  {
    if (this.genero == 'Hombre') {
    alert('Es hombre')  
    } 
    else 
    if (this.genero == 'Mujer') 
    {
    alert('Es mujer')  
    } 
    else 
    {
    alert('Seleccione un genero.')  
    }
  }
  Obt_Calif(): void
  {
    if (this.Calif >= 0 && this.Calif <= 30) {
      alert('Muy deficiente')
    } else {
      if (this.Calif >= 31 && this.Calif <= 50) {
        alert('Insuficiente')
      } else {
        if (this.Calif >= 51 && this.Calif <= 60) {
          alert('Suficiente')
        } else {
          if (this.Calif >= 61 && this.Calif <= 70) {
            alert('Bien')
          } else {
            if (this.Calif >= 71 && this.Calif <= 90) {
              alert('Notable')
            } else {
              if (this.Calif >= 91 && this.Calif <= 100) {
                alert('Sobresaliente')
              } else {
                alert('La calificacion no puede exceder a 100')
              }
            }
          }
        }
      }
    }
  }
  Operacion(): void
  {
    switch (this.Op) {
      case 'multi':
        this.resop = this.Nume1 * this.Nume2
      break;
      case 'suma':
        this.resop = this.Nume1 + this.Nume2
      break;
      case 'resta':
        this.resop = this.Nume1 - this.Nume2        
      break;
      case 'dividir':
        this.resop = this.Nume1 / this.Nume2
      break;
      default:
        break;
    }
    alert('El resultado es: ' + this.resop)
  }
}

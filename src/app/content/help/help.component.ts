import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  form={
    user: "",
    asunto:"",
    descripcion: "",
    fecha: ""
  }

  coleccion: string
  registros: any
  proceso_agregar: boolean
  proceso_editar: boolean;
  url:string
  filtro:string
  campo:string
  orden:string

  constructor(private crud: CrudService) { 
    this.orden = ""
    this.coleccion =""
    this.filtro = ""
    this.campo = ""
    this.url=""
    this.proceso_agregar = false
    this.proceso_editar = false
  }
  ngOnInit(): void 
  {
    this.coleccion = 'Soporte'
    this.crud.read(this.coleccion).then((response: any)=>{
      this.registros = response;
      console.log(this.registros)
    });
  }

  sendticket(): void
  {
  this.coleccion = 'Soporte'
  this.crud.create(this.coleccion,this.form).then((Response:any)=>{
    if(Response){
      alert('Se ha enviado tu ticket!')
    }
    else{
      alert('Ha ocurrido un error.')
    }
    console.log(Response)
    location.reload()
  })
  }

  PicStorage(event: any)
  {
    this.crud.upload(this.coleccion, event)
  }


  agregar(): void{
    const tiempoTranscurrido = Date.now()
    const today = new Date(tiempoTranscurrido)
    this.proceso_agregar = true
    this.proceso_editar = false
    this.form={
      user: "",
      asunto:"",
      descripcion: "",
      fecha: today.toLocaleDateString()
    }
    this.url = ""
  }

  editar(registro: any){
    this.proceso_agregar = false
    this.proceso_editar = true
    this.form = registro;
    this.url = registro.url
  }

  actualizarticket(){
    this.crud.update(this.coleccion, this.form).then((response:any)=>{
      if(response){
        alert('¡Se actualizo correctamente!')
      }
      else
      {
        alert('Algo salio mal')
      }
      console.log(response)
      location.reload()
    })
  }

  eliminar(registro:any)
  {
    if (confirm('¿Desea eliminar el registro?')){
      this.crud.delete(this.coleccion, registro).then((response:any)=>{
        if(response){
          alert('El registro se ha eliminado correctamente')
        }
        else
        {
          alert('Ha ocurrido un error.')
        }
        console.log(response)
        location.reload()
      })
    }
  }
  ordenar(){
    this.crud.order(this.coleccion, this.orden).then((response:any)=>{
      this.registros = response;
      console.log(this.registros)
    })
  }

  filtrar(){
    this.campo="fecha"
    this.crud.filter(this.coleccion, this.campo, this.filtro).then((response:any)=>{
      this.registros = response
      console.log(this.registros)
    })
  }
}

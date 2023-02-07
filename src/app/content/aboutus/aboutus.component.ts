import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  form =  {
    descripcion: "",
    nombre: ""
  }
  coleccion: string
  registros: any
  proceso_agregar: boolean
  proceso_editar: boolean
  url:string


  constructor(private crud: CrudService) {
    this.coleccion = ""
    this.proceso_agregar = false
    this.proceso_editar = false
    this.url = ""

   }

  ngOnInit(): void {
    this.coleccion = 'Acerca'
    this.crud.read(this.coleccion).then((response: any)=>{
      this.registros = response;
      console.log(this.registros)
    });
  }

  /* Metodos Modal */
  send_about(): void
  {
  this.coleccion = 'Acerca'
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

  actualizarInfo(){
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
  PicStorage(event: any)
  {
    this.crud.upload(this.coleccion, event)
  }

  agregar(): void{
    this.proceso_agregar = true
    this.proceso_editar = false
    this.form={
      descripcion: "",
      nombre: ""
    }
    this.url = ""
  }
  editar(registro: any){
    this.proceso_agregar = false
    this.proceso_editar = true
    this.form = registro;
    this.url = registro.url
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
  /* Metodo Modal */
}

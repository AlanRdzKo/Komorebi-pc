import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form={
    text: "",
    title: ""
  }
  coleccion: string
  registros: any
  proceso_agregar: boolean
  proceso_editar: boolean;
  constructor(private crud: CrudService) 
  { 
    this.coleccion =""
    this.proceso_agregar = false
    this.proceso_editar = false
  }

  ngOnInit(): void {
    this.coleccion = 'Contact'
    this.crud.read(this.coleccion).then((response: any)=>{
      this.registros = response;
      console.log(this.registros)
    });
  }
  agregar(): void{
    this.proceso_agregar = true
    this.proceso_editar = false
    this.form={
      text: "",
      title: ""
    }
  }
  editar(registro: any){
    this.proceso_agregar = false
    this.proceso_editar = true
    this.form = registro;

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
  saltoDeLinea(texto: string){
    return texto.replace(/\n/g, '<br />');
  }
  send_contact(): void
  {
  this.coleccion = 'Contact'
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

  actualizar_contact(){
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
}

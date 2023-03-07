import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  form={
    title: "",
    usuario: "",
    desc:""
  }
  coleccion: string
  registros: any
  responses: any
  

  constructor(private crud: CrudService) { 
    this.coleccion = ""
  }

  ngOnInit(): void {
    this.coleccion = 'Forum'
    this.crud.read(this.coleccion).then((response: any)=>{
      this.registros = response;
      for (let i = 0; i < this.registros.length; i++) { // Read subcollections for
        this.crud.readsubcols(this.coleccion, this.registros[i].id).then((response: any)=>{
          this.responses = response;
          console.log(this.responses)
        });
      }
    });

  }

  agregar(): void{
    this.form={
      title:"",
      usuario: "",
      desc: "",
    }
  }

  create(): void
  {
  this.coleccion = 'Forum'
  this.crud.create(this.coleccion,this.form).then((Response:any)=>{
    if(Response){
      alert('Se ha enviado la informacion')
    }
    else{
      alert('Ha ocurrido un error.')
    }
    console.log(Response)
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

}

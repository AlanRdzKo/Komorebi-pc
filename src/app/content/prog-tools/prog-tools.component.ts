import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-prog-tools',
  templateUrl: './prog-tools.component.html',
  styleUrls: ['./prog-tools.component.css']
})
export class ProgToolsComponent implements OnInit {
  form={
    nombre: "",
    desc:"",
    web:"",
    url:"",
    id: ""
  }
  coleccion: string
  website: any
  registros: any
  defaultimg: any
  constructor(private crud: CrudService) { 
    this.coleccion =""
  }

  ngOnInit(): void {
    this.form.url = ""
    this.coleccion = 'ProgramingTools'
    this.crud.read(this.coleccion).then((response: any)=>{
      this.registros = response;
      console.log(this.registros)
    });
  }
  
  agregar(): void{
    this.form={
      nombre: "",
      desc: "",
      web: "",
      url: "",
      id: ""
    }
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

  create(): void
  {
  this.coleccion = 'ProgramingTools'
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

  PicStorage(event: any)
  {
    this.crud.upload(this.coleccion, event)
  }
}

import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {


    coleccion: any
    registros: any
  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.coleccion = ''
    this.registros = []
    this.crud.read(this.coleccion).then((response:any)=>{
      this.registros = response;
      console.log(this.registros)
    })
  }

}

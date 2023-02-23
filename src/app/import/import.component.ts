import { Component, OnInit } from '@angular/core';
import { CargascriptsService } from '../cargascripts.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  constructor(private cargarscripts: CargascriptsService) {

    cargarscripts.carga([
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    ])
   }

  ngOnInit(): void {
  }

}

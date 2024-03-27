import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.page.html',
  styleUrls: ['./inline-edit.page.scss'],
})
export class InlineEditPage implements OnInit {
  private baseURI: string = "https://seccionales.unionferroviaria.org.ar/app/mutual/";

  editing:any = {};
  rows:any = [];
  columns = [{ prop: 'id' }, { prop: 'nombre' }, { prop: 'apellido' }, { prop: 'email' }];


  constructor(private http: HttpClient) {
   
  }

  ngOnInit(): void {
    this.solicitarDatos();
  }
  solicitarDatos() {
    this.http.get<any>(this.baseURI + 'pruebaAngular.php?')
      .subscribe((resp) => {
        if (Array.isArray(resp)) {
          this.rows = resp;
        //  this.filteredRows = this.rows; // Inicializa filteredRows con los datos originales
        } else {
          console.log('La respuesta del servidor no es un array.');
        }
      }, (error) => {
        console.log('Error al obtener datos:', error);
      });
  }

  updateValue(event:any , cell:any, rowIndex:any) {

   
    this.editing[rowIndex + '-' + cell] = false;
    console.log(this.editing);
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

}

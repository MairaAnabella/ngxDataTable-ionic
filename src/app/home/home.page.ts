import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private baseURI: string = "https://seccionales.unionferroviaria.org.ar/app/mutual/";
  rows: any[] = [];
  filteredRows: any[] = []; // Crea un array independiente para los datos filtrados
  columns = [{ prop: 'id' }, { prop: 'nombre' }, { prop: 'apellido' }, { prop: 'email' }];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.solicitarDatos();
  }

  solicitarDatos() {
    this.http.get<any>(this.baseURI + 'pruebaAngular.php?')
      .subscribe((resp) => {
        if (Array.isArray(resp)) {
          this.rows = resp;
          this.filteredRows = this.rows; // Inicializa filteredRows con los datos originales
        } else {
          console.log('La respuesta del servidor no es un array.');
        }
      }, (error) => {
        console.log('Error al obtener datos:', error);
      });
  }

  updateFilter(filterValue: string) {
    const val = filterValue.toLowerCase();
    const temp = this.rows.filter((d) => {
      return d.nombre.toLowerCase().includes(val) ||
             d.apellido.toLowerCase().includes(val) ||
             d.email.toLowerCase().includes(val) ||
             !val; // Incluir todas las filas si el filtro está vacío
    });
    this.filteredRows = temp; // Actualiza filteredRows con los datos filtrados
  }
}

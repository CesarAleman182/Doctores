import { Component } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';
import { Doctores } from '../../models/doctores';

@Component({
  selector: 'app-eliminar',
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  mensajeEliminado: string = '';
  timeoutId: any;

  doctores: Doctores[] = [];

  constructor(private servicio: EmpleadosService) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.doctores = this.servicio.getAll();
  }

  eliminarDoctor(id: number) {
    this.servicio.delete(id);
    console.log(`Doctor con Id ${id} ha sido eliminado`)
    this.cargarEmpleados();
    this.mensajeEliminado = `Doctor con Id ${id} ha sido eliminado`;
    //cancelar cualquier tempo anterior
    clearTimeout(this.timeoutId);

    //establecer un nuevo timeout
    this.timeoutId = setTimeout(() => {
      this.mensajeEliminado = '';
    }, 3000); // 3 segundos
  }
}

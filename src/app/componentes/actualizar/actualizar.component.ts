import { Component } from '@angular/core';
import { Doctores } from '../../models/doctores';
import { EmpleadosService } from '../../empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  imports: [],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {

  doctores: Doctores[] = [];

  constructor(private servicio: EmpleadosService, private router: Router){}

  ngOnInit(){
    this.doctores = this.servicio.getAll();
  }

  irAEditar(id: number){
    this.router.navigate(['/editar', id]);
  }
}

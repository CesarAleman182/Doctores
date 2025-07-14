import { Component } from '@angular/core';
import { Doctores } from '../../models/doctores';
import { EmpleadosService } from '../../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  doctor: Doctores = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: ''
  };

  mensajeExito: string = '';
  esFemenino: boolean = false;

  constructor(private servicio: EmpleadosService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const encontrado = this.servicio.getById(id);
      if(encontrado!== null) {
        this.doctor = {...encontrado};
      }else{
        this.mensajeExito = 'Doctor no encontrado';
      }
    });
  }

  actualizar(): void{
    this.servicio.update(this.doctor);
    this.mensajeExito = `Doctor con id ${this.doctor.id} actualizado correctamente`;

    setTimeout(()=>{
      this.mensajeExito = '';
      this.router.navigate(['/actualizar']);
    },5000);
  }

  asignarFotoAleatoria(){
    let genero;
    const id = Math.floor(Math.random()*100);
    if(this.esFemenino){
      genero = 'Women';
    }else{
      genero = 'Men';
    }
    this.doctor.foto = `https://randomuser.me/api/portraits/${genero.toLowerCase()}/${id}.jpg`;
  }



}

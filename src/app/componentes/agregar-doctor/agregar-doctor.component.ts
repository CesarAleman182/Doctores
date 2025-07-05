import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctores } from '../../models/doctores';
import { EmpleadosService } from '../../empleados.service';

@Component({
  selector: 'app-agregar-doctor',
  imports: [FormsModule],
  templateUrl: './agregar-doctor.component.html',
  styleUrl: './agregar-doctor.component.css'
})
export class AgregarDoctorComponent {
  mensajeExito: string = '';

  doctor: Doctores = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: ''
  };

  constructor(private empleadosService: EmpleadosService){}
  
  esFemenino: boolean = false;

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

guardar(){
  this.empleadosService.create(this.doctor);
  this.limpiar();
  console.log('Doctor:', this.doctor);
  console.log('¿Es Femenino?:', this.esFemenino);
}

limpiar(){
  this.doctor = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: ''
  };

  this.esFemenino = false;

  this.mensajeExito = '¡Formulario Enviado Exitosamente!';

  setTimeout(()=> {
    this.mensajeExito = '';
  }, 4000);
}
}

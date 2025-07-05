import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Doctores } from '../../models/doctores';
import { EmpleadosService } from '../../empleados.service';


@Component({
  selector: 'app-listar-doctores',
  imports: [CommonModule],
  templateUrl: './listar-doctores.component.html',
  styleUrl: './listar-doctores.component.css'
})
export class ListarDoctoresComponent {
  
  misDoctores!: Doctores[];
  constructor(private empleadosService:EmpleadosService){
  }

  ngOnInit(): void{
    this.misDoctores = this.empleadosService.getAll();
    console.log(this.empleadosService);

    //probando consulta por ID
    let doc;
    doc = this.empleadosService.getById(1001);
    console.log(doc);
    doc = this.empleadosService.getById(1003);
    console.log(doc);

    //probando elminar id
    this.empleadosService.delete (1002);
    this.empleadosService.delete (1006);
    


  }
}

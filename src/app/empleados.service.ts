import { Injectable } from '@angular/core';
import { Doctores } from './models/doctores';
import plantilla from '../data/plantilla.json';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  doctores: Doctores[] = plantilla;

  constructor() { }

  ngOnInit(): void {

  }

  getAll(): Doctores[] {
    const recuperaDatos: Doctores[] = JSON.parse(localStorage.getItem('doctores') ?? '[]');
    if (recuperaDatos.length === 0) {
      this.doctores = plantilla;
    } else {
      this.doctores = recuperaDatos;
    }
    return this.doctores;
  }

  getById(idDoc: number): Doctores | null {
    const encontrado = this.doctores.find(doc => doc.id === idDoc);

    return encontrado || null;
  }
  create(objeto: Doctores): void {
    this.doctores.push(objeto);

    localStorage.setItem('doctores', JSON.stringify(this.doctores));
  }

  update(objeto: Doctores): void {
    const index = this.doctores.findIndex(doc => doc.id === objeto.id);
    if (index !== -1) {
      this.doctores[index] = objeto;
      localStorage.setItem('doctores', JSON.stringify(this.doctores));
    }
  }
  delete(idDoc: number): void {
    const index = this.doctores.findIndex(doc => doc.id === idDoc);
    if (index !== -1) {
      this.doctores.splice(index, 1);

      localStorage.setItem('doctores', JSON.stringify(this.doctores));
    }
  }
}



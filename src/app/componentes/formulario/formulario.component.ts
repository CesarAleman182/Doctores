import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  alerta: { tipo: 'success' | 'danger'; mensaje: string } | null = null;

  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactoForm.valid) {
      this.alerta = {
        tipo: 'success',
        mensaje: 'Formulario enviado correctamente'
      };
      console.log(this.contactoForm.value);
      this.contactoForm.reset();
    } else {
      this.alerta = {
        tipo: 'danger',
        mensaje: 'Formulario inválido. Por favor completa todos los campos.'
      };
    }

    // Desaparecer la alerta automáticamente después de 4 segundos
    setTimeout(() => {
      this.alerta = null;
    }, 3000);
  }

}

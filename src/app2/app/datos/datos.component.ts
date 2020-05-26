/* import { Component, OnInit } from '@angular/core';
import { IPaciente} from '../model/paciente';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  public pacientes: IPaciente[];
  public datosForm: FormGroup;
  
  constructor(  
    private formBuilder: FormBuilder,
    private datosService: DatosService
  ) {
    this.pacientes = [
      {nombre:'Andres', apellido:'Angel', cedula:123, edad:12, telefono:'464'},
    ];
    this.datosForm = this.formBuilder.group({
      nombre:['Juan Guillermo',Validators.required],
      apellido: ['Ramirez',Validators.required],
      cedula:[98765434,Validators.required],
      edad:[80,Validators.required],
      año:[1940,Validators.required],
      mes :[12,Validators.required],
      dia:[2,Validators.required],
      telefono:['3300763',Validators.required],
      direccion:['Carrera 43A, Cl. 7 Sur #170',Validators.required],
      departamento:['Antioquia',Validators.required],
      ciudad:['Medellín', Validators.required],
      correo:['juan@gmail.com', Validators.required],
    });
    this.datosService.sendComments(this.datosForm.value.nombre);
    

   }

  ngOnInit(): void {

  }
  onSubmit(){
    //console.log(this.datosForm.value)
    const paciente: IPaciente = {nombre: this.datosForm.value.nombre, apellido: this.datosForm.value.apellido, cedula: this.datosForm.value.cedula, edad: this.datosForm.value.edad, telefono: this.datosForm.value.telefono};
    this.pacientes.push(paciente);
    this.datosService.sendComments(this.datosForm.value.nombre);



  }

}
 */

import { Component, OnInit } from '@angular/core';
import { IPaciente} from '../model/paciente';
import { PacientesService } from '../service/pacientes.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  public pacientes: IPaciente[];

  constructor(
    private pacientesService: PacientesService,
  ) { }

  ngOnInit(): void {
    this.pacientesService.getAllPacientes().subscribe((pacientes: IPaciente[]) => {
      this.pacientes = pacientes;
      });

  }

}

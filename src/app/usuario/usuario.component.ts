import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from '../service/ejercicios.service';
import { IEjercicio } from '../model/ejercicio';
import { IPaciente} from '../model/paciente';
import { PacientesService } from '../service/pacientes.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public ejercicios: IEjercicio[];
  public pacientes: IPaciente[];

  constructor(
    private ejerciciosService: EjerciciosService,
    private pacientesService: PacientesService,
  ) { }

  ngOnInit(): void {
    this.ejerciciosService.getAllEjercicios().subscribe((ejercicios: IEjercicio[]) => {
    this.ejercicios = ejercicios;
    });

    this.pacientesService.getAllPacientes().subscribe((pacientes: IPaciente[]) => {
    this.pacientes = pacientes;
    });

  }

}

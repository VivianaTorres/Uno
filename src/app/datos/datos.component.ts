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

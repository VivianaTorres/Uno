import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from '../service/ejercicios.service';
import { IEjercicio } from '../model/ejercicio';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public ejercicios: IEjercicio[];

  constructor(
    private ejerciciosService: EjerciciosService,
  ) { }

  ngOnInit(): void {
    this.ejerciciosService.getAllEjercicios().subscribe((ejercicios: IEjercicio[]) => {
    this.ejercicios = ejercicios;
    });
  }

}

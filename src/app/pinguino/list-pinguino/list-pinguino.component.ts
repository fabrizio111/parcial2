import { Component, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-list-pinguino',
  templateUrl: './list-pinguino.component.html',
  styleUrls: ['./list-pinguino.component.css']
})
export class ListPinguinoComponent implements OnInit {

  pinguinos: Array<Pinguino> = [];
  selected: Boolean = false;
  selectedPinguino!: Pinguino;

  especieConMayorDistribucion!: Pinguino;

  constructor(private pinguinoService: PinguinoService) { }

  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe(
      pinguinos => {
        this.pinguinos = pinguinos;
        this.calcularEspecieConMayorDistribucion();
      }
    );
  }

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }

  ngOnInit() {
    this.getPinguinos();
  }

  calcularEspecieConMayorDistribucion() {
    this.especieConMayorDistribucion = this.pinguinos.reduce((prev, current) => {
      return (prev.global_distribution.split(', ').length > current.global_distribution.split(', ').length) ? prev : current;
    }, this.pinguinos[0]);
  }

}
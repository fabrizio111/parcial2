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

  mayorDistribucion: number = 0;

  constructor(private pinguinoService: PinguinoService) { }

  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe(
      pinguinos => {
        this.pinguinos = pinguinos;
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

}
import { Component, Input, OnInit } from '@angular/core';
import { PinguinoService } from '../pinguino.service';
import { Pinguino } from '../pinguino';

@Component({
  selector: 'app-detail-pinguino',
  templateUrl: './detail-pinguino.component.html',
  styleUrls: ['./detail-pinguino.component.css']
})
export class DetailPinguinoComponent implements OnInit {

  @Input() pinguino!: Pinguino;

  constructor () { }

  ngOnInit() {
  }

}

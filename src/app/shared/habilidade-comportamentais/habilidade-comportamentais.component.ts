import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidade-comportamentais',
  templateUrl: './habilidade-comportamentais.component.html',
  styleUrls: ['./habilidade-comportamentais.component.scss']
})
export class HabilidadeComportamentaisComponent implements OnInit {
habs = [
  {habilidade:'Responsabilidade Pessoal'},
  {habilidade:'Comunicação'},
  {habilidade:'Proatividade'},
  {habilidade:'Atenção aos Detalhes'},
  {habilidade:'Trabalho em Equipe'},
  {habilidade:'Persistência'},
  {habilidade:'Empatia'},
]
  constructor() { }

  ngOnInit(): void {
  }

}

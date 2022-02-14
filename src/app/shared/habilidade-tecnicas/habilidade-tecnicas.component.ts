import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidade-tecnicas',
  templateUrl: './habilidade-tecnicas.component.html',
  styleUrls: ['./habilidade-tecnicas.component.scss']
})
export class HabilidadeTecnicasComponent implements OnInit {
hab = [
  {habilidade:'Java e Python,Typescript'},
  {habilidade:'Spring Framework'},
  {habilidade:'HTML5 e CSS3'},
  {habilidade:'Angular'},
  {habilidade:'Projetos de Sistemas de Ti'},
  {habilidade:'MySQL e MongoDB'},
  {habilidade:'Git e Github'},

]
  constructor() { }

  ngOnInit(): void {
  }

}

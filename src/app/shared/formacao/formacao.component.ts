import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.scss']
})
export class FormacaoComponent  {
forms = [
{nome:'Unip',
curso:'Ciência da Computação',
data:'Fevereiro/2020 - Janeiro/2024'},
{nome:'Generation Brasil',
curso:'Desenvolvedor Web Java Junior – Fullstack',
data:' Maio/2021 - Agosto/2021'},
];

  constructor() { }

  ngOnInit(): void {
  }

}

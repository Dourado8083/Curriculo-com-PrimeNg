import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import {Card, CardModule} from 'primeng/card';
import { FormacaoComponent } from './shared/formacao/formacao.component';
import { SobreMimComponent } from './shared/sobre-mim/sobre-mim.component';
import { HabilidadeTecnicasComponent } from './shared/habilidade-tecnicas/habilidade-tecnicas.component';
import { HabilidadeComportamentaisComponent } from './shared/habilidade-comportamentais/habilidade-comportamentais.component';
import { HeaderComponent } from './shared/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormacaoComponent,
    SobreMimComponent,
    HabilidadeTecnicasComponent,
    HabilidadeComportamentaisComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ButtonModule,CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

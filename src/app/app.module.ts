import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { MenuModule } from './components/menu/menu.module';
import { MensagemModule } from './components/mensagem/mensagem.module';

import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { ErroComponent } from './components/erro/erro.component';
import { ErroModule } from './components/erro/erro.module';


@NgModule({
  declarations: [AppComponent, ErroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenuModule,
    HttpClientModule,
    MensagemModule,
    HomeModule,
    ErroModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

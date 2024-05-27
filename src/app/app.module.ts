import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CardListaComponent } from './componentes/card-lista/card-lista.component';
import { CardResultadoComponent } from './componentes/card-resultado/card-resultado.component';
import { CardListaFormularioComponent } from './componentes/card-lista-formulario/card-lista-formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CardListaComponent,
    CardResultadoComponent,
    CardListaFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

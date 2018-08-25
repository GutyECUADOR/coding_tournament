import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routes';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

/* SERVICIOS */
import { HttpClientModule } from '@angular/common/http';

import { UsuarioService } from './services/usuario.service';

/* COMPONENTS */
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';

/* MAPS MODULE */
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

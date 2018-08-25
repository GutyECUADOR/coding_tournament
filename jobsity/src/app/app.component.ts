import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String;
  public marcadores;

  constructor(private myusuarioService: UsuarioService){
  
  }

  ngOnInit(){
    
  }

  getUserLocation(){
    alert('No disponible');
  }


}

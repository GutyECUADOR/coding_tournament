import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public start_map_lan: number;
  public start_map_lng: number;
  public lat_marker: number;
  public lng_marker: number;
  public map_zoom : number;
  public confirmMarket: boolean;
  public evento: Evento; // Modelo estructural de datos
  public markers:any; // Array de marcadores

  constructor(private _usuarioService: UsuarioService) { 
    //Configuracions iniciales
    this.start_map_lan = -0.2298500;
    this.start_map_lng = -78.5249500;
    this.lat_marker = -0.2298500;
    this.lng_marker = -78.5249500;
    this.map_zoom = 12;
    this.confirmMarket = false;
    this.evento = new Evento('ASA','', false, 0, 0);
  }

  ngOnInit() {
    //Cargamos los resultados del API
    this._usuarioService.getMarcadoresInDB().subscribe(
      result =>{
        console.log(result);
        this.markers = result;
      },error =>{
        console.log(error);
      }

    );
  }

  // Crear un marcador y despliega modal
  onChooseLocation(event){
    console.log(event);
    
    this.lat_marker = event.coords.lat;
    this.lng_marker = event.coords.lng;
    document.getElementById("openModalButton").click();
    this.confirmMarket = true;
  }

  //Evento que guarda el objeto del formulario en la DB
  saveEvento(){
    this.evento.latitud = this.lat_marker;
    this.evento.longitud = this.lng_marker;
    console.log(this.evento);
    this._usuarioService.saveData(this.evento).subscribe(
      result =>{
        console.log(result);
      },error =>{
        console.log(error);
      }

    );
    
  }
}

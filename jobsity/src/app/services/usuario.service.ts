import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from '../models/evento';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http: HttpClient) { 
    //Conexion de prueba
    this._http.get('http://localhost:3700/pruebas').subscribe( response =>{
      console.log(response);
    });
  }

  // Devuelve usuarios en DB
  getMarcadoresInDB(){
    return this._http.get('http://localhost:3700/getEventos');
  }

  saveData(evento:Evento ){
    return this._http.post('http://localhost:3700/addEventMarket', evento);
  }
  
}

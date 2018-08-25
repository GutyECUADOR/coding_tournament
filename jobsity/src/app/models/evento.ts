export class Evento{
	constructor(
		public codigo: string,
        public descripcion: string,
		public isDelito: boolean,
		public latitud: Number,
		public longitud: Number
	){}
}
class Inventario {
	constructor() {
		this.primero = null;
	}

	agregar(nuevo) {
		if(!this.comprobarCodigo(nuevo.codigo)){
			return false;
		}

		if(this.primero === null) {
			this.primero = nuevo;
			return true;
		} else {
			let aux = this.primero;
			while (aux.siguiente !== null) {
				aux=aux.siguiente;
			}
			aux.siguiente = nuevo;
			return true;
		}
	}

	comprobarCodigo(codigo) {
		let aux = this.primero;
		while(aux !== null) {
			if(codigo === aux.codigo) {
				return false;
			}
			aux = aux.siguiente;
		}
		return true;
	}

	buscar(codigo) {
		let aux = this.primero;
		while(aux !== null) {
			if(aux.codigo === codigo) {
				return aux;
			}
			aux = aux.siguiente;
		}
		return null;
	}

	eliminar(codigo) {
		if(this.primero.codigo === codigo) {
			this.primero = this.primero.siguiente;
			return true;
		}

		let aux = this.primero;
		while(aux.siguiente !== null) {
			if(aux.siguiente.codigo === codigo) {
				aux.siguiente = aux.siguiente.siguiente;
				return true;
			}
			aux = aux.siguiente;
		}
		return false;
	}

	listar() {
		let listado = ""
		if(this.primero == null) {
			return "No existe ningún producto registrado";
		}

		let aux = this.primero;
		while(aux !== null) {
			listado += aux.infoHTML()
			aux = aux.siguiente;
		}
		return listado;
	}

	listarInverso() {
		if(this.primero == null) {
			return "No existe ningún producto registrado"
		}
		
		return listado
	}

	determinarUltimo() {
		let previo = null;
		let actual = this.primero;
		let siguiente = null;

		while(actual !== null) {
			siguiente = actual.siguiente;
			actual = previo;
			previo = actual;
			actual = siguiente;
		}
		this.primero = previo;
	}
}

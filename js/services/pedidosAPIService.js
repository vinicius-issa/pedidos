angular.module("pedidos").factory("pedidosAPI", function (config, $firebaseObject, $firebaseArray) {
	if (firebase.apps.length === 0){
			firebase.initializeApp(config.firebaseConfig);
	}

	var _dateToDataHora = function(pedido){
		if(pedido.hora){
			pedido.hora = pedido.hora.getTime();
		}
		if(pedido.data){
			pedido.data = pedido.data.getTime();
		}
	}

	var _dataHoraToDate = function(pedido){
		if(pedido.data){
			pedido.data = new Date(pedido.data);
		}
		if(pedido.hora){
			pedido.hora = new Date(pedido.hora);
		}
	}


	var _savePedido = function (pedido) {
		console.log("SavePedidosAPIFunction");
		if(pedido.hora){
			var hora = pedido.hora.getTime();
			pedido.hora = hora;
		}
		if(pedido.data){
			var data = pedido.data.getTime();
			pedido.data = data;
		}
		console.log("PedidoID:" + pedido.$id);
		console.log(pedido);
		var dados = {};
		if(pedido.$id){
			var pedidoRef = firebase.database().ref("pedidos").child(pedido.$id);
			pedido.forEach(function(item,key){
				dados[key] = item;
			});
			var result = pedidoRef.set(dados);
		}
		else{
			var pedidoRef = firebase.database().ref("pedidos");
			var result = pedidoRef.push(pedido);
		}
		return result;
	};

	var _getAllPedidos = function(){
		var ref;
		ref = firebase.database().ref("pedidos");
		var obj = $firebaseArray(ref);
		obj.$loaded(function(data){
			angular.forEach(data,function(item){
				if(item.data){
					item.data = new Date(item.data);
				}
				if(item.hora){
					item.hora = new Date(item.hora);
				}
			});
		})
		return obj;	

	};

	var _getPedido = function(id){
		var ref = firebase.database().ref("pedidos/" + id);
		console.log(ref);
		console.log("HEI");
		var obj = $firebaseObject(ref);
		var data = obj.data;
		obj.data = new Date(data);
		var hora = obj.hora;
		obj.hora = new Date(hora);
		return obj;
	};

	var _removePedido = function(id){
		console.log("ID");
		console.log(toString(id));
		var obj = _getPedido(id);
		obj.$remove().then(function(ref) {
		  console.log("Objeto removido com sucesso");
		}, function(error) {
		  console.log("Error:", error);
		});
	}

	return {
		savePedido: _savePedido,
		getAllPedidos: _getAllPedidos,
		getPedido:_getPedido,
		removePedido:_removePedido,
		dateToDataHora:_dateToDataHora,
		dataHoraToDate:_dataHoraToDate
	};

});
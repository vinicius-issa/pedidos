angular.module("pedidos").factory("pedidosAPI", function (config, $firebaseObject, $firebaseArray) {
	if (firebase.apps.length === 0){
			firebase.initializeApp(config.firebaseConfig);
	}

	var _savePedido = function (pedido) {
		console.log("SavePedidosAPIFunction");
		if(pedido.hora){
			var hora = pedido.hora.toString();
			pedido.hora = hora;
		}
		if(pedido.data){
			var data = pedido.data.toString();
			pedido.data = data;
		}
		console.log("PedidoID:" + pedido.$id);
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

		return $firebaseArray(ref);
	};

	var _getPedido = function(id){
		var ref = firebase.database().ref("pedidos/" + id);
		console.log(ref);
		console.log("HEI");
		var obj = $firebaseObject(ref);
		return obj;
	};

	return {
		savePedido: _savePedido,
		getAllPedidos: _getAllPedidos,
		getPedido:_getPedido,
	};
});
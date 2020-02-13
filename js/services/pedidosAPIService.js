angular.module("pedidos").factory("pedidosAPI", function (config, $firebaseObject) {
	if (firebase.apps.length === 0){
			firebase.initializeApp(config.firebaseConfig);
	}
	var _savePedido = function (pedido) {
		var pedidoRef = firebase.database().ref("pedidos");
		var result = pedidoRef.push(pedido);
		return result;
	};

	var _getPedidos = function(){
		var ref = firebase.database().ref("pedidos");
		return $firebaseObject(ref);
	};

	return {
		savePedido: _savePedido,
		getPedidos: _getPedidos,
	};
});
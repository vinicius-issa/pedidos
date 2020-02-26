angular.module("pedidos").controller("listarPedidosCtrl",function ($scope, pedidosAPI) {
	$scope.pedidos = pedidosAPI.getAllPedidos();
	$scope.ordenar = 'data';

	$scope.ordenarPor = function(campo){
		$scope.ordenar = campo;
	};
	
	$scope.formatarData = function(date){
		if(date)return new Date(date);
	};

	$scope.pedidos.$loaded().then(function(data){
		data.forEach(function(pedido){
			pedido.id = (data.$keyAt(pedido));
		});
	});


	$scope.removerPedido = function(id){
		pedidosAPI.removePedido(id);
	}
		
});
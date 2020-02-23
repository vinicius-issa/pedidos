angular.module("pedidos").controller("confirmarPedidoCtrl",function ($scope, $location, pedidosAPI, compartilharPedido) {

	//$scope.pedido = pedidosAPI.getPedido('-M-w-7EaPf6Y-rNnduYR');
	
	$scope.pedido = compartilharPedido.getPedido();

	$scope.calcularTipos = function(pedido,tipo){
		var soma = 0;
		pedido.salgados.forEach(function(salgado){
			if(salgado.sabor.tipo===tipo){
				soma += salgado.quantidade;
			};
		});
		return soma;
	};
	
	if($scope.pedido){	
		$scope.qtdFritos = $scope.calcularTipos($scope.pedido,'frito');
		$scope.qtdAssados = $scope.calcularTipos($scope.pedido,'assado');
	}

	$scope.confirmar = function(pedido){
		pedidosAPI.savePedido(angular.copy(pedido));
		compartilharPedido.cleanPedido();
		$location.path("/");
	}

	$scope.copiar = function(){
		
	}
});
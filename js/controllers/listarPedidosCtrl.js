angular.module("pedidos").controller("listarPedidosCtrl",function ($scope, $location, pedidosAPI, $firebaseObject) {
	$scope.pedidos = pedidosAPI.getAllPedidos();
	$scope.ordenar = 'data';
	$scope.exibirFiltro = false;

	$scope.exibirEsconderFiltro = function(){
		console.log("EXIBIR ESCONDER FILTRO")
		$scope.exibirFiltro = !$scope.exibirFiltro;
		console.log($scope.exibirFiltro);
	}

	$scope.ordenarPor = function(campo){
		$scope.ordenar = campo;
	};

	$scope.formatarData = function(date){
		if(date)return new Date(date);
	};

	$scope.removerPedido = function(id){
		pedidosAPI.removePedido(id);
	};

	$scope.alterarStatus = function(pedido){
		console.log(pedido.status);
		if(pedido.status==='Registrado'){
			if(pedido.sortido){
				$location.path("/pedido/"+pedido.$id);
			}
			else{
				pedido.status = 'Separado';
			}
		}
		else if (pedido.status==='Separado'){
			pedido.status = 'Preparado';
		}
		else{
			pedido.status='Finalizado';
		}
		pedidosAPI.dateToDataHora(pedido);
		$scope.pedidos.$save(pedido);
		pedidosAPI.dataHoraToDate(pedido);
		
	};
		
});
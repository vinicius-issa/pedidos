angular.module("pedidos").controller("addPedidosCtrl",function ($scope, $q, $location, pedidoId, pedidosAPI, salgadosAPI, compartilharPedido) {
	console.log("ENTROU addPedidosCtrl");
	$scope.pedido = {};
	$scope.salgados = [];
	if (pedidoId){
		console.log("ENTROU PEDIDOID");
		//var deferred = $q.defer()
		var obj = pedidosAPI.getPedido(pedidoId);
		console.log("OBJETO: " + obj);
		console.log(obj);
		obj.$loaded().then(function(data){
			console.log(data);
			$scope.pedido=angular.copy(data);
			if(data.data){
				var dataux = new Date(data.data);
				$scope.pedido.data = angular.copy(dataux);
			};
			if(data.hora){
				console.log(new Date(data.hora).getTime());
				$scope.pedido.hora = angular.copy(new Date(data.hora));
			}
			console.log("OLHA OS SALGADOS:");

			if($scope.pedido.salgados){
				$scope.pedido.salgados.forEach(function(value,index){
					console.log('ITEM:' + value);
					$scope.salgados.push(value);
				});
			}
			console.log("Saudu: " + $scope.pedido.data);
		}); 
	}
	else{
		$scope.pedido.status = 'Registrado';
		$scope.pedido.quantidade=0;
	}

	$scope.listaSalgados = salgadosAPI.getSalgados();
	$scope.listaUnidades=[
		"Matriz",
		"Vila",
		"HE"
	];
	$scope.listaFormaPagamento=[
		"Debito",
		"Credito",
		"Dinheiro"
	];

	$scope.salgados = [];
	$scope.listaStatus = [
		'Registrado',
		'Separado',
		'Preparado',
		'Finalizado'
	];
	$scope.listaFonte = [
		"Pessoalmente",
		"Whatsapp",
		"Telefone",
		"Facebook",
		"DM Insta",
		"iFood"
	];

	$scope.adicionarSalgado = function(salgado){
		if(salgado){
			$scope.saborError = false;
			$scope.salgados.push(angular.copy(salgado));
			$scope.pedido.quantidade += salgado.quantidade;
			document.getElementById('sabor').focus();
			delete $scope.salgado;
		}
		else{
			$scope.saborError = true;
		}
	};

	$scope.enviarPedido = function(pedido){
		$scope.pedido.salgados = angular.copy($scope.salgados);
		compartilharPedido.setPedido(pedido);		
		$location.path("/confirmarPedido");
	}

	$scope.removerSalgado = function(id_array){
		$scope.salgados.splice(id_array,1);
	}
});
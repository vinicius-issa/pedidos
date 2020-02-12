angular.module("addPedidos").controller("addPedidosCtrl",function ($scope, $firebaseObject) {
	var ref = firebase.database().ref("salgados");
	$scope.listaSalgados = $firebaseObject(ref);
	console.log(ref);

	$scope.listaUnidades=[
		{nome:'Matriz', value:'matriz'},
		{nome:'Vila', value:'vila'},
		{nome:'HE', value:'he'}
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
		$scope.salgados.push(angular.copy(salgado));
		$scope.pedido.quantidade += salgado.quantidade;
		delete $scope.salgado;
	};
	$scope.enviarPedido = function(pedido){
		$scope.pedido.salgados = angular.copy($scope.salgados);
		console.log(pedido);
	}
});
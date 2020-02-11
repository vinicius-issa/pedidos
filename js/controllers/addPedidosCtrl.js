angular.module("addPedidos").controller("addPedidosCtrl",function ($scope) {
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
$scope.listaSalgados=[
	{nome:'Coxinha', tipo:'frito'},
	{nome:'Bolinha', tipo:'frito'},
	{nome:'Quibe', tipo:'frito'},
	{nome:'Pastel Carne', tipo:'frito'},
	{nome:'Croquete', tipo:'frito'},
	{nome:'Esfirra carne', tipo:'assado'},
	{nome:'Esfirra Frango', tipo:'assado'}
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
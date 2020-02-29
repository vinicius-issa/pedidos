angular.module("pedidos").config(function($routeProvider){
	$routeProvider.when("/add",{
		templateUrl:"view/addPedido.html",
		controller:"addPedidosCtrl",
		resolve: {
            pedidoId: function () {
            		return false;
            },
        }
	},);

	$routeProvider.when("/confirmarPedido",{
		templateUrl:"view/confirmarPedido.html",
		controller:"confirmarPedidoCtrl",
	},);


	$routeProvider.when("/",{
		templateUrl:"view/geral.html",
		controller:"listarPedidosCtrl"
	},);

	$routeProvider.when("/listar",{
		templateUrl:"view/list.html",
		controller:"listarPedidosCtrl"
	},);

	$routeProvider.when("/pedido/:id", {
 		templateUrl:"view/addPedido.html",
		controller:"addPedidosCtrl",           
		resolve: {
            pedidoId: function ($route) {
            		return $route.current.params.id;
            },
        },
    });

});
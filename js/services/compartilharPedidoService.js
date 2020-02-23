angular.module("pedidos").factory("compartilharPedido", function () {
	var _pedido;

	var _setPedido = function (pedido) {
		this.pedido = pedido;
	};

	var _getPedido = function(){
		return this.pedido;
	};

	var _cleanPedido = function(){
		this.pedido = null;
	};

	return {
		setPedido: _setPedido,
		getPedido: _getPedido,
		cleanPedido: _cleanPedido,
	};
});
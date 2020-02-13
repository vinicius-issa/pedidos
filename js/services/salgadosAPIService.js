angular.module("pedidos").factory("salgadosAPI", function (config, $firebaseObject) {
	var _getSalgados = function () {
		firebase.initializeApp(config.firebaseConfig);
		var ref = firebase.database().ref("salgados");
		return $firebaseObject(ref);
	};

	return {
		getSalgados: _getSalgados,
	};
});
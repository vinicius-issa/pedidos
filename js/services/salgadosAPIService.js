angular.module("pedidos").factory("salgadosAPI", function (config, $firebaseObject) {
	if (firebase.apps.length === 0){
				firebase.initializeApp(config.firebaseConfig);
	}
	
	var _getSalgados = function () {		
		var ref = firebase.database().ref("salgados");
		return $firebaseObject(ref);
	};

	return {
		getSalgados: _getSalgados,
	};
});
//JavaScript 'this' keyword and - .call(), .apply() and .bind()  --->


// implicit binding   (dot notation diye korte hoy)
// explicit binding   (nije theke bole deoa hoy)
// new binding
// window binding




var printPlayerName = function(name){
	console.log(name)
	console.log(window)
}


// printPlayerName('Sakib')
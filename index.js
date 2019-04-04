
//https://jsfiddle.net/jspatel/mkjh2ev5

let promiseToCleanRoom = new Promise(function(resolve, reject){

	//cleaning the room

	let isClean = true;

	if(isClean){

		resolve('clean');

	} else{
		reject('not clean'); 
	}

	promiseToCleanRoom.then(function(fromResolve){
		console.log('The room is ' + fromResolve);
	}).catch(function(fromReject){
		console.log('The room is ' + fromReject);
	});

});

//console.log(promiseToCleanRoom);


let cleanRoom = function() {
	return new Promise(function(resolve, reject) {
		
		  //resolve('Cleaned The Room');
		  reject('Failed to clean the room');
	});
  };
  
  let removeGarbage = function(message) {
	return new Promise(function(resolve, reject) {
	  resolve(message + ' remove Garbage');
	});
  };
  
  let winIcecream = function(message) {
	return new Promise(function(resolve, reject) {
	  resolve( message + ' won Icecream');
	});
  };
  
//   cleanRoom().then(function(result){
// 	  return removeGarbage(result);
//   }).then(function(result){
// 	  return winIcecream(result);
//   }).then(function(result){
// 	  console.log('finished: ' + result);
//   });

  Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
	  console.log('all finished');
	console.log(cleanRoom);
	
	}).catch(function(resultOfPromise){
		console.log(resultOfPromise);
	});
                                 
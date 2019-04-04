

const first = new Promise((resolve,reject)=>{
	if(1==2){
		resolve('1 = 2');
	} else{
		reject('1 != 2');
	}
});

const second = new Promise((resolve,reject)=>{
	if(2==4){
		resolve('2 = 4');
	} else{
		reject('2 != 4');
	}
});



let firstResult = first.then((t)=>{console.log('Success: ' + t)}).catch((t)=>{
	console.log('Failure: ' + t);
});


let secondResult = second.then((t)=>{console.log('Success: ' + t)}).catch((t)=>{
	console.log('Failure: ' + t);
});

console.log(firstResult);
console.log(secondResult);
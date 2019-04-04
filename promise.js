//From Node Course
//Must use then for the Promise to actually do anything
//the "THEN" function is only called if Resolved or fulfilled!, this is why catch was demanded when there was an error
//You can use an error function as second parameter of "THEN" instead of Catch
//Http Library don't allow for promises, so you work around it by wrapping your request call with a Promise
//Chain by adding a return Promise statement to the success of "THEN"
//When chaining and including a return Promise statement to the success of "THEN", the next "THEN" argument with be that response,
//used when needing to use returns values of consecutive functions for multiple promises


var asyncAdd = (a,b) =>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			
			if(typeof(a) === 'number' && typeof(b) === 'number'){
			
				resolve(a+b);
			} else{
				reject('Arguments must be numbers');
			}
		},1500);
	});
};

asyncAdd(5,7).then((res)=>{
	console.log('Result: ', res);
	return asyncAdd(res,'33');
},(errorMessage)=>{
	console.log(errorMessage);
}).then((res)=>{
	console.log('should be 45: actual: ', res);
},(errorMessage)=>{
	console.log(errorMessage);
});


// var somePromise = new Promise((resolve,reject)=>{

// 	setTimeout(()=>{
// 		//resolve('Hey. It worked! ');
// 		reject('Unable to fulfill Promise');
// 	},3000);
	
// });

// somePromise.then((message)=>{
// 	console.log('Success: ', message);
// },(errorMessage)=>{
// 	console.log('Error: ', errorMessage);
// });	
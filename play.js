const myUtil = require('util');

const claim = {name:'claim1'};

const exportsModule = async()=>{
	
		if(1==1){
			console.log('1 = 1');
		} else{
			console.log('1 != 1');
		}

		setTimeout(()=>{
			console.log('first timer');

		},3000);


		let func = ()=>{
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					console.log('timer done');
					
						resolve([{paymode:'Reward'}]);

				},3000);
			});
		};
		return await func();
};


let getPaymode = exportsModule()
	.then((t)=>{
		console.log('Paymode: ' + t[0].paymode)
	})
	.catch((t)=>{
		console.log('Failure: ' + t);
});


console.log(getPaymode);

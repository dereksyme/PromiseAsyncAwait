const myUtil = require('util');

const claim = {name:'claim1'};

const rewards = [];

const exportsModule = async(rewardLength)=>{

		if(rewardLength === 0){
			//random procedures
			if(1==1){
				console.log('1 = 1');
			} else{
				console.log('1 != 1');
			}

			setTimeout(()=>{
				console.log('first timer');

			},3000);

			//Atlas Request
			let func = ()=>{
				return new Promise((resolve,reject)=>{
					setTimeout(()=>{
						console.log('timer done');
						
							resolve([{paymode:'Reward'}]);

					},3000);
				});
			};
			return await func();

		} else{
			return 'paymodeSettingNotNecessary';
		}
};


let validateClaim = (theClaim)=>{
	
	return new Promise((resolve,reject)=>{
		console.log(myUtil.inspect(theClaim));
		claim.isValid = true
		resolve(theClaim);
	});
}


exportsModule(rewards.length)
.then((res)=>{
	console.log('result of exportsModule:' + myUtil.inspect(res));
	claim.rewards = res;
	return validateClaim(claim);
})
.then((validatedClaim) => {
	console.log('validatedClaim:' + myUtil.inspect(validatedClaim));
})
.catch((t)=>{
	console.log('Failure: ' + t);
});



//console.log(getPaymode);

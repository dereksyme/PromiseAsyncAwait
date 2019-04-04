//https://www.youtube.com/watch?v=IGoAdn-e5II

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve,reject)=>{

	setTimeout(()=>{
		resolve('ticket');
	},3000);
}); 

// promiseWifeBringingTicks.then((t)=>{
// 	console.log('person3: shows ' + t);
// });

const getPopcorn = promiseWifeBringingTicks.then((t)=>{
	console.log('wife: I have tickets');
	console.log('husband: we should go in');
	console.log('wife: no I am hungry');
	return new Promise((resolve,reject)=>{
		return resolve(t + ' popcorn');
	});
});

const getButter = getPopcorn.then((t)=> {
	console.log('husband: I got some popcorn')
	console.log('husband: we should go in')
	console.log('wife: no I need butter on my popcorn');
	return new Promise((resolve,reject)=>{
		return resolve(t + ' butter');
	});
});

getButter.then((t)=>{

	console.log(t);
});

console.log('person4: shows ticket');
console.log('person5: shows ticket');
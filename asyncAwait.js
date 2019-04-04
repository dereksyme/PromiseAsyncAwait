//https://www.youtube.com/watch?v=IGoAdn-e5II
//Async function return promises
//You can only use Await inside an Async function
//Anything below the await statement has to wait, this is so cool!
//This looks like synchronous code in an asynchronous world because it waits. that's the beauty of it. Its readable
//Go back to 20 min in vidoe link above

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async()=>{

	const promiseWifeBringingTicks = new Promise((resolve,reject)=>{setTimeout(()=>{resolve('ticket');},3000);}); 
	const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
	const addButter = new Promise((resolve,reject)=>resolve('butter'));

	let ticket = await promiseWifeBringingTicks;

	console.log(`wife: I have the ${ticket}`);
	console.log('husband: we should go in');
	console.log('wife: no I am hungry');

	let popcorn =  await getPopcorn;

	console.log(`husband: I got some ${popcorn}`);
	console.log('husband: we should go in');
	console.log('wife: no I need butter on my popcorn');

	let butter =  await addButter;

	console.log(`husband: I got some ${butter} on popcorn`);
	console.log(`husband: anything else darling?`);
	console.log(`wife: lets go we are getting late`);
	console.log(`husband: thankyou for the reminder *grins*`);

	return ticket;
}

preMovie().then((m)=>console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
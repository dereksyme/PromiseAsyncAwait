const go = async ()=>{
	return 1;
}
  
  go().then((res)=>{
	  console.log(res);
	  console.log(typeof(res));
  });
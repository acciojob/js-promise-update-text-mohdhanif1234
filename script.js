//your JS code here. If required.
function myFunc(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000)
	})
}

myFunc().then((val)=>{
	document.getElemenById("output").textContent = val
})


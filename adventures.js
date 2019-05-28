let adv_p = document.querySelectorAll('.adv_p');
let arr = [];

fetch('https://akademac.github.io/testJSON_2/testJson_2.json')
.then(response => {
	return response.json();
})
.then(data => {
	adv_p.forEach(e => {
		arr.push(e);		
	});
	console.log(arr[3]);
	arr[0].innerHTML = data[27].desc;
	arr[1].innerHTML = data[28].desc;
	arr[2].innerHTML = data[29].desc;
	arr[3].innerHTML = data[30].desc;
	

})
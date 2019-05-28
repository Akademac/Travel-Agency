let img = document.querySelector('#special_img');
let special_about = document.querySelector('#special_p');
let s_a_header = document.querySelector('#special_about_header');
let wicky = document.querySelector('#wicky');

let x = window.location.href;
let y = x.indexOf('#');
let z = x.slice(y, x.length);
let a = 1;

let interval;
let int = 0;


fetch('https://akademac.github.io/testJSON_2/testJson_2.json')
.then(response => {
	return response.json();
})
.then(data => {
	for(let i=15; i<26+1; i++) {
		if(z == `#${a}`) {
			console.log(data[i].img[0]);
			img.style.backgroundImage = `url(${data[i].img[int]})`;
			s_a_header.innerHTML = data[i].state;
			special_about.innerHTML = data[i].desc + '<br />' +'...';
			interval = setInterval(() =>{
			if(int >=5) {
				int = 0;
				img.style.backgroundImage = `url(${data[i].img[int]})`;
			}
			else {
				img.style.backgroundImage = `url(${data[i].img[int]})`;
				int++;
			}				
			}, 2000);
		wicky.addEventListener('click', e => {
			window.open(`https://en.wikipedia.org/wiki/${data[i].state}`, '_blank');
		});

		}
		a++;
	};
});

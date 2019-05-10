//main nav

let burger = document.querySelector('#burger');
let mini_navs_items = document.querySelector('.mini_navs_items');


burger.addEventListener('click', () => {
	if(!(mini_navs_items.classList.contains('show_mini_nav'))) {
			mini_navs_items.classList.add('show_mini_nav');
	}
	else {
			mini_navs_items.classList.remove('show_mini_nav');
	}
});


// galery images 


let left_arrow = document.querySelector('.fa-arrow-alt-circle-left');
let right_arrow = document.querySelector('.fa-arrow-alt-circle-right');

let lg_galery = document.querySelector('#large_galery');
let lg_price = document.querySelector('#lg_price');
let lg_city = document.querySelector('#lg_city');
let lg_days = document.querySelector('#lg_days');


right_arrow.addEventListener('click', forward);
left_arrow.addEventListener('click', backward);


let iter = 1;
let images = 'greece';
let sm_galery = document.querySelectorAll('.small_galery');

sm_galery.forEach(e => {
	e.addEventListener('click', i => {
		let x = i.target.dataset.id;
	//	console.log(x);
		if(x == 1) {
			console.log(x);
			iter = 1;
			images = 'london'
			lg_galery.style.backgroundImage = `url('Images/galery_${images}_${iter}.jpg')`;
			lg_price.innerHTML = '900$';
			lg_city.innerHTML = 'London';
			lg_days.innerHTML = '15 days';
		}
		else if(x == 2) {
			console.log(x);
			iter = 1;			
			images = 'paris'
			lg_galery.style.backgroundImage = `url('Images/galery_${images}_${iter}.jpg')`;
			lg_price.innerHTML = '800$';
			lg_city.innerHTML = 'Paris';
			lg_days.innerHTML = '7 days';
		}		
		else if(x == 3) {
			console.log(x);
			iter = 1;
			images = 'rome'
			lg_galery.style.backgroundImage = `url('Images/galery_${images}_${iter}.jpg')`;
			lg_price.innerHTML = '600$';
			lg_city.innerHTML = 'Rome';
			lg_days.innerHTML = '12 days';		
		}		
		else if(x == 4) {
			iter = 1;
			console.log(x);
			images = 'prague'
			lg_galery.style.backgroundImage = `url('Images/galery_${images}_${iter}.jpg')`;
			lg_price.innerHTML = '500$';
			lg_city.innerHTML = 'Prague';
			lg_days.innerHTML = '15 days';		
		}
	});
});

function forward() {
	if(iter > 4) {
		lg_galery.style.backgroundImage = `url('Images/galery_${images}_5.jpg')`;
	}
	else {
		iter++;
		lg_galery.style.backgroundImage = `url('Images/galery_${images}_${iter}.jpg')`;
	}
	console.log(iter);
}

function backward() {
	if(iter <= 1) {
		lg_galery.style.backgroundImage = `url('Images/galery_${images}_1.jpg')`;
	}
	else {
		iter--;
		lg_galery.style.backgroundImage = `url('Images/galery_${images}_${iter}.jpg')`;
	}

	console.log(iter);
}	

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

// Adventures


let more_about_adv = document.querySelector('#view_all_adv');

let adventures = document.querySelectorAll('.adventures_div');


adventures.forEach(e => {
	e.addEventListener('click', ee => {
		let x = ee.target.dataset.adv;
		console.log(x);
		if(x == 1) {
			window.open('adventures.html#adv_skiing', '_self');
		}
		else if(x == 2) {
			window.open('adventures.html#adv_hiking', '_self');
		}
		else if(x == 3) {
			window.open('adventures.html#adv_cycling', '_self');
		}
		else if(x == 4) {
			window.open('adventures.html#adv_rafting', '_self');
		}
	})
});



more_about_adv.addEventListener('click', () => {
	window.open('adventures.html', '_self');
});



// Special Galery

let special_class = document.querySelectorAll('.specials');

let special_price = document.querySelectorAll('.special_price');
let special_state = document.querySelectorAll('.special_state');
let special_loc = document.querySelectorAll('.special_loc');
let special_days = document.querySelectorAll('.special_days');
let special_desc = document.querySelectorAll('.special_desc');
let special_info = document.querySelectorAll('.fa-info-circle');




window.addEventListener('load', () => {
	fetch('https://akademac.github.io/testJSON_2/testJson_2.json')
	.then(response => {
		return response.json();
	})
	.then(data => {
		class Special {
			constructor(price, state, loc, days) {
				this.price = price;
				this.state = state;
				this.loc = loc;
				this.days = days
			};

			addText(z) {
				this.price.innerHTML = data[z].price;
				this.state.innerHTML = data[z].state;
				this.loc.innerHTML = data[z].location;
				this.days.innerHTML = data[z].days;
			};
		};

		let x = 15;

		for(let i=0; i<special_price.length; i++) {
			let y = new Special(special_price[i], special_state[i], special_loc[i], special_days[i]);
			y.addText(x);
			x++;
		}

		let spec_arrow_left = document.querySelectorAll('.spec_left_arrow');
		let spec_arrow_right = document.querySelectorAll('.spec_right_arrow');
		let spec_desc = document.querySelectorAll('.special_desc');

	});
});

(function secondPage() {
	special_info.forEach(e => {
		e.addEventListener('click', ee => {
			let x = ee.target.dataset.info;
			console.log(x);
			for(let i=0; i<special_price.length+1; i++) {
				if(x == i) {
					window.open(`special.html#${i}`, '_self');
				}
			}
		});
	});	
})();


// animations


window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	// const scrollNumber = document.documentElement.scrollHeight - window.innerHeight;

	if(scroll > 500) {
		lg_galery.classList.add('lg_galery_anim');
		small_galery_anim();
	}
});


let small_galery_anim = () => {
	let a = sm_galery[0];
	let b = sm_galery[1];
	let c = sm_galery[2];
	let d = sm_galery[3];

	a.classList.add('small_galer_1_anim');
	a.style.display = 'inline';
	b.classList.add('small_galer_2_anim');
	b.style.display = 'inline';
	c.classList.add('small_galer_3_anim');
	c.style.display = 'inline';
	d.classList.add('small_galer_4_anim');
	d.style.display = 'inline';
};

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


//find more button

let find_more_btn = document.querySelector('#find_more_btn');

let scrollInterval;

let scrollx = 0;

find_more_btn.addEventListener('click', () => {
	scrollInterval = setInterval(go, 5);
	scrollx = 0;
});

function go() {
	if(scrollx >= 875) {
		clearInterval(scrollInterval);
	}
	else {
		window.scrollTo(0, scrollx);
		scrollx+=1;
	}
}




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

// Stats count 

let interval_1;
let interval_2;
let interval_3;
let interval_4;


let count_cust = document.querySelector('#count_customers');
let count_trips = document.querySelector('#count_trips');
let count_flights = document.querySelector('#count_flights');
let count_r_trips = document.querySelector('#count_r_trips');

let cust_numbers = 0;
let trips_numbers = 0;
let flights_numbers = 0;
let r_trips_numbers = 0;

function stats_count_1() {
	if(cust_numbers >= 2801) {
		clearInterval(interval_1);
	}
	else {
		count_cust.innerHTML = cust_numbers;
		cust_numbers++;
	}
};


function stats_count_2() {
	if(trips_numbers >= 901) {
		clearInterval(interval_2);
	}
	else {
		count_trips.innerHTML = trips_numbers;
		trips_numbers++;
	}
};

function stats_count_3() {
	if(flights_numbers >= 401) {
		clearInterval(interval_3);
	}
	else {
		count_flights.innerHTML = flights_numbers;
		flights_numbers++;
	}
};

function stats_count_4() {
	if(r_trips_numbers >= 501) {
		clearInterval(interval_4);
	}
	else {
		count_r_trips.innerHTML = r_trips_numbers;
		r_trips_numbers++;
	}
};

(function secondPage() {
	special_info.forEach(e => {
		e.addEventListener('click', ee => {
			let x = ee.target.dataset.info;
			for(let i=0; i<special_price.length+1; i++) {
				if(x == i) {
					window.open(`special.html#${i}`, '_self');
				}
			}
		});
	});	
})();


// animations


let green_line = document.querySelector('#green_underline');

let adventures_h = document.querySelector('#adventures_title');
let adventures_p = document.querySelector('#adventures_subtitle');

let check_circle = document.querySelectorAll('.check_circle');


window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	const scrollNumber = document.documentElement.scrollHeight - window.innerHeight;
	console.log(scroll);
	if(scroll > 500) {
		lg_galery_anim();
		small_galery_anim();
	}

	if(scroll > 1300) {
		green_line_anim();
		adventures_text_anim();
	}

	if(scroll > 2600) {
		specials_anim();
	}

	if(scroll > 3400) {
		check_circle_anim();
	}

	if(scroll > 4000) {
		interval_1 = setInterval(stats_count_1, 10);
		interval_2 = setInterval(stats_count_2, 15);
		interval_3 = setInterval(stats_count_3, 20);
		interval_4 = setInterval(stats_count_4, 22);

	}

	if(scroll == scrollNumber) {
		last_green_underline_anim();
	}
});

let lg_galery_anim = () => {
	lg_galery.classList.add('lg_galery_anim');
};

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

let green_line_anim = () => {
	green_line.classList.add('green_line_anim');
};

let adventures_text_anim = () => {
	adventures_h.classList.add('adventures_h_anim');
	adventures_p.classList.add('adventures_p_anim');
	adventures_h.style.display = 'block';
};

let specials_anim = () => {
	special_class.forEach(e => {
		e.classList.add('specials_anim');
	});
};

let check_circle_anim = () => {
	check_circle.forEach(e => {
		e.classList.add('fa-check-circle_anim');
	});
}

let last_green_underline_anim = () => {
	last_green_underline.classList.add('green_line_anim');
}
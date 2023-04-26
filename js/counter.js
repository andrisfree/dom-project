const counter = document.querySelector('.counter');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');


let stateCounter = {
	number: 0,
	color: "white"
}

let setStateCounter = function(nextStateCounter) {
	renderCounter(nextStateCounter);
	stateCounter = nextStateCounter;
}

let renderCounter = function(stateComponent) {
	if (stateComponent.number !== counter.value) {
		counter.value = stateComponent.number;	
	}
}



const counterHandler = function(e) {
	console.log(e.target.value);
	// let counterValue = e.target.value;
	// let clearValue = '';
	// for (let i = 0; i < counterValue.length; i++) {
	// 	if (!isNaN(Number(counterValue[i]))) {
	// 		clearValue += counterValue[i];
	// 	}
	// }
	// counter.value = clearValue;
	// setStateCounter({number: clearValue});
}

const plusHandler = function(e) {
	// counter.value = Number(counter.value) + 1;
	setStateCounter({...stateCounter, number: Number(counter.value) + 1});
}

const minusHandler = function(e) {
	// counter.value -= 1;
	setStateCounter({...stateCounter, number: Number(counter.value) - 1});
}



counter.addEventListener('input', counterHandler); // вешаем прослушку
plus.addEventListener("click", plusHandler);
minus.addEventListener("click", minusHandler);
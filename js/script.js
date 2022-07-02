//////////////////// section 1 ////////////////////////////////

//define variable
let passInput = document.querySelector('.sec-one input');
let showHideBtn = document.querySelector('.sec-one button');

//on click event
showHideBtn.onclick = function () {
	if (this.innerHTML == 'Show Password') {
		passInput.type = 'text';
		this.innerHTML = 'Hide Password';
	} else if (this.innerHTML == 'Hide Password') {
		passInput.type = 'password';
		this.innerHTML = 'Show Password';
	}
};
///////////////// End of section 1 //////////////////////////

//
//

///////////////////// section 2 /////////////////////////////

// define selector variabls
let inputs = document.querySelectorAll('.sec-two input');
let addButton = document.querySelector('.sec-two button.add');
let removeButton = document.querySelector('.sec-two button.remove');

let tableBody = document.querySelector('.sec-two tbody');

/* add-button click event */
addButton.onclick = function () {
	event.preventDefault();

	//check if input is empty
	let formError = 0;
	for (let input of inputs) {
		if (input.value.length === 0) {
			formError++;
		}
	}
	if (formError > 0) {
		alert('Please provide valid inputs!');
	} else {
		//
		/* Add to table */

		// create row and append to table body
		let row = document.createElement('tr');
		tableBody.append(row);

		for (let input of inputs) {
			//create cell and add it to row
			let cell = document.createElement('td');
			cell.innerHTML = input.value;
			row.append(cell);
		}
	}
};

/* remove-button click event */
removeButton.onclick = function () {
	event.preventDefault();
	let lastRow = document.querySelector('tbody tr:last-of-type');
	if (lastRow) {
		lastRow.remove();
	}
};

/////////////////// End of section 2 /////////////////////////////

//
//

////////////////////////// section 3 ////////////////////////////

// define selector variabls
let submitButton = document.querySelector('.sec-three form button');
let userInputs = document.querySelectorAll('.sec-three form input');

// on click event
submitButton.onclick = function () {
	let formError = 0;
	for (let input of userInputs) {
		if (input.value.length < 5) {
			formError++;
		}
	}
	if (formError > 0) {
		event.preventDefault();
		alert('Please inser more than 5 letters in every input!');
	}
};

/////////////////// End of section 3 /////////////////////////////

//
//

////////////////////////// section 4 ////////////////////////////

// define selector variabls
let buttons = document.querySelectorAll('.sec-four ul li');

//loop over every list button
for (let button of buttons) {
	// add on-click event
	button.onclick = function () {
		//add active class and remove it from previous
		if (button.className != 'active') {
			document.querySelector('li.active').classList.toggle('active');

			button.classList.toggle('active');
		}

		//select image boxes
		let images = document.querySelectorAll('div[category]');

		//loop over images and change display
		for (let image of images) {
			if (button.id == 'all') {
				image.style.display = 'block';
			} else if (image.getAttribute('category') == button.id) {
				image.style.display = 'block';
			} else {
				image.style.display = 'none';
			}
		}
	};
}

////////////////////////// End of section 4 ////////////////////////////

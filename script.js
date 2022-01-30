let dictionary = [];
let index = 0;

function addWord() {
	document.getElementById('trueFalseParagraph').innerHTML = '';
	const word = document.getElementById('addWordField').value;
	dictionary[index] = word;
	++index;
}

function searchWord() {
	document.getElementById('trueFalseParagraph').innerHTML = '';
	if (dictionary.indexOf(document.getElementById('searchField').value) > -1) {
		const trueParagraph = document.createElement('p');
		trueParagraph.textContent = 'This word is in the dictionary.';
		trueParagraph.setAttribute('id', 'trueFalseParagraph');
		document.getElementById('trueFalseParagraph').appendChild(trueParagraph);
	} else {
		const falseParagraph = document.createElement('p');
		falseParagraph.textContent = 'This word is NOT in the dictionary.';
		document.getElementById('trueFalseParagraph').appendChild(falseParagraph);
	}
}
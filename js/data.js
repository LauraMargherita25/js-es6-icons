let arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'alien',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const eleIconsContainer = document.querySelector(".icons_container");

// cambia colori
arrIcons.forEach((objIcon) => objIcon.color = getRndColor());







// ciclo per appendere tutte le icone
function insertIcons(arrIconsArgument, eleIconsContainerArgument) {
	
	eleIconsContainerArgument.innerHTML = "";
	
	// appendo l'elemento box
	arrIconsArgument.forEach((arrElement) => {
		
		const eleBox = document.createElement("div");
		eleBox.classList.add("box");
		eleBox.innerHTML = `
			<i class="${arrElement.family} ${arrElement.prefix}${arrElement.name}" style="color: ${arrElement.color}"></i>
			<p>${arrElement.name}</p>
		`
		eleIconsContainerArgument.append(eleBox);
		
	})
}

insertIcons(arrIcons, eleIconsContainer);



const eleIconsTypeSelector = document.getElementById("icons_type_selector");

eleIconsTypeSelector.addEventListener("change", function () {
	
	const eleIconsTypeSelected = this.value;
	let arrFilteredIcons = []

	if (eleIconsTypeSelected != "all") {
		
		arrFilteredIcons = arrIcons.filter(arrElement =>{
	
			if (arrElement.type == eleIconsTypeSelected) {
				return true; 
			}
		});
		
		insertIcons(arrFilteredIcons, eleIconsContainer);

	} else {
		insertIcons(arrIcons, eleIconsContainer);
	}
	
});




// cambia colori

function getRndColor() {
	
	const strColorChars = "0123456789ABCDEF"
	let hexColor = "#";
	
	for (let i = 0; i < 6; i++) {
		
		hexColor += strColorChars[getRndBetween(0, 15)];		
	}
	
	return hexColor;
}

function getRndBetween(min, max){
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// popola categorie
const arrCategorie = [];

// trovo le categorie
arrIcons.forEach((objIcon) => {
	
	if(!arrCategorie.includes(objIcon.type)){
		arrCategorie.push(objIcon.type);
	}
});

// popolo il select con le categorie trovate
arrCategorie.forEach(categoria => {
	const eleOption = document.createElement("option");
	eleOption.value = categoria;
	eleOption.innerHTML = categoria;
	eleIconsTypeSelector.append(eleOption);
})




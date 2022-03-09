let arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
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

function insertIcons(arrIconsArgument, eleIconsContainerArgument) {
	
	eleIconsContainerArgument.innerHTML = "";

	arrIconsArgument.forEach((arrElement) => {
		
		const eleBox = document.createElement("div");
		eleBox.classList.add("box");
		eleBox.innerHTML = `
			<i class="${arrElement.family} ${arrElement.prefix}${arrElement.name}" style="color: ${arrElement.color}"></i>
			<span>${arrElement.name}</span>
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
		console.log("ciao")
	}
});



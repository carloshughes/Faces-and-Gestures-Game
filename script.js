var numbers = [];

function generetor() {
var myElements = document.getElementById('myImage'),
myImgs = [

		'./1.JPG',
		'./2.JPG',
		'./3.JPG',
		'./4.JPG',
		'./5.JPG',
		'./6.JPG',
		'./7.JPG',
		'./8.JPG',
		'./9.JPG',
		'./10.JPG',
		'./11.JPG',
		'./12.JPG',
		'./13.JPG',
		'./14.JPG',
		'./15.JPG',
		'./16.JPG',
		'./17.JPG',
		'./18.JPG',
		'./19.JPG',
		'./20.JPG',
		'./21.JPG',
		'./22.JPG',
		'./23.JPG',
		'./24.JPG',
		'./25.JPG',
		'./26.JPG',
		'./27.JPG',
		'./28.JPG',
		'./29.JPG',
		'./30.JPG',
		'./31.JPG',
		'./32.JPG',
		'./33.JPG',
		'./34.JPG',
		'./35.JPG'
		],


	//x = Math.floor(Math.random()* myImgs.length+1);
	x = Math.floor(Math.random() * (35 - 1) + 1);
	
	if (numbers.includes(x)==true)
	{
		x = Math.floor(Math.random() * (35 - 1) + 1);

	}else{
			numbers.push(x);

	}
	console.info(numbers.includes(x));
	numbers.forEach( function(valor, indice, array) {
	
	
	console.log(valor);
	});

	

	myFunction();
	myElements.src = myImgs[x];
	
	
}

function myFunction() {
	document.getElementById("demo").innerHTML = numbers;
}

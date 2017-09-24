function drawTree(bartek_to_buc){
	var star = '';
		for (var i = 0; i <bartek_to_buc; i++){
			for (var j=0; j<i; j++){
				star +='*';	
		}
		console.log(star);
	}
}
	
drawTree(7)


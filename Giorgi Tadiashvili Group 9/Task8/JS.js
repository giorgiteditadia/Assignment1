//--------------------------------------------
function task1(str){
	document.write(`<i><b><u>${str}</u></b></i><br>`);
}

task1('giorgi'); 
//--------------------------------------------


//--------------------------------------------
function task2(num1, num2){
	return (num1 + num2 );
}

document.write(task2(5,10));
//--------------------------------------------


//--------------------------------------------


function task3(str, vol){
	document.write(`

			<p style="font-size:${vol}px;">${str}</p>
		`);
}

task3('giorgi',30);
//--------------------------------------------



//--------------------------------------------
function task4(wid){
	var o = `<table style='height: 300px; width:${wid}px;'>`
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='</table>'
	o+="<br>"
	document.write(o);
}
task4(800)
//--------------------------------------------



//--------------------------------------------


function task5(hei){
	var o = `<table style='height: ${hei}px; width:500px;'>`
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='</table>'
	o+="<br>"
	document.write(o);
}
task5(600)


//--------------------------------------------



//--------------------------------------------


function task6(wid,hei){
	var o = `<table style='height: ${hei}px; width:${wid}px;'>`
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='</table>'
	o+="<br>"
	document.write(o);
}
task6(600,600)


//--------------------------------------------


//--------------------------------------------



//--------------------------------------------


function task7(col){
	var o = `<table style='height: 600px; width:600px; background-color:${col};'>`
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='</table>'
	o+="<br>"
	document.write(o);
}
task7('skyblue')


//--------------------------------------------




//--------------------------------------------


function task8(bor){
	var o = `<table id='t8' style='height: 600px; width:600px; border-width:${bor}px;'>`
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='</table>'
	o+="<br>"
	document.write(o);
}
task8(10)


//--------------------------------------------





//--------------------------------------------


function task9(wid,hei,col,bor){
	var o = `<table style='height: ${hei}px; width:${wid}px; border-width:${bor}px; background-color:${col};'>`
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='<tr>'
	o+='<td>'
	o+='</td>'
	o+='<td>'
	o+='</td>'
	o+='</tr>'
	o+='</table>'
	o+="<br>"
	document.write(o);
}
task9(600,600, 'cyan', 9)


//--------------------------------------------

//--------------------------------------------

function task11(){
	for(i=0; i<=9; i++){
		document.write(i+'<br>');
	}
}
task11();
//--------------------------------------------


function task12(n){
	for(i=0; i<=(n-1); i++){
		document.write(i+'<br>');
	}
}
task12(10);
//--------------------------------------------

//--------------------------------------------


function task13(m, n){
	for(m; m<=(n-1); m++){
		document.write(m+'<br>');
	}
}
task13(5,10);
//--------------------------------------------


//--------------------------------------------


function task14(m,n){
	if(m<n){
	for(m; m<=(n-1); m++){
		document.write(m+'<br>');
	}
	}else{
		null
	}
}
task14(21,20);
//--------------------------------------------

//--------------------------------------------
function task15(str,sve){
	re=sve
	cur = 0
	cursve = 0
	a='<table>'
	for(str; str; str--){
		a+='<tr>'
		cursve++
		for(sve; sve; sve--){
			cur++
			a+=`<td>Sveti - ${cur}<br>Striqoni - ${cursve}</td>`
			
		}
		a+='</tr>'

		sve=re
	}

	a+='</table>'
	document.write(a)
}

task15(10, 10)
//--------------------------------------------


//--------------------------------------------

array = [15,20,60,31,54,33,77,89,25,65];

function task18(x){
	m=n=0
	for(i of array){
		if(x<i){
		document.write(i+'>'+x+"<br>")
		m++
		}
		else if(x>i){
		document.write(i+'<'+x+"<br>")
		n++
		}
	}
	document.write(`${m} metia da ${n} naklebia <br>`)
	
}

task18(60)

//--------------------------------------------


array1 = [
[15,20,60,31],
[54,33,77,89],
[25,65,22,33],
[90,49,38,66]
];

function task19(){
	for(i=0; i<=(4-1); i++){

		for(j=0; j<=(4-1); j++){
			document.write(array1[i][j]+' ')


		}

		document.write('<br>')
	}



}

task19()

document.write('<br>')


function task19_2(){
	i=0
	a=0
	b=1
	t=4
	out=null
	while(i!=4){
			out= array1[a].slice(b)
			document.write(out+'<br>')
		b++
		i++
		a++
	}

}

task19_2();

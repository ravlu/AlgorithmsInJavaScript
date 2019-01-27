var output=[];
var textOut="<ul>";
function tree(dep,val){

	if(dep==0){output.push(val);textOut+="<li>"+val+"</li>"}
	else{		
		tree(dep-1,val+'0');
		tree(dep-1,val+'1');
			}
	return ;
}
//tree(document.getElementById("NumOfDigits").value,'',"");
function myFunction(){
	output=[];
	textOut="<ul>";
	tree(document.getElementById("NumOfDigits").value,'',"");
	textOut+="</ul>"
	document.getElementById('TextArray').innerHTML=textOut;
	document.getElementById('auxLenVar').innerHTML="Array Length"+output.length;
}
myFunction();
//textOut+="</ul>"
//document.getElementById('BinaryArray').innerHTML="Binary Array"+output;
//document.getElementById('TextArray').innerHTML=textOut;

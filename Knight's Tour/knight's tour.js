let board=Array(8).fill().map(()=>Array(8).fill(0));
function printBoard(){
	
	var txtTable="<table>";
	board.forEach((row,i)=>{
		txtTable+="<tr>";
		row.forEach((item,j)=>{
			txtTable+="<td>"+item+"</td>";
		})		
		txtTable+="</tr>";
	});
txtTable+="</table>";
return txtTable;
	}
function knightstour(num,m,n){
}
//knightstour(1,0,0);
//document.getElementById("OutputVar").innerHTML="Output:"+output;
document.getElementById("OutputVar").innerHTML=printBoard();
//document.getElementById("OutputLen").innerHTML="Output:"+output.length;
//console.log(output);
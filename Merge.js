var a=[10,15,20,25,27,30,35,4,8,12,16,24,28];

var aux=[0,0,0,0,0,0,0,0,0,0,0,0,0];

function Merge(lo,mid,hi){

var i=lo;
var j=mid+1;
//var hi=aux.length;
for(var k=0;k<=hi;k++){
	if(j>hi){aux[k]=a[i++];}
	else if(i>mid){aux[k]=a[j++];}
	else if(a[i]<a[j]){aux[k]=a[i++];}
	else{aux[k]=a[j++];}
}


return aux;
}
function sort(lo,hi){
	if(hi<=lo) return;
	var mid=lo+((hi-lo)/2);
	sort(lo,mid);
	sort(mid+1,hi);
	return Merge(lo,mid,hi);	
}
//console.log("Array:"+quf);
document.getElementById("MergeArray").innerHTML="Merged Array:"+sort(0,a.length-1);

document.getElementById("auxLenVar").innerHTML="Aux Length:"+aux.length;
document.getElementById("aLenVar").innerHTML="A Length:"+a.length;
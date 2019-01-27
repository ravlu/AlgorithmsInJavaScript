var quf=[10,51,23,3,44,53,96,72,68,9,10];
function sort(arr){
for(var i=0;i<=10;i++){
	for(var j=i+1;j<=10;j++){
		var min =i;
		if(arr[i]>arr[j]){
		min=j;
		}
		var temp=arr[i];
		arr[i]=arr[min];
		arr[min]=temp;
	}
}
return arr;
}
//console.log("Array:"+quf);
document.getElementById("selectionArray").innerHTML="Sorted Array:"+sort(quf);
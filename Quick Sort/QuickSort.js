function partition(a,lo,hi) {
	var i=lo;
	var j=hi+1;
	
	while(true){
	while(a[++i]<a[lo]){
			if(i==hi) break;
	}
	while(a[--j]>a[lo]){
		if(j==lo) break;
		}
		if(i>=j) break;
		exch(a,i,j);
	
	}
	exch(a,lo,j);
	
	return j;
}

function exch(a,i,j){
var temp=a[i];
a[i]=a[j];
a[j]=temp;
}

function sort(a,lo,hi){
if(hi<=lo) return;
var j=partition(a,lo,hi);
sort(a,lo,j-1);
sort(a,j+1,hi);
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];
document.getElementById("inputarr").innerHTML="Original Array: "+myArray;
sort(myArray,0,6);
document.getElementById("outputarr").innerHTML="Sorted Array: "+myArray;

//console.log("Original array: " + myArray);
//var sortedArray = quick_Sort(myArray);
//console.log("Sorted array: " + sortedArray);
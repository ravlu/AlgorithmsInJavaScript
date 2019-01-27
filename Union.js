var quf=[0,1,2,3,4,5,6,7,8,9,10];
var sz =[1,1,1,1,1,1,1,1,1,1,1];//root of smaller tree to root of larger tree
function root(i){
while(i!=quf[i]){
	// quf[i]=quf[quf[i]]; path compression
	i=quf[i];
}
return i;
}
function connected(p,q){
	return root(p)==root(q);

}
function union(p,q){
	
	if(!connected(p,q)){
	var pr=root(p);
	var qr=root(q);	
	quf[pr]=qr;
	//id of p's root to q's root
	}
}
var N=10;
var p=[4,3,6,9,2,8,5,7,6,1,6];
var q=[3,8,5,4,1,9,0,2,1,0,7];

for(var i=0;i<=N;i++)
{
union(p[i],q[i]);	
}
//console.log("Union Set:"+quf);
document.getElementById("UnionArray").innerHTML="Union Set:"+quf;
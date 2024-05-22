//your JS code here. If required.
let val=document.getElementById('level');
let count=0;

while (val) {
	count++;
	val=val.parentElement;
}

let s="The level of the element is: "+count;

alert(s);

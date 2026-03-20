// Typing
const words=["Web Developer","SEO Expert","WordPress"];
let i=0,j=0,isDeleting=false;

function type(){
let text=words[i];
document.getElementById("typing").textContent=text.substring(0,j);

if(!isDeleting && j<text.length) j++;
else if(isDeleting && j>0) j--;

if(j===text.length) isDeleting=true;
if(j===0){isDeleting=false;i=(i+1)%words.length;}

setTimeout(type,100);
}
type();
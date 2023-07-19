function ac(){
    document.getElementById("txt").value="";
}
function display(v){
    document.getElementById("txt").value+=v;
}
function result(){
    if(document.getElementById("txt")===undefined){
    // let b=0;
    document.getElementById("txt").value=0;
}
else{
    let a=document.getElementById("txt").value;
    let res=eval(a);
    document.getElementById("txt").value=res;
}

}
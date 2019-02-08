//set a flag
var clickIt = true;
//button one
$("#btnone").on("click",click1);
//flagged if statement for on clicks
function click1(){
    if(clickIt === true){
        $("#btntwo").removeAttr("disabled");
        $("#btnone").attr("disabled","");
        clickIt = false;
    }
    else{
        $("#btntwo").attr("disabled","");
    }
}
//button two
$("#btntwo").on("click",click2);
//flagged if statment for on clicks
function click2() {
    if(clickIt === false){
        $("#btnone").removeAttr("disabled");
        $("#btntwo").attr("disabled","");
        clickIt = true;
    }
    else{
        $("#btnone").attr("disabled","");
    }
}
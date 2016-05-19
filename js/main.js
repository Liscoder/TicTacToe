
$(document).ready(function(){
    $(".space").click(cambiar);
    $("#submit").click(reinicio);
});
var u=0;

function cambiar(){

    XandO(this);
};
function XandO(espacio){

        u++;      
        if(u%2==0){
                $(espacio).css("background-color","rgba(0,57,128,0.48");
                 //$(espacio).html("<span class='fa fa-times'></span>");
                 $(espacio).text("0");
            }
            else{
                $(espacio).css("background-color","rgba(0,57,128,0.48");
                //$(espacio).html("<span class='fa fa-circle-thin'></span>");
                 $(espacio).text("x");
            }
            $(espacio).attr('disabled','disabled');

        	var oneone=$("#11").text();
            var onetwo=$("#12").text();
            var onethree=$("#13").text();
            var twoone=$("#21").text();
            var twotwo=$("#22").text();
            var twothree=$("#23").text();
            var threeone=$("#31").text();
            var threetwo=$("#32").text();
            var threethree=$("#33").text();

        if(u>=5){ 
            if((twotwo==oneone)&&(oneone==threethree)&&(onetwo!="")&&(oneone!="")&&(threethree!="")){
                alert("jugador "+oneone + " gano");
            }else if((oneone==onetwo)&&(onetwo==onethree)&&(oneone!="")&&(onetwo!="")&&(onethree!="")){
                alert("jugador "+onetwo +" gano");
            }else if((twoone==twotwo)&&(twotwo==twothree)&&(twoone!="")&&(twotwo!="")&&(twothree!="")){
                alert("jugador "+twotwo + " gano");
            }else if((threethree==threeone)&&(threeone==threetwo)&&(threeone!="")&&(threethree!="")&&(threetwo!="")){
                alert("jugador "+ threeone+" gano");
            }else if((onethree==twotwo)&&(twotwo==threeone)&&(onethree!="")&&(threeone!="")&&(twotwo!="")){
                alert("jugador "+ twotwo+ " gano");
            }else if((oneone==twoone)&&(twoone==threeone)&&(oneone!="")&&(twoone!="")&&(threeone!="")){
                alert("jugador "+twoone +" gano");
            }else if((onetwo==twotwo)&&(twotwo==threetwo)&&(onetwo!="")&&(twotwo!="")&&(threetwo!="")){
                alert("jugador "+twotwo + " gano");
            }else if((threeone==threetwo)&&(threetwo==threethree)&&(threeone=="")&&(threethree!="")&&(threetwo!="")){
                alert("jugador "+ threetwo+" gano");
            }else if(u==9){
                alert("Empate");
            }
        }
    
    };

    function reinicio(){
        $(".space").html("");
        $(".space").removeAttr('disabled');
        i=0;
        $(".space").css("background-color","#B0ECE1");

    };
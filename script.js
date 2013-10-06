$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    
    $("#numbers a").not("#clear,#clearall").click(function() {
    
        number += $(this).html();
        totaldiv.text(number);
        testNumLength(number);
        console.log(number + " = number");
    
    });

    $("#operators a").not("#equals").click(function() {
    
        operator = $(this).html();
        newnumber = number;
        number = "";
        totaldiv.text("0");
        console.log(operator + " = operator, " + newnumber + " = newnumber");
 
    }); 
    
    $("#clear,#clearall").click(function() {
    
        number = "";
        totaldiv.text("0");
        var thisid = $(this).attr("id");
        if (thisid === "clearall") {
            newnumber = "";
            operator = "";
            console.log(thisid + " clicked, resetting newnumber")
        };
 
    }); 

    $("#equals").click(function() {

        var answer;
    
        if (operator != "") {
            number = parseInt(number, 10);
            newnumber = parseInt(newnumber, 10);
        };

        switch(operator){

            case "+":
                answer = newnumber + number;
                break;
            case "-":
                answer = newnumber - number;
                break;
            case "*":
                answer = newnumber * number;
                break;
            case "/":
                answer = newnumber / number;
                break;
            default:
                console.log("no operator provided");
        }

        if (operator != "") {
            totaldiv.text(answer);
        };

        operator = "";

    });    

});
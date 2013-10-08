$(document).ready(function(){
    
    // scope the screen object so we can access it within the click handler

    var screen = $("#screen");
    var screenReset = "0";
    var evaluation = "";
    var evalCache = {};
    updateScreen(screenReset);

    $("#equals").on("click", function(event) {
        // wrap this in a try catch, sometimes you can press = in a dumb situation, let's not account for those individually
        evaluation = eval(evaluation);
        updateScreen(evaluation);
    });

    $("#clearall").on("click", function(event) {

        evaluation = "";
        updateScreen(screenReset);

    });



    $("#clickables a").not("#equals, #clearall").on("click", function(event) {
        var clicked = $(this).text();
        console.log("clickables clicked");

        if (clicked === ".") {
                var holder = evaluation.toString().split(/[\+\-\/\*]/);
                var holderLength = holder.length-1;
                var lastitem = holder[holderLength];
                lastitemFl = parseFloat(lastitem);

                console.log(holder + " = holder\n " + lastitem + " = lastitem \n " + lastitemFl + " = float lastitem \n " + holderLength);

                if (lastitemFl || lastitemFl === 0) { // this here to resolve a bug related to NaN populating lastitemFl when leading after an operator with a decimal - i think that this would be resolved by using a linear search to look for the . see code below

                    // if (number.indexOf('.') > 0)
                    //     {
                    //       hasDecimal = true;
                    //       console.log("hasDecimal = " + hasDecimal);
                    //     }

                    if (lastitemFl % 1 != 0 || lastitem.charAt(lastitem.length-1) === ".") { 
                        console.log(lastitem + " = lastitem");
                        return;
                    }
                }
                else { evaluation += "0";}
            }

        evaluation += clicked;
        updateScreen(evaluation);
    });


    function updateScreen (num) {
        screen.text(num);
        var number = num.toString();

    }

    function addToHistory (){

    }

    function checkDecimal (arg) {

    }

    function throwError (arg) {
        // body...
    }

});
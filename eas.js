//Div Generator
function divGen(){

    //Generates a static amount of divs filled with the set properties.
    for( i = 0 ; i < 256; i++ ){
        var box = document.createElement("div"); //creates a box variable that creates a div element.

        box.style.width = "40px";
        box.style.height = "37px";
        box.style.border = "1px solid black";
        box.className = "boxClass";
        
        document.getElementById("container").appendChild(box); //Grabs the element by ID and adds a div to it with the above properties.
    }
}

divGen();
//window.onload = load_divGen => { divGen();}; // When the pages loads, it loads the divGen() function.

// Variables for Class Changer
var boxClass = document.querySelectorAll('.boxClass'); // Grabs an element with the boxClass class

//Class Changer
function classChanger(){
    for( i = 0 ; i < boxClass.length ; i++ ){                // For loop to iterate over every boxClass based on the amount of elements with that class
        boxClass[i].addEventListener('mouseover', (boxClass) => {
            boxClass.target.classList.add('hover'); // *1
        }); 

        //If I want to make an erase function:
        /*     
        boxClass[i].addEventListener('mouseout', (boxClass) => {
            boxClass.target.classList.remove('hover')
        });
        */                                   
    }  
}

classChanger();

//Button Event


/*
Sites Used:

DivGen:
https://stackoverflow.com/questions/13885533/it-says-that-typeerror-document-getelementbyid-is-null
https://css-tricks.com/snippets/css/complete-guide-grid/
https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined
https://www.w3schools.com/html/html_css.asp
https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class

ClassChanger:
https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
https://stackoverflow.com/questions/43988484/mouseover-mouseout-w-javascript
https://stackoverflow.com/questions/16821564/how-to-add-remove-class-on-mouseover-mouseout-jquery-hover/16821586
https://stackoverflow.com/questions/35319636/document-queryselectorall-not-working <<IMPORTANT
https://www.w3schools.com/jsref/met_document_queryselector.asp
https://www.w3schools.com/jsref/met_element_queryselectorall.asp
https://stackoverflow.com/questions/24219702/struggling-with-classlist-add-and-getelementsbyclassname
https://www.w3schools.com/jsref/event_onmouseout.asp
https://www.w3schools.com/jsref/prop_style_border.asp
*/

/*
*1: Im fucking stupid, I was referencing only boxClass.classList without pointing it towards the correct object which was target.
 This was the original line I was using boxClass.classList.toggle('hover');

*/
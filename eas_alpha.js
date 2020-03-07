//================================Div Generator================================
//Div Generator Function
function divGen(x){
    //Generates a static amount of divs filled with the set properties.
    for( i = 0 ; i < (x**2); i++ ){
        var box = document.createElement("div"); //creates a box variable that creates a div element.
        box.style.width = "37.5px";
        box.style.height = "37.5px";
        box.style.border = "2px solid black";
        box.className = "boxClass";       
        document.getElementById("container").appendChild(box); //Grabs the element by ID and adds a div to it with the above properties.
    }
}
divGen(16);
//================================Class Changer================================
// Variables for Class Changer
var boxClass = document.querySelectorAll('.boxClass'); // Grabs an element with the boxClass class
//Class Changer Function
function classChanger(){
    for( i = 0 ; i < boxClass.length ; i++ ){                // For loop to iterate over every boxClass based on how many elements have that class.
        boxClass[i].addEventListener('mouseover', (boxClass) => {
            boxClass.target.classList.add('hover'); // *1
        });                                
    }  
}
classChanger();
//================================Button Events================================
//Button Event Variables
    //clearGrid Variables
btnClearGrid = document.querySelector('#button_clearGrid');
btnClearGrid.addEventListener('click', (clearGrid));
    //newGrid Variables
btnNewGridInput = document.querySelector('#button_customGridSize');
btnNewGridInput.addEventListener('click', (newGrid));

//Div Generator Start Variables
//btn_Start = document.querySelector('#button_Start');

//Button Event Functions
    //New Grid Size Drop Down
    //New Grid Size Text Field
function newGrid(){
    newGridInputWidthValue = document.getElementById('input_customGridWidth').value;
    newGridInputHeightValue = document.getElementById('input_customGridHeight').value;
    console.log(`The Height is ${newGridInputHeightValue}, The Width is ${newGridInputWidthValue}`);
    container.style.gridTemplateColumns = `repeat(${newGridInputWidthValue}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${newGridInputHeightValue}, 1fr)`;
}

    //clearGrid
function clearGrid(){
    for( i = 0 ; i < boxClass.length ; i++ ){                // For loop to iterate over every boxClass based on the amount of elements with that class
            boxClass[i].classList.remove('hover'); // *1
    }
}  

newGridValue = Number(newGridInputWidthValue) + Number(newGridInputHeightValue);
console.log(newGridValue);

/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////

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

Button Events:
clearButton:
https://www.geeksforgeeks.org/how-to-remove-all-classes-that-begin-with-a-certain-string-in-javascript/
https://clubmate.fi/remove-a-class-name-from-multiple-elements-with-pure-javascript/ <-- CLEAR BUTTON BASICALLY
https://stackoverflow.com/questions/23565551/javascript-add-remove-a-single-class-on-multiple-elements

startButton:
https://ultimatecourses.com/blog/attaching-event-handlers-to-dynamically-created-javascript-elements <-- NEEDS TO BE DONE IN ORDER TO INTERACT WITH DYNAMICALLY CREATED ELEMENTS I.E. THE GRID.

inputButton:
https://stackoverflow.com/questions/20963418/submit-text-box-input-using-button
https://stackoverflow.com/questions/48070987/how-to-get-user-input-from-javascript-form
https://www.w3schools.com/jsref/met_element_addeventlistener.asp
https://stackoverflow.com/questions/14496531/adding-two-numbers-concatenates-them-instead-of-calculating-the-sum
https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_js_grid-template-rows
https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/
Empty Container to start a new one:
https://www.w3schools.com/jquery/html_empty.asp


Refactoring for dynamic variables by using the DOM:
https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/
https://www.quirksmode.org/dom/events/mouseover.html
https://medium.com/littlemanco/handling-dynamically-created-html-in-javascript-2746e02cc063
https://stackoverflow.com/questions/19447734/get-children-of-element-using-javascript
https://dev.to/shimphillip/handing-javascript-events-efficiently-with-bubble-and-capture-4ha5
https://www.sitepoint.com/event-bubbling-javascript/
https://www.quirksmode.org/js/events_mouse.html#relatedtarget
https://stackoverflow.com/questions/31608928/event-target-classlist-doesnt-have-indexof-method
*/

/*
*1: Im fucking stupid, I was referencing only boxClass.classList without pointing it towards the correct object which was target.
 This was the original line I was using boxClass.classList.toggle('hover');

*/

    //Erase Button
/* Made an Erase Button *//*
btnEraseButton = document.querySelector('#button_eraseButton');

function xxxxxxxxxxxxx(){
    yyyyyyyyyyy.addEventListener('click', () =>{
        for( i = 0 ; i < boxClass.length ; i++ ){                // For loop to iterate over every boxClass based on the amount of elements with that class
            boxClass[i].addEventListener('mouseover', (boxClass) => {
                boxClass.target.classList.toggle('hover'); // *1
            }); 
        }
    });
}
xxxxxxxxxxxxx()
*/

//================================Div Generator================================
divGenContainer = document.getElementById("container");

//Div Generator Function
function divGen(area){
    //Combined values of grid measurements, Grid Area.
    tSqGrid = area ** 2;

    //Organizes grid content
    divGenContainer.style.gridTemplateColumns = `repeat(${area}, 1fr)`;
    divGenContainer.style.gridTemplateRows = `repeat(${area}, 1fr)`;
    
    //Generates a static amount of divs filled with the set properties.
    for( i = 0 ; i < tSqGrid; i++ ){
        box = document.createElement("div"); //creates a box variable that creates a div element.
        box.className = "boxClass";       
        container.appendChild(box); //Grabs the element by ID and adds a div to it with the above properties.
    }
}
//================================Button Events================================
//clearGrid==========================
//clearGrid Variables

btnClearGrid = document.querySelector('.button_clearGrid');
btnClearGrid.addEventListener('click', (clearGrid));

// NEED TO FUSE THE ABOVE  VARIABLES AND THE CLEARGRID FUNCTION INTO A SINGULAR FUNCTION

//clearGrid
// Need to refactor in order to handle dynamically created divs
function clearGrid(){
    newGridInput();
}
// GOOD ENOUGH

//newGrid==========================
//newGrid Variables
btnNewGridInput = document.querySelector('#button_customGridSize');
btnNewGridInput.addEventListener('click', (newGridInput));


//newGrid
function newGridInput(){
        //Grabs Values from input boxes
    newGridAreaValue = document.getElementById('input_customGridArea').value;
        //console.log(`The Height is ${newGridInputHeightValue}, The Width is ${newGridInputWidthValue}`);

        //Makes an adjustable Container size based on the given values.
    divGenContainer.style.gridTemplateColumns = `repeat(${newGridAreaValue}, 1fr)`;
    divGenContainer.style.gridTemplateRows = `repeat(${newGridAreaValue}, 1fr)`;

    //Calls divGen with new properties
    removeGrid();
    divGen(newGridAreaValue);

    console.log(divGenContainer.childElementCount)
}

//removeGrid==========================
//removeGrid
function removeGrid(){
    //removes old container in order to put new boxes in
    childContainer = divGenContainer.lastElementChild;
    while(childContainer){
        divGenContainer.removeChild(childContainer);
        childContainer = divGenContainer.lastElementChild;
    }
}
//================================Class Changer================================
//Class Changer Function
// Refactored to incorporate event bubbling for dynamically created elements.
// No need for variables as its searching the entire page.
function classChange(){
    document.addEventListener('mouseover', (boxClass)=>{
        if(!boxClass.target.classList.contains('boxClass')){
            console.log("Not a Box")
            return;
        }else{
            console.log("A box")
            boxClass.target.classList.add('hover');
        }
    }, false);
}

// MAIN FUNCTION STARTS HERE
divGen(16);
classChange();
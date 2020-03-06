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
btnNewGridInput.addEventListener('click', (newGridInput));

//clearGrid
function clearGrid(){
    for( i = 0 ; i < boxClass.length ; i++ ){                // For loop to iterate over every boxClass based on the amount of elements with that class
            boxClass[i].classList.remove('hover'); // *1
    }
} 

//newGrid
function newGridInput(){
        //Grabs Values from input boxes
    newGridAreaValue = document.getElementById('input_customGridArea').value;
        //console.log(`The Height is ${newGridInputHeightValue}, The Width is ${newGridInputWidthValue}`);

        //Makes an adjustable Container size based on the given values.
    divGenContainer.style.gridTemplateColumns = `repeat(${newGridAreaValue}, 1fr)`;
    divGenContainer.style.gridTemplateRows = `repeat(${newGridAreaValue}, 1fr)`;
    
        //Total Value
    //newGridValue = Number(newGridInputWidthValue) + Number(newGridInputHeightValue);
        //console.log(newGridValue);

        //removes old container in order to put new boxes in
    childContainer = divGenContainer.lastElementChild;
    while(childContainer){
        divGenContainer.removeChild(childContainer);
        childContainer = divGenContainer.lastElementChild;
    }

    //Calls divGen with new properties
    divGen(newGridAreaValue);
}

// MAIN FUNCTION STARTS HERE
divGen(16);
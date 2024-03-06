    // Create container div
    var div1 = create('div', 'container-fluid mt-5 ml-5 p-5');
    let bg = document.querySelector('body');

    // Create div elements
    var divarr = createElements('div', 'offset-md-2 offset-sm-1 row text-md-center text-sm-left h4 mb-0', 6);

    // Create input field
    var input = create('input', 'col-8 border-3 border-light text-right mt-5 mb-1');
    input.setAttribute('type', 'text');
    input.setAttribute('style', `line-height:60px; background-color:white ; font-family: 'Comfortaa', cursive;`);
    input.id = "display";

    // Create number buttons
    var btnnumbers = createElements('button', 'btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-3 p-sm-4 p-xs-4 col-2', 10);
    btnnumbers[0].setAttribute('onclick', "appendNumber(0)");
    btnnumbers[1].setAttribute('onclick', `appendNumber(1)`);
    btnnumbers[2].setAttribute('onclick', `appendNumber(2)`);
    btnnumbers[3].setAttribute('onclick', `appendNumber(3)`);
    btnnumbers[4].setAttribute('onclick', `appendNumber(4)`);
    btnnumbers[5].setAttribute('onclick', `appendNumber(5)`);
    btnnumbers[6].setAttribute('onclick', `appendNumber(6)`);
    btnnumbers[7].setAttribute('onclick', `appendNumber(7)`);
    btnnumbers[8].setAttribute('onclick', `appendNumber(8)`);
    btnnumbers[9].setAttribute('onclick', `appendNumber(9)`);

    // Create operator buttons
    var add = createButton('+', '+', `appendNumber('+')`);
    var sub = createButton('-', '-', `appendNumber('-')`);
    var mul = createButton('x', 'X', `appendNumber('*')`);
    var division = createButton('&#247;', '/', `appendNumber('/')`);
    var equals = createButton('=', '=', 'equate()');
    var clear = createButton('c', 'c', 'clearScreen()');

    // Append elements to document
    document.body.append(div1);
    div1.append(divarr[0], divarr[1], divarr[2], divarr[3], divarr[4], divarr[5]);
    divarr[0].append(input);
    divarr[1].append(input);
    divarr[2].append(btnnumbers[7], btnnumbers[8], btnnumbers[9], mul);
    divarr[3].append(btnnumbers[4], btnnumbers[5], btnnumbers[6], sub);
    divarr[4].append(btnnumbers[1], btnnumbers[2], btnnumbers[3], add);
    divarr[5].append(clear,btnnumbers[0],equals,division);

    // Apply CSS styles for color
    bg.style.backgroundColor = "#f2f2f2"; 
    div1.style.backgroundColor = "#f2f2f2"; 
    input.style.backgroundColor = "#ffffff";
    btnnumbers.forEach(btn => {
        btn.style.backgroundColor = "#4CAF50"; 
        btn.style.color = "#ffffff";
    });
    add.style.backgroundColor = "#2196F3"; 
    sub.style.backgroundColor = "#2196F3"; 
    mul.style.backgroundColor = "#2196F3"; 
    division.style.backgroundColor = "#2196F3"; 
    equals.style.backgroundColor = "#FF9800"; 
    clear.style.backgroundColor = "#f44336"; 

    // Function to create element
    function create(element, classname) {
        var t = document.createElement(element);
        t.setAttribute('class', classname);
        return t;
    }

    // Function to create multiple elements
    function createElements(element, classname, num) {
        let elem = [];
        for (let i = 0; i < num; i++) {
            var b = document.createElement(element);
            b.setAttribute('class', classname);
            b.setAttribute('style', `font-family: 'Comfortaa', cursive;`);
            if (element === 'button') {
                b.setAttribute('value', i);
                b.innerHTML = i;
            }
            elem.push(b);
        }
        return elem;
    }

    // Function to create button element with specific text, value, and function
    function createButton(txt, val, fn) {
        let a = document.createElement('button');
        a.setAttribute('class', 'btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-4 p-sm-6 p-xs-4 col-2');
        a.setAttribute('value', val);
        a.innerHTML = txt;
        a.setAttribute('onclick', fn);
        return a;
    }

    // Function to append number to input field
    function appendNumber(val) {
        input.value += val;
    }

    // Function to evaluate expression and display result
    function equate() {
        input.value = Number.isInteger(eval(input.value)) ? eval(input.value) : eval(input.value).toFixed(2);
    }

    // Function to clear input field
    function clearScreen() {
        input.value = "";
    }

    // Event listener to allow only numbers through keyboard input
    input.addEventListener('keydown', function(event) {
        const key = event.key;
        const isNumber = /[0-9]/.test(key);
        // Allow numbers and specific keys like Backspace, Enter, Tab, etc.
        if (!isNumber && key !== 'Backspace' && key !== 'Enter' && key !== 'Tab' && key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'Delete' && key !== 'Home' && key !== 'End') {
            event.preventDefault();
        }
    });


const buttons = document.getElementsByClassName('btn');
const resultInput = document.getElementById('res'); // Assuming the result input field has an ID of "res"

let string = "";

Array.from(buttons).forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
           string = eval(string)
           resultInput.value = string;
        }
        else if(e.target.innerHTML == "C"){
           string = "";
           resultInput.value = string;
        }
        else if (e.target.innerHTML === "B") {
            // Remove the last character from the string
            string = string.slice(0, -1);
            resultInput.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            resultInput.value = string;
        }
        
    }) 
});
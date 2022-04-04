let resultTab = document.querySelector("div.result p");
let resultAns = document.querySelector("div.result h3");

var inputs = document.querySelector(".buttons");

let first_click = true;

for (var child of inputs.children) {    
	child.addEventListener("click", function (e) {
        handleCal(e.target)
	})
}


document.addEventListener('keypress',(k)=>{
    console.log(k);
    if (k.isTrusted && k.code.startsWith('Numpad')) {
        console.log('its working');
        let key = new Object();
        key.innerText = k.key;
        handleCal(key);
    }
})


function handleCal(e) {
    if (first_click) {
        resultTab.innerText = '';
        first_click = false
    }

    if (e.innerText === "=" || e.innerText == 'Enter') {
        let operation = resultTab.innerText
        if (operation) {
            resultAns.innerText = eval(operation);
        } else {
            resultAns.innerText = 0;
        }
    } else if (e.innerText === "ac") {
        resultTab.innerHTML = resultTab.innerHTML.slice(0, -1);
    }else if (e.innerText == 'on'){
        resultAns.innerText = 0;
        resultTab.innerText = 0;
    } else {
        resultTab.innerHTML += e.innerText;
    }
}
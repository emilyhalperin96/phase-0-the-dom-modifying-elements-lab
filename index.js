const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.textContent = "Emily is the champion"

const body = document.querySelector('body');
body.append(newHeader);
//not a string because you are passing the element 

//add text to newHeader 
// '"youre name is the champion"
// "add in your name in place"


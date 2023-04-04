const bye = document.querySelector('main#main');
main.remove(bye);

const newHeader = document.createElement("h1");
newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "Anthony Ramirez is the champion";

document.body.append("newHeader");

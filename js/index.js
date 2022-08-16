const target = document.createElement("li");
const text = document.createTextNode("Dynamic text");
target.appendChild(text);
document.getElementById("liContainer").insertBefore(target, liContainer.firstChild);
// chenage.insertBefore(target,);
const sibling = document.getElementById("liContainer");
console.log(sibling.childNodes[1].nextSibling)

//
const terget = document.getElementById("mainContainer");
//
const section = document.createElement("scetion");
const title = document.createElement("h1");
title.innerText = "this is dynamic section";
section.appendChild(title);
//
const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Biriyani";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "borhani";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Vorta";
ul.appendChild(li3);

section.appendChild(ul);
terget.appendChild(section);
//another section
const section2 = document.createElement("section");
section2.innerHTML = `
<h2>This another section(T-shirt)</h2>
<ul>
    <li>T-shirt</li>
    <li>Pant</li>
    <li>Ganji</li>
</ul>
`
terget.appendChild(section2);
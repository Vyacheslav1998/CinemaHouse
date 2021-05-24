let s = document.getElementById("sidebar")


let news = [
    {
        "text": "Новости дня",
        "date": "12.01.2025",
        "a": "Читать",
        "ref": "Login.html"
    },
    {
        "text": "Новости недели",
        "date": "12.01.2028",
        "a": "Читать",
        "ref": "Login.html"
    },
    {
        "text": "Новости года",
        "date": "12.01.2030",
        "a": "Читать",
        "ref": "Login.html"
    }
]


for (let i = 0; i < news.length; i++) {
    let first = document.createElement("div")
    s.appendChild(first);
    first.style.width = "100%"
    first.style.height = "100%"
    first.className = "sidebar"

    let textElement = document.createElement("h2");
    textElement.innerText = news[i].text;
    let dateElement = document.createElement("h2");
    dateElement.innerText = news[i].date;
    let aElement = document.createElement("h2");
    aElement.innerText = news[i].a;



    first.appendChild(textElement);
    first.appendChild(dateElement);
    first.appendChild(aElement);


    console.log(news[i])
}


const a = document.getElementById("heading");
document.getElementById("text");

const h2 = document.createElement('h2')
h2.innerText = "Привет"
console.log(h2)

h2.style.position = "absolute"
h2.style.top = "100px"
h2.style.left = "100px"

document.getElementById("heading").appendChild(h2);


let x = heading;
let z = text;
let y = 5;

z.style.color = "white"


if (y == 5) {
    console.log("y=5")
    z.style.background = "red"
    z.style.color = "white"
} else {
    console.log("Не равно")
}


document.getElementById('list').onclick = function () {
    list.classList.add("white")
}

document.getElementById('list').ondblclick = function () {
    list.classList.remove("white")
}

document.getElementById('span').addEventListener('copy', span);
document.getElementById('span').addEventListener('click', click);

function span() {
    phone.classList.add("white")
    console.log('Сработало')
}

function click() {
    phone.classList.remove("white")
}

let canv = document.getElementById('cvs').addEventListener('mousedown', ee);

function ee() {
    phone.classList.add("white")
    list.classList.add("white")
}
//---------------------------

let front = document.getElementById("frontText")
let back = document.getElementById("backText")
front.addEventListener("click", turn)
front.addEventListener("dblclick", turnBack)


function turn () {
    front.classList.add("form")
    back.classList.add ("see")
}
function turnBack() {
    front.classList.remove ("form")
    back.classList.remove ("see")
}
//--------------------------------------------






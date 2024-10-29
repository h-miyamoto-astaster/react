let btn01 = document.getElementById("btn01");
let random = Math.floor( Math.random() * 7 );

let oldman =[
    {
        id:1,
        classList:"oldman",
        power:0
    },
    {
        id:2,
        classList:"oldman02",
        power:0,
    },
    {
        id:3,
        classList:"oldman03",
        power:3,
    },
    {
        id:4,
        classList:null,
        power:0,
    },
    {
        id:5,
        classList:null,
        power:0,
    },
    {
        id:6,
        classList:null,
        power:0,
    }
];

let princess =[
    {
        id:1,
        classList:"princess01",
        power:0
    },
    {
        id:2,
        classList:"princess02",
        power:0,
    },
    {
        id:3,
        classList:"princess03",
        power:3,
    },
    {
        id:4,
        classList:null,
        power:0,
    },
    {
        id:5,
        classList:null,
        power:0,
    },
    {
        id:6,
        classList:null,
        power:0,
    }
];
let diceList = [oldman,princess];
let dicerandam = Math.floor( Math.random() * diceList.length );
function init(){
    let enemyArea = document.getElementById("enemyarea");
    let cardElement = document.createElement("div");
    cardElement.className = "dice01 princess";
    cardElement.textContent = "テスト";
    enemyArea.appendChild(cardElement);
    
}
function set(){
    let myArea = document.getElementById("myarea");
    myArea.textContent = "";
    let cardElement = document.createElement("div");
    cardElement.className = "dice01 oldman";
    myArea.appendChild(cardElement);
}
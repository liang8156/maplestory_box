var ul = document.getElementById('ul');
var inputs = document.getElementsByTagName('input');
var x = 0, y = 0;
function run(index) {
    ul.style.webkitTransition = 'transform 3s linear';  //設置立方體變換的屬性、持續時間、動畫類型
    switch (index) {
        case 'top': x += 90;
            break;
        case 'right': y += 90;
            break;
        case 'left': y -= 90;
            break;
        case 'bot': x -= 90;
            break;
        case 'reset':
            x = 0; y = 0;    //迅速轉回初始狀態
            ul.style.webkitTransition = 'transform 0.1s linear';
            break;
        case '1':
            x = -90; y = 0;
            ul.style.webkitTransition = 'transform 0.1s linear';
            break;
        case '2':
            x = 90; y = 0;
            ul.style.webkitTransition = 'transform 0.1s linear';
            break;
        case '3':
            x = 0; y = -90;
            ul.style.webkitTransition = 'transform 0.1s linear';
            break;
        case '4':
            x = 0; y = 90;
            ul.style.webkitTransition = 'transform 0.1s linear';
            break;
        case '5':
            x = 0; y = -180;
            ul.style.webkitTransition = 'transform 0.1s linear';
            break;
        case '6':
            x = 0; y = 0;
            ul.style.webkitTransition = 'transform 0.1s linear';
            break;
    }
    ul.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";    //變換效果（沿X軸和Y軸旋轉）
}
////////////////////////鍵盤控制    
document.addEventListener('keydown', function (e) {
    ul.style.webkitTransition = 'transform 3s linear';
    switch (e.keyCode) {
        case 37: y -= 90;    //左
            break;
        case 38: x += 90;    //上
            break;
        case 39: y += 90;    //右
            break;
        case 40: x -= 90;    //下
            break;
        case 13: x = 0; y = 0;    //迅速轉回初始狀態
            ul.style.webkitTransition = 'transform 0.1s linear';
            break;
    }
    ul.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)"; //變換效果（沿X軸和Y軸旋轉）
}, false);

function down(e) {
    var e = e || window.event;
    x1 = e.clientX;
    y1 = e.clientY;
    document.onmousemove = move;
    document.onmouseup = up;
    console.log("x1,y1", x1, y1)
}
function move(e) {
    var e = e || window.event;
    var x2 = e.clientX;
    var y2 = e.clientY;

    console.log("x2,y2", x2, y2)
    ul.style.webkitTransition = 'transform 0s linear';
    y += (x2 - x1) * 0.1; // x軸的差為旋轉y軸
    x += -(y2 - y1) * 0.1; // y軸的差為旋轉x軸
    console.log("x,y", x, y)
    ul.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";

}
function up() {
    document.onmousemove = null;
    document.onmouseup = null;
}
document.onmousedown = down;

let buttonElement = ["top", "bot", "left", "right", "reset"]
let buttonElementName = ["上", "下", "左", "右", "重置"]
for (let i = 0; i < buttonElement.length; i++) {
    console.log(buttonElement[i])
    var calelem = document.createElement("button");
    calelem.setAttribute("class", "button" + buttonElement[i]);
    calelem.setAttribute('onclick', "run('" + buttonElement[i] + "')");
    calelem.innerHTML = buttonElementName[i];
    document.getElementById("operationButton").appendChild(calelem);
}

for (let i = 1; i <= 6; i++) {
    console.log(i)
    var a = document.createElement("li");
    a.setAttribute('onclick', "run('" + i + "')");
    a.innerHTML = +i;
    document.getElementById("ul").appendChild(a);
}
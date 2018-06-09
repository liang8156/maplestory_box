let selectingBC = "#5599FF";
let potential = ["攻擊BOSS怪物時傷害-30%", "攻擊BOSS怪物時傷害-20%", "攻擊BOSS怪物時傷害-40%"]
let potential6to3Box = [];
let buttonElement = ["使用", "取消", "確認"];
let usingBoxTiming = ["usingBoxBefore", "usingBoxAfter"]
let armsPotentialDataBasis = ["STR:+13%", "STR:+10%", "DEX:+13%", "DEX:+10%",
    "LUK:+13%", "LUK:+10%", "INT:+13%", "INT:+10%", "暴擊機率:+13%", "暴擊機率:+10%",
    "全屬性:+10%", "全屬性:+7%", "物理攻擊力:+13%", "物理攻擊力:+10%", "魔法攻擊力:+13%",
    "魔法攻擊力:+10%", "總傷害:+13%", "總傷害:+10%", "無視怪物防禦力:+30%", "無視怪物防禦力:+30%",
    "無視怪物防禦力:+40%", "攻擊BOSS怪物時傷害:+40%", "攻擊BOSS怪物時傷害:+35%",
    "攻擊BOSS怪物時傷害:+30%", "攻擊BOSS怪物時傷害:+20%"]

for (let i = 0; i < usingBoxTiming.length; i++) {
    let DIV = document.createElement("div");
    DIV.setAttribute('id', usingBoxTiming[i]);
    document.getElementById("operationButton").appendChild(DIV);
}

for (let i = 0; i < buttonElement.length; i++) {
    var BUTTON = document.createElement("button");
    // calelem.setAttribute("class", "button" + buttonElement[i]);
    BUTTON.innerHTML = buttonElement[i];
    BUTTON.setAttribute('onclick', "run('" + buttonElement[i] + "')");
    BUTTON.setAttribute('id', buttonElement[i]);
    if (buttonElement[i] === "確認") {
        document.getElementById("usingBoxAfter").appendChild(BUTTON);
        document.getElementById("usingBoxAfter").style.display = "none"
    } else {
        document.getElementById("usingBoxBefore").appendChild(BUTTON);
        document.getElementById("使用").disabled = true
    }
}


function run(index) {
    switch (index) {
        case '使用': console.warn(index)
            let choicePotential = [];
            document.getElementById("確認").disabled = true;
            document.getElementById("usingBoxBefore").style.display = "none"
            document.getElementById("usingBoxAfter").style.display = "inline"
            for (let i = 0; i < 6; i++) {
                choicePotential[i] = armsPotentialDataBasis[getRandom(armsPotentialDataBasis.length)];
            }
            document.getElementById("potentialBox").innerHTML = ""
            potential = []
            potential6to3Box = []
            for (let i = 0; i < choicePotential.length; i++) {
                var calelem = document.createElement("div");
                // calelem.setAttribute("class", "button" + buttonElement[i]);
                calelem.setAttribute('onclick', "choice6to3(this)");
                calelem.setAttribute('id', "choicePotentialList" + i);
                calelem.innerHTML = choicePotential[i];
                document.getElementById("potentialBox").appendChild(calelem);
            }
            break;
        case '取消': console.warn(index);
            document.getElementById("potentialBox").innerHTML = ""
            document.getElementById("使用").disabled = true
            document.getElementById("figure").innerHTML = ""
            document.getElementById("mybarEquipment").style.display = "inline"
            break;
        case '確認': console.warn(index);
            document.getElementById("usingBoxBefore").style.display = "inline"
            document.getElementById("usingBoxAfter").style.display = "none"
            for (let i = 0; i < potential6to3Box.length; i++) {
                potential[i] = document.getElementById(potential6to3Box[i]).innerHTML
            }
            document.getElementById("potentialBox").innerHTML = ""
            for (let i = 0; i < potential.length; i++) {
                var calelem = document.createElement("div");
                calelem.innerHTML = potential[i];
                document.getElementById("potentialBox").appendChild(calelem);
            }
            break;
    }
}
function getRandom(x) {
    return Math.floor(Math.random() * x);
};
function choice6to3(content) {
    if (potential6to3Box.indexOf(content.id) != -1) {
        potential6to3Box.splice(potential6to3Box.indexOf(content.id), 1);
        document.getElementById(content.id).style.background = "";
    } else if (potential6to3Box.length < 3) {
        potential6to3Box = potential6to3Box.concat(content.id)
        document.getElementById(content.id).style.background = selectingBC;
    }
    if (potential6to3Box.length != 3) {
        document.getElementById("確認").disabled = true;
    } else {
        document.getElementById("確認").disabled = false;
    }
}
function choiceProps() {
    document.getElementById("mybarEquipment").style.display = "none"
    document.getElementById("使用").disabled = false
    var IMG = document.createElement("IMG");
    IMG.setAttribute("src", "image/200雙弩.png");
    IMG.setAttribute("id", "usingEquipment");
    document.getElementById("figure").appendChild(IMG);
    for (let i = 0; i < potential.length; i++) {
        var calelem = document.createElement("div");
        calelem.innerHTML = potential[i];
        document.getElementById("potentialBox").appendChild(calelem)
    }
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 73 || e.keyCode === 105) {
        if (document.getElementById("mybar").style.display == "inline") {
            document.getElementById("mybar").style.display = "none"
        } else {
            document.getElementById("mybar").style.display = "inline"
        }
    }
});
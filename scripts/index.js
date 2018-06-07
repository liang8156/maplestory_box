let selectingBC = "#CCDDFF";
let potential = ["攻擊BOSS怪物時傷害-30%", "攻擊BOSS怪物時傷害-20%", "攻擊BOSS怪物時傷害-40%"]
let potential6to3Box = [];
let buttonElement = ["使用", "取消", "確認"];
let usingBoxTiming = ["usingBoxBefore", "usingBoxAfter"]
let armsPotentialDataBasis = ["STR:+12%", "STR:+9%", "DEX:+12%", "DEX:+9%",
    "LUK:+12%", "LUK:+9%", "攻擊BOSS怪物時傷害+40%", "攻擊BOSS怪物時傷害+35%", "攻擊BOSS怪物時傷害+30%",
    "攻擊BOSS怪物時傷害+20%"]

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
    } else {
        document.getElementById("usingBoxBefore").appendChild(BUTTON);
    }
}

for (let i = 0; i < potential.length; i++) {
    var calelem = document.createElement("div");
    // calelem.setAttribute("class", "button" + buttonElement[i]);
    //calelem.setAttribute('onclick', "run('" + buttonElement[i] + "')");
    calelem.innerHTML = potential[i];
    document.getElementById("potentialBox").appendChild(calelem);
}

function run(index) {
    switch (index) {
        case '使用': console.warn(index)
            let choicePotential = [];
            document.getElementById("確認").disabled = true;
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
            let ab = document.getElementById('choicePotentialList5').innerHTML
            console.warn("ab", ab)
            break;
        case '確認': console.warn(index);
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
    console.warn(content.id)
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
    console.warn("potential6to3Box", potential6to3Box)
}
function run(index) {
    switch (index) {
        case '使用': console.warn(index)
            let choicePotential = [];
            for (let i = 0; i < 6; i++) {
                choicePotential[i] = armsPotentialDataBasis[getRandom(armsPotentialDataBasis.length)];
            }
            document.getElementById("potentialBox").innerHTML = ""
            potential = []
            for (let i = 0; i < choicePotential.length; i++) {
                var calelem = document.createElement("div");
                // calelem.setAttribute("class", "button" + buttonElement[i]);
                calelem.setAttribute('onclick', "choice6to3(this)");
                calelem.setAttribute('id', choicePotential[i]);
                calelem.innerHTML = choicePotential[i];
                document.getElementById("potentialBox").appendChild(calelem);
            }

            break;
        case '取消': console.warn(index);
            break;
        case '確認': console.warn(index);
            break;
    }
}
function getRandom(x) {
    return Math.floor(Math.random() * x);
};
function choice6to3(test) {
    console.warn(test.id)
    console.warn("choice6to3")
    console.log(potential.indexOf(test.id));
    potential = potential.concat(test.id)
    console.warn("potential", potential)
}
////////////////////////鍵盤控制    
let potential = ["攻擊BOSS怪物時傷害-30%", "攻擊BOSS怪物時傷害-20%", "攻擊BOSS怪物時傷害-40%"]
let armsPotentialDataBasis = ["STR:+12%", "STR:+9%", "DEX:+12%", "DEX:+9%",
    "LUK:+12%", "LUK:+9%", "攻擊BOSS怪物時傷害+40%", "攻擊BOSS怪物時傷害+35%", "攻擊BOSS怪物時傷害+30%",
    "攻擊BOSS怪物時傷害+20%"]


for (let i = 0; i < potential.length; i++) {
    var calelem = document.createElement("div");
    // calelem.setAttribute("class", "button" + buttonElement[i]);
    //calelem.setAttribute('onclick', "run('" + buttonElement[i] + "')");
    calelem.innerHTML = potential[i];
    document.getElementById("potentialBox").appendChild(calelem);
}

let buttonElement = ["使用", "取消", "確認"];
for (let i = 0; i < buttonElement.length; i++) {
    var calelem = document.createElement("button");
    // calelem.setAttribute("class", "button" + buttonElement[i]);
    calelem.setAttribute('onclick', "run('" + buttonElement[i] + "')");
    calelem.innerHTML = buttonElement[i];
    document.getElementById("operationButton").appendChild(calelem);
}
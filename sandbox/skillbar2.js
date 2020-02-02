//Enter maximum number of skillpoints
var num_skillpoints = 8;
var id_prefix = "skillbar_";

for (var r = 0; r < 2; r++) {
    //Set skillbar ID and class
    var skillbar_id = id_prefix.concat(r+1);
    var skillbar = document.createElement("DIV");
    skillbar.setAttribute("id", skillbar_id);
    skillbar.setAttribute("class", "skillbar");

    //Insert skillbar in skillgrid
    document.getElementById("skillgrid2").appendChild(skillbar);

    //Generate filled skillpoints
    for(var skillpoint = 0; skillpoint < num_skillpoints; skillpoint++) {
        var filled = document.createElement("BUTTON");
        filled.setAttribute("class", "unfilled_skillpoint");

        filled.addEventListener("click", setSkillLevel);

        document.getElementById(skillbar_id).appendChild(filled);
        
    }
}

function setSkillLevel() {
    alert("hellllllooooooooo");

}

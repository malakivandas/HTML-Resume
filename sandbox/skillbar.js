//Enter maximum number of skillpoints
var num_skillpoints = 7;

//Enter skill levels with position corresponding to order on HTML document
//(Size of array will be number of rows)
var skill_levels = [6, 3, 2, 2, 4, 5, 6, 2, 2]

var id_prefix = "skillbar_";

//Generate skillbars
for (var r = 0; r < skill_levels.length; r++) {

    //Set skillbar ID and class
    var skillbar_id = id_prefix.concat(r+1);
    var skillbar = document.createElement("DIV");
    skillbar.setAttribute("id", skillbar_id);
    skillbar.setAttribute("class", "skillbar");

    //Insert skillbar in skillgrid
    document.getElementById("skillgrid").appendChild(skillbar);

    //Generate filled skillpoints
    for(var skillpoint = 0; skillpoint < skill_levels[r]; skillpoint++) {
        var filled = document.createElement("DIV");
        filled.setAttribute("class", "filled_skillpoint");
        document.getElementById(skillbar_id).appendChild(filled);
    }

    //Generate unfilled skillpoints
    while (skillpoint < num_skillpoints) {
        var unfilled = document.createElement("DIV");
        unfilled.setAttribute("class", "unfilled_skillpoint");
        document.getElementById(skillbar_id).appendChild(unfilled);
        skillpoint++;
    }
}
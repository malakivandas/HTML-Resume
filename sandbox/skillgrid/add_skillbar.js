function add_skillbar(num_skillpoints) {

    //Generate skillbar ID
    id_prefix = "skillbar_"
    id_number = last_skillbar + 1;
    var skillbar_id = id_prefix.concat(id_number);
    console.log(skillbar_id);

    //Create div and set id
    var skillbar = document.createElement("DIV");
    skillbar.setAttribute("id", skillbar_id);
    skillbar.setAttribute("class", "skillbar");

    //Insert skillbar in skillgrid
    document.getElementById("skillgrid").appendChild(skillbar);

    //Insert label

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
function add_skillbar(num_skillpoints) {

    //Generate skillbar ID
    id_prefix = "skillbar_"
    id_number = last_id_number() + 1;
    var skillbar_id = id_prefix.concat(id_number);
    console.log(skillbar_id);

    //Create div and set id
    var skillbar = document.createElement("DIV");
    skillbar.setAttribute("id", skillbar_id);
    skillbar.setAttribute("class", "skillbar");

    //Insert skillbar in skillgrid
    document.getElementById("skillgrid").appendChild(skillbar);

    //Insert input element
    var skill_label = document.createElement("INPUT");
    skill_label.setAttribute("class", "skill_label");
    document.getElementById(skillbar_id).appendChild(skill_label);
    

    //Generate unfilled skillpoints
    for(var idx = 0; idx < num_skillpoints; idx++) {
        var skillpoint = document.createElement("BUTTON");
        skillpoint.setAttribute("class", "unfilled_skillpoint");
        skillpoint.setAttribute("id", "skillpoint_".concat(id_number, "_", idx+1));

        console.log(skillpoint.value);

        skillpoint.addEventListener("click", setSkillLevel);

        document.getElementById(skillbar_id).appendChild(skillpoint);
    }

}

function setSkillLevel() {

    alert("hellllllooooooooo");

}
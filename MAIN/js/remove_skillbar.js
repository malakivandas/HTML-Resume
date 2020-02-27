function remove_skillbar () {

    //Generate skillbar ID
    id_prefix = "skillbar_";
    id_number = last_skillbar();
    var skillbar_id = id_prefix.concat(id_number);

    var skillbar = document.getElementById(skillbar_id);
    skillbar.parentElement.removeChild(skillbar);

}
function set_skillpoints(skillpoint_id, skillpoint_class) {

    //Display inputs
    console.log(skillpoint_id);
    console.log(skillpoint_class);

    //Extract numbers for looping
    var skillbar_number = Number(skillpoint_id.slice(skillpoint_id.indexOf('_') + 1, skillpoint_id.lastIndexOf('_')));
    var skillpoint_number = Number(skillpoint_id.substr(skillpoint_id.lastIndexOf('_') + 1));
    var num_skillpoints = $("#skillbar_1 > button").length;

    //Display numbers for looping
    console.log(skillbar_number);
    console.log(skillpoint_number);
    console.log(num_skillpoints);


    if(skillpoint_class == 'unfilled_skillpoint') {

        //Loop through all skillpoints behind clicked and change unfilled to halffilled
        for(var idx = 0; idx < skillpoint_number; idx++) {

            var skillpoint = document.getElementById('skillpoint_'.concat(skillbar_number, '_', idx + 1));

            if(skillpoint.className == 'unfilled_skillpoint') {
                skillpoint.setAttribute('class', 'halffilled_skillpoint');
            }
        } 
    }

    if(skillpoint_class == 'halffilled_skillpoint') {

        //Loop through all skillpoints behind clicked and change all to filled
        for(var idx = 0; idx < skillpoint_number; idx++) {

            var skillpoint = document.getElementById('skillpoint_'.concat(skillbar_number, '_', idx + 1));

            skillpoint.setAttribute('class', 'filled_skillpoint');
        }
    }

    if(skillpoint_class == 'filled_skillpoint') {

        //Loop through all skillpoints ahead clicked and change all to unfilled
        for(var idx = num_skillpoints; idx > skillpoint_number - 1; idx--) {

            console.log(idx);
            var skillpoint = document.getElementById('skillpoint_'.concat(skillbar_number, '_', idx));

            skillpoint.setAttribute('class', 'unfilled_skillpoint');
        }
    }

}
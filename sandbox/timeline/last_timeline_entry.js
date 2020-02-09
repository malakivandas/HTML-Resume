function last_timeline_entry() {

    //Get the last skillbar's id number
    var last_id_number = $("#timeline_entries > div").length;
    console.log(last_id_number);

    return last_id_number;

}
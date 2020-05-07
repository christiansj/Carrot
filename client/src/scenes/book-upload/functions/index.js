export function getCheckedNames(){

    var scrollBox = document.getElementById("genre-checkbox-scroll")
    var inputs = Array.from(scrollBox.getElementsByTagName("input"));
    var checkedInputs = inputs.filter(elem => elem.checked === true);
    var genreNames = []

    for(var i = 0; i < checkedInputs.length; i++){
        console.log(checkedInputs[i])
        genreNames.push(checkedInputs[i].name);
    }
    return genreNames;
}
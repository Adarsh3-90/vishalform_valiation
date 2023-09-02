function seterror(id, error) {
    var element = document.getElementById(id + "_error");
    element.innerHTML = error;
}

function validateFirstName() {
    var name = document.forms['myform']["first_name"].value;

    if (name.length < 5) {
        seterror("first_name", "vishal your input Character is too small and short");
    } else {
        seterror("first_name", "");
    }
}

function validateForm() {
    var name = document.forms['myform']["first_name"].value;

    if (name.length < 5) {
        seterror("first_name", "Character is too small and short");
        return false;
    }

    return true;
}
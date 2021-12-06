function checkNameLength(){
    var first_name = document.getElementById('firstname');
    var last_name = document.getElementById('lastname');
    
    if (first_name.value.length < 5) {
        alert('First name must be longer than 5 characteers');
        return false;
    }
   
    if (last_name.value.length < 5) {
        alert('Last name must be longer than 5 characteers');
        return false;
    }
}
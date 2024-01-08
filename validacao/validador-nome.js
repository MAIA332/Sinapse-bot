let validationBody = {"name":"Lucas","score":1,"namesFound":[]}

function run(validationBody){
    if( validationBody.score == 1){
        
        return true;  
    }
    else{
        return false;
    }
}

console.log(run(validationBody));
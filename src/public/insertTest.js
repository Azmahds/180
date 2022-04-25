
    
    test("player Incorrect String Entry", () => {
        var val = playerName("123");
        var exp = "incorrect";
        expect(exp).tobe(val);
    });

    test("Correct Player Input", () => {
        var val = playerName("Jason");
        var exp = "Jason";
        expect(val).tobe(exp);
    });

    test("Correct TeamID Input", () => {
        var val = playerName("12345");
        var exp = "12345";
        expect(val).tobe(exp);
    });

    test("Incorrect Player_ID", () => {
        var val = playerName("Jack");
        var exp = "incorrect";
        expect(exp).tobe(val);
    });


    test("Correct Overall Output", () => {
        var val = insertDataName("Jack, 1234, 5678, 2019");
        var exp = ("Jack, 1234, 5678, 2019");
        expect(exp).tobe(val);
    });

    function playerName(val){
        if(typeof val == 'string' ){
            var nName = val;
            return nName;
            }
        else{
            
            return "incorrect";
        }
    }
    function teamID(val2){
        if(typeof val2 == 'number'){
            var nTID = val2;
            return nTID;
        }
        else{
            return "incorrect";
        }
    }
    
    function Player_ID(val3){
        if(typeof val3 == 'number'){
            var nPID = val3;
            return nPID;
        }   
        else{
           return "incorrect";
        }
    }
    
    function Team_Season(val4){
        if(typeof val4 == 'number'){
            var nSeason = val4;
            return nSeason; 
        }
        else{
            return "incorrect";
        }
    }
    
    function insertDataName(val1, val2, val3, val4) {
    if(val1 == "" || val2 == "" || val3 == "" || val4 == ""){
        return "incorrect";
    }
    else{
        return (val1, val2, val3, val4);
    }
} 



















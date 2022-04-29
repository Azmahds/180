window.addEventListener("load", (e) => {
    var col1 = document.getElementById("Col1");
    var col2 = document.getElementById("Col2");
    var col3 = document.getElementById("Col3");
    var col4 = document.getElementById("Col4");
    var col5 = document.getElementById("Col5");

    var c1, c2, c3, c4, c5;

    c1 = c2 = c3 = c4 = c5 = true;

    col1.addEventListener("mouseover", () => {
        col1.style = "background-color: white;"
        hover(col1); 
    });

    col2.addEventListener("mouseover", () => {
        col2.style = "background-color: white;" 
        hover(col2); 
    });

    col3.addEventListener("mouseover", () => {
        col3.style = "background-color: white;" 
        hover(col3); 
    });

    col4.addEventListener("mouseover", () => {
        col4.style = "background-color: white;" 
        hover(col4); 
    });

    col5.addEventListener("mouseover", () => {
        col5.style = "background-color: white;"
        hover(col5);  
    });

    
    col1.addEventListener("click", () => {
        sort(col1, c1);
        c1 = !c1;
    });
    col2.addEventListener("click", () => {
        sort(col2, c2);
        c2 = !c2;
    });
    col3.addEventListener("click", () => {
        sort(col3, c3);
        c3 = !c3; 
    });
    col4.addEventListener("click", () => {
        sort(col4, c4);
        c4 = !c4;
    });
    col5.addEventListener("click", () => {
        sort(col5, c5);
        c5 = !c5;
    });
});

function hover(col) {
    col.addEventListener("mouseout", () => {
        col.style.backgroundColor = "" 
    });
}

function sort(col, lowOrHigh) {
    var body = document.getElementById("body");
    var col1 = document.getElementById("Col1");
    var col2 = document.getElementById("Col2");
    var col3 = document.getElementById("Col3");
    var col4 = document.getElementById("Col4");
    var col5 = document.getElementById("Col5");

    if(col == col1){
        $('tbody').each(function(){
            var list = $(this).children('tr');
            var tmp = list.get().sort(function(a,b) {
                var n1 = a.children[0].innerHTML;
                var n2 = b.children[0].innerHTML;
                return n1 - n2;
            });
            if(lowOrHigh){
                $(this).html(tmp)
            }else{
                $(this).html(tmp.reverse());
            }
        });
    }
    else if(col == col2){
        $('tbody').each(function(){
            var list = $(this).children('tr');
            var tmp = list.get().sort(function(a,b) {
                const n1 = a.children[1].innerHTML.toUpperCase();
                const n2 = b.children[1].innerHTML.toUpperCase();

                if(n1 < n2){return -1;}
                else if(n1 > n2){return 1;}
                else{return 0;}
            });
            if(lowOrHigh){
                $(this).html(tmp)
            }else{
                $(this).html(tmp.reverse());
            }
        });
    }
    else if(col == col3){
        $('tbody').each(function(){
            var list = $(this).children('tr');
            var tmp = list.get().sort(function(a,b) {
                var n1 = a.children[2].innerHTML;
                var n2 = b.children[2].innerHTML;
                return n1 - n2;
            });
            if(lowOrHigh){
                $(this).html(tmp)
            }else{
                $(this).html(tmp.reverse());
            }
        });
    }
    else if(col == col4){
        $('tbody').each(function(){
            var list = $(this).children('tr');
            var tmp = list.get().sort(function(a,b) {
                var n1 = a.children[3].innerHTML;
                var n2 = b.children[3].innerHTML;
                return n1 - n2;
            });
            if(lowOrHigh){
                $(this).html(tmp)
            }else{
                $(this).html(tmp.reverse());
            }
        });
    }
    else if(col == col5){
        $('tbody').each(function(){
            var list = $(this).children('tr');
            var tmp = list.get().sort(function(a,b) {
                var n1 = a.children[4].innerHTML;
                var n2 = b.children[4].innerHTML;
                return n1 - n2;
            });
            if(lowOrHigh){
                $(this).html(tmp)
            }else{
                $(this).html(tmp.reverse());
            }
        });
    }
    
}

function reverseArr(arr){
    $('tbody').each(function(){
        var list = $(this).children('tr');
        $(this).html(list.get().reverse())
        console.log(list.get())
    });
}
var $=function(id) { return document.getElementById(id); };

var search = [ // Search Engines
    ["", "https://duckduckgo.com/html/?q="], // DuckDuckGo (Default)
    ["!g", "https://www.google.com/search?q="], // Google
    // ["!a", "http://myanimelist.net/search/all?q="], // MyAnimeList
    ["!i", "https://www.google.co.uk/search?tbm=isch&q="], // Google Images
    ["!y", "https://www.youtube.com/results?search_query="], // YouTube
    ["!w", "http://en.wikipedia.org/w/index.php?search="], // Wikipedia
    // ["!n", "http://www.nyaa.se/?page=search&term="] //Nyaa
    ["!t", "https://translate.google.com/#auto/pt/"]
];

var i,ss="";
function init() {
    for(i=0;i<search.length;i++) if(search[i][0]=="") ss=search[i][1];
    if(ss=="") alert("Error: Missing default search engine!");
    startTime();
}

function handleQuery(e,q) { // Handle search query
    var key=e.keyCode || e.which;
 
    if(key==13) { // Enter
        //var x=q.lastIndexOf("!");
        var x=q.indexOf("!");
 
        //if(x!=-1 && x>=q.length-2) {
        if(x==0) {
            for(var i=0;i<search.length;i++) {
                //if(search[i][0]==q.substr(x)) { // Find "*!i"
                if(search[i][0]==q.substr(0,2)) { // Find "!i*"
                    //window.open(search[i][1]+q.substr(0,x).replace(/&/g,"%26"));
                    window.open(search[i][1]+q.substr(2).replace(/&/g,"%26"));
 
                    $('q').value="";
                    $('q').focus();
                    return true;
                }
            }
            // Invalid "!i", use default
            //window.open(ss+q.substr(0,x).replace(/&/g,"%26"));
            window.open(ss+q.substr(2).replace(/&/g,"%26"));
        } else {
            // "!i" where not specified, use default
            window.open(ss+q.replace(/&/g,"%26"));
        }
 
        $('q').value="";
        $('q').focus();
    }
}

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h+":"+m+":"+s;
    /*var t = setTimeout(function(){startTime()},500); */
    var today2 = new Date().getHours();
    
    /////////////////////////////////////
    /////////////////////////////////////
    /////////////////////////////////////
    //I could have done the following code with very less lines but it didn't worked at first and I didn't wanted to bother myself with this.
    //If anyone wants to tell me how to make it the right way I am open for it.
    /////////////////////////////////////
    /////////////////////////////////////
    /////////////////////////////////////
    
    if (today2 == 6) {
        document.getElementById("text").innerHTML = "Good morning";
    }

    else if (today2 == 7) {
        document.getElementById("text").innerHTML = "Good morning";
    }

     else if (today2 == 8) {
        document.getElementById("text").innerHTML = "Good morning";
    }

     else if (today2 == 9) {
        document.getElementById("text").innerHTML = "Good morning";
    }

     else if (today2 == 10) {
        document.getElementById("text").innerHTML = "Good morning";
    }

     else if (today2 == 11) {
        document.getElementById("text").innerHTML = "Good morning";
    }

    else if (today2 == 12) {
        document.getElementById("text").innerHTML = "Good afternoon";
    }
    else if (today2 == 13) {
        document.getElementById("text").innerHTML = "Good afternoon";
    }
    else if (today2 == 14) {
        document.getElementById("text").innerHTML = "Good afternoon";
    }
    else if (today2 == 15) {
        document.getElementById("text").innerHTML = "Good afternoon";
    }
    else if (today2 == 16) {
        document.getElementById("text").innerHTML = "Good afternoon";
    }

    else if (today2 == 17) {
        document.getElementById("text").innerHTML = "Good evening";
    }
    else if (today2 == 18) {
        document.getElementById("text").innerHTML = "Good evening";
    }
     else if (today2 == 19) {
        document.getElementById("text").innerHTML = "Good evening";
    }
    else if (today2 == 20) {
        document.getElementById("text").innerHTML = "Good night";
    }
    else if (today2 == 21) {
        document.getElementById("text").innerHTML = "Good night";
    }
    else if (today2 == 22) {
        document.getElementById("text").innerHTML = "Good night";
    }
    else if (today2 == 23) {
        document.getElementById("text").innerHTML = "Good night";
    }
    else if (today2 == 0) {
        document.getElementById("text").innerHTML = "Good night";
    }
    else if (today2 == 1) {
        document.getElementById("text").innerHTML = "Good night";
    }
    else if (today2 == 2) {
        document.getElementById("text").innerHTML = "Good night";
    }
    else if (today2 == 3) {
        document.getElementById("text").innerHTML = "Good night";
    }
    else if (today2 == 4) {
        document.getElementById("text").innerHTML = "Good night";
    }
    else if (today2 == 5) {
        document.getElementById("text").innerHTML = "Good night";
    }
    setTimeout(function(){startTime()}, 500)
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

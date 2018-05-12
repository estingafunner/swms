function optLbl(x){
	var x;
	var opt = document.getElementById("opt" + x);

	if (opt.checked == true){
		opt.checked = false;
	}
	else{
		opt.checked = true;

	}
checkDone();

}

function checkDone(){
	//var clear = x;
	var progress = false;

	var x = document.getElementById("doneButton");
        var msisdn = document.getElementById("msisdn");
	if (msisdn.value != ""){
	    progress = true;
	}

	for (var i = 1; i <= 7; i++) {
        var opt = document.getElementById("opt" + i);
	
        if (opt.checked == true) {
	    progress = true;
            
        }
    }

if (progress == true){
        x.style.display = "block";
    } else {
        x.style.display = "none";
}

}

function clearRep() {

    for (var i = 1; i <= 7; i++) {
        var opt = document.getElementById("opt" + i);
        var msisdn = document.getElementById("msisdn");
	
        if (opt.checked == true || msisdn.value != "") {

            opt.checked = false;
            msisdn.value = "";
checkDone();
        }
checkDone();
    }
checkDone();

}



function linkGC() {
    var x = document.getElementById("msisdn").value;
    console.log(x);
    var y = "https://grandcentral.t-mobile.com/?msisdn=" + x;
    window.open(y);

}



function login() {

    var y = "file:///S:/Customer%20Care/SWMS%20inc/4-00_yrs/HTML/ts_setup.htm";
    window.open(y, "_self");

}

/*
function status() {
    var msisdn = document.getElementById("msisdn").value;
    var user = document.getElementById("NT").value; =

    for (i = 0; i <= 7; i++) {
        var opt = document.getElementById("opt" + i).checked;
        var prog;
        if (opt = true) {
            prog = prog + 1;
        }

    }

}
*/


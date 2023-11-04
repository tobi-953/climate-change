function calculate(){
    var a = document.getElementById('electricity').value;
    var b = document.getElementById('gas').value;
    var c = document.getElementById('oil').value;
    var d = document.getElementById('mileage').value;
    var e = document.getElementById('flight-less').value;
    var f = document.getElementById('flight-more').value;
    var g = document.getElementById('newspaper').value;
    var h = document.getElementById('aluminium').value;
    var electricity = a *105;
    var gas = b * 105;
    var oil = c * 113;
    var mileage = d * 79;
    var fless = e * 1100;
    var fmore = f * 4400;
    if (g = true){
       var newspaper = 0;
    }
    else{
        var newspaper = 184
    }
    if (h = true){
        var aluminium = 0;
    }
    else{
        var aluminium = 166;
    }
    var result = electricity + gas + oil + mileage + fless + fmore + newspaper + aluminium;
    alert('Your carbon footprint is : ' + result +'pounds');
}


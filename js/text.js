function myFunc()
{
    var fstname = document.getElementById("firstname").value;
    var lstname = document.getElementById("lastname").value;
    
    document.getElementById("result").innerHTML = fstname+" "+lstname;//Here we can also use concat() bt still it is not working?
}

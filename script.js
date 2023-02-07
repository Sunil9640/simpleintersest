function compute()
{
   
   var p = parseInt(document.getElementById("principal").value);
   var rate= parseInt(document.getElementById("rate").value);
   let year=parseInt(document.getElementById("years").value);
    simple_interest=p*year*rate/100;
    alert("simple Interest : "+ simple_interest);

    
}
        
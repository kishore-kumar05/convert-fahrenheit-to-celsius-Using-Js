function sample()
{
    let a , b;
    a=Number(document.getElementById("get").value)
    b=(a-32)*5/9
    document.getElementById("show").innerHTML=b
}
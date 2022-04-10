function swap(){
    var num1, num2,temp;
    num1 = Number(document.getElementById("N1").value);
    num2 = Number(document.getElementById("n2").value);

    temp=num1;
    num1=num2;
    num2=temp;
    document.write("Number 1 is now =" +num1);
    document.write("<br>");
    document.write("Number 2 is now =" +num2);
}
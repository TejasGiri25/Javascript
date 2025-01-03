const a=Number(prompt('Enter the marks of English out of 50:'));
const b=Number(prompt('Enter the marks of Maths out of 50:'));
const c=Number(prompt('Enter the marks of Hindi out of 50:'));
        var d=a/50*100;
        var e=b/50*100;
        var f=c/50*100;
var t=(a+b+c)/150*100;

document.write("Total Percentage = " +t+"% <br>"+"<br>");
        document.write("English Percentage = " +d+"% <br>");
        document.write("Maths Percentage=  "+e+"% <br>");
        
        document.write("Hindi Percentage = "+f+"% <br>"+"<br>");
document.write("All subjects Percentage  = "+  "  A : "+d+"%  B : "+e+"%  C : "+f+"% ");

if(t>=90)
    {
        document.write("Grade A");
    }
else if(t>=80)
    {
        document.write("Grade B");
    }
else if(t>=70)
    {
            document.write("Grade C");
    }
else if(t>=60)
    {
        document.write("Grade D");
    }
else if(t<60) 
    {
        document.write('GRADE E');
    } 
    
document.write('<br> Pass/Fail?');
(t>35) ? (document.write(' <br> Pass')) :  (document.write('Fail'));
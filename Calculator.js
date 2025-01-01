var a=prompt("Enter the value of A:");
            a=Number(a);

            var b=prompt("Enter the value of B:");
            b=Number(b);
            var op=prompt("Select the operation or If you want to see all the OPERATIONS then write All Operations :");

            var c=a+b;

            
            var d=a-b;
            var e=a*b;
            var f=a%b;
            var g=a/b;

            //  var ASMM=(d+"  "+c+" "+e+" "+f+" "+g);
            // alert("Hi, Ans ADD<br>-SUB-MUL-MOD-DIV :- "+ASMM);

            if(op=="+")
            {
                document.write("OPERATION, where  = "+  "  A : "+a+"  B : "+b+"<br>"+"<br>");
                document.write("Addition = " +c+" <br>");
            }
            else if(op=="-")
            {
                document.write("OPERATION, where  = "+  "  A : "+a+"  B : "+b+"<br>"+"<br>");
                document.write("Sub = "+d+" <br>");
            }
            else if(op=="*")
            {
                document.write("OPERATION, where  = "+  "  A : "+a+"  B : "+b+"<br>"+"<br>");
                document.write("Multiplication = "+e+" <br>");
            }
            else if(op=="%")
            {
                document.write("OPERATION, where  = "+  "  A : "+a+"  B : "+b+"<br>"+"<br>");
                document.write("Mod = " +f+" <br>");
            }
            else if(op=="/")
            {
                document.write("OPERATION, where  = "+  "  A : "+a+"  B : "+b+"<br>"+"<br>");
                document.write("Division = " +g+" <br>" );
            }

            else if(op=="All")
            {

                document.write("ALL OPERATIONS, where = " +  "  A : "+a+",  B : "+b+"   "+" <br>"+"<br>");
                document.write("Addition = " +c+" <br>");
                document.write("Sub =  "+d+" <br>");
                document.write("Multiplication = "+e+" <br>");
                document.write("Mod =" +f+" <br>");
                document.write("Division = "+g+" <br>" );
            }
    
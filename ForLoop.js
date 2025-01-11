//(a) Multiplication table using for loop
    
            var m = Number(prompt('Enter the number: '));
            document.write("<br>"+"MULTIPLICATION TABLE OF : "+m+"<br>"+"<br>");
            
            for (let i = 1; i <= 10; i++) 
            {
                document.write("<br>" +m+" * "+i+" = "+m*i );
            }
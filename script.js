//your code here
let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>
{
    button.addEventListener('click',(e)=>{
        let denominator=e.target.innerHTML.split("/");
        console.log(denominator);
        if(e.target.innerHTML== '='){
            string = eval(string);
            document.querySelector('input').value = string;

        }
       else if(e.target.innerHTML== 'Clear'){
            string = "";
            document.querySelector('input').value = string;

        }
        
        else if(e.target.innerHTML == '0/0' ){
            string = "NaN";
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML.substring(e.target.innerHTML.length-1)=='0' ){
            string = "infinity";
            document.querySelector('input').value = string;
        }
        else{

            console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;

        }
        

    })
})
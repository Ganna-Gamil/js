for(let num=0 ;num<10;num++)
{
    if(num/2==0){
        console.log(num)
    }
}
---------------------------------------------------
function multTable (length)
{
    for (let i = 1; i <length; i++) {
        let result='';
        for (let j = 1; j <length; j++) {
          
            result+= (i*j) +'\t';
            
        }
         console.log(result);
    }
}
 multTable(10)
--------------------------------------------------------

function result(num) {
if (num/10==0)) {
    console.log("true")
}
 else {
    console.log("false")
}
}
result(70)
------------------------------------------------------

function StringVowels(String) {
    const vowels = ['a', 'o', 'e', 'i', 'u']
    let count = 0;
    
    for (let i = 0; i < String.length; i++)
     {
        if (vowels.includes(String[i]))
         {
            count++;
        }
    }
    
    return count;
}
const str = "gannaaa";
StringVowels(String);
--------------------------------------------------------------------    

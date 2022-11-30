let strr="madam";
let temp="";
for (let i=strr.length-1; i>=0; i--)
{
    temp+=strr[i];
}

if (temp==strr)
{
    console.log("This is a Palindrome.");
}
else
{
    console.log("This is not a Palindrome.")
}
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const output = document.querySelector("#output-box");

function compareValues(sum , theNumber )
{
    if (sum % theNumber === 0)
    {output.innerText= "your birthday is lucky 🧨" ;
    } else output.innerText= "your birthday is unlucky 🤦‍♂️"  ;
}

function findSum(dob)
{
    dob = dob.replaceAll("-" , "");
    let sum = 0;
    for (let i=0; i<dob.length ; i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function checkBirthDateIsLucky()
{
    const dob = dateOfBirth.value;
const sum = findSum(dob);
if (sum&&dob)
{
compareValues(sum , luckyNumber.value);
}else output.innerText= "Please enter both the fields."  ;

}




checkNumberButton.addEventListener( "click" , checkBirthDateIsLucky)

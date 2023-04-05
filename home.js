///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE
const GreetUser = (username) =>
{
    return(`Welcome back, ${username}`)
}

console.log(GreetUser("Andrew"))

console.log(`---------------------------------------------------`)


//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

//CODE HERE
function CanWeDeliver(ZipCode)
{
    if (deliveryAreaZipCodes.includes(ZipCode)) //To check if the zip code passed into the function, I used .include array-method
    {
        return(`You are in our delivery zone`)
    }
    else
    {
        return(`Sorry, we can't deliver to that address`)
    }
}
// console.log(CanWeDeliver(85206))

/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE
function CanWeDeliverTwo(ZipCode)
{
    for (let i=0; i<= deliveryAreaZipCodes.length; i++)
    {
        if (ZipCode == deliveryAreaZipCodes[i])
        {
            return(`You are in our delivery zone`)
        }
        else
        {
            return(`Sorry, we can't deliver to that address`)
        }
    }
}
console.log(CanWeDeliverTwo(85206))
console.log(`---------------------------------------------------`)

//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE
 function UpdateDiscount(data, OldVal, NewVal)
 {
    data[0].title = data[0].title.replace(OldVal, NewVal)
    return(data)
 }

 console.log(UpdateDiscount(deals, deals[0].title, "10% Off"))
 console.log(`---------------------------------------------------`)
/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE

function UpdateDesc(data, OldVal, NewVal) /*function UpdateDesc takes in an object the old value of the description property and the newly value of the
 description property that and the */
{
    data[1].desc = data[1].desc.replace(OldVal, NewVal) //the function uses a .replace method to replace the value of the description property
    return(data)
}

console.log(UpdateDesc(deals, "March", "April"))
console.log(`---------------------------------------------------`)
///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
const pizza = {
    name: "Margarita",
    price: 26.50,
    category: "Vegetarian",
    popularity: 98,
    rating: 5,
    tags: ["gluten-free","vegetarian","basil","tomato","parmesan"]
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(`The popularity of pizza is ${pizza.popularity}`)

console.log(`---------------------------------------------------`)
//CODE HERE

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(`The second tag in the pizza object is ${pizza.tags[1]}`) //array are zero-indexed, so the SECOND tag has an index of 1

console.log(`---------------------------------------------------`)
//CODE HERE

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
const {price} = pizza
console.log(`The price of pizza is ${price}`)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
const {category} = pizza
console.log(`The category to which pizza pertains is ${category}`)

console.log(`---------------------------------------------------`)
//CODE HERE

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
const foodArr =[
    {
name:"Turkey Sandwich",
price: 11,
category: "sandwich",
popularity: 55,
rating: 10,
tags: ["bread","turkey","breakfast", "tomatoes", "lettuce"]
    },

    {
        name:"Lentil Soup",
        price: 14,
        category: "Soups",
        popularity: 36,
        rating:5,
        tags: ["soup", "legumes", "spicy"]
    },

    {
        name:"Biryani",
        price: 30,
        category: "Main course",
        popularity: 40,
        rating: 17,
        tags: ["rice", "chicken", "Indian cuisine"]
    },

    {
        name:"Carbonara",
        price: 90,
        category: "pasta",
        popularity: 46,
        rating: 19,
        tags: ["pasta", "bacon", "Italian cuisine", "parmesan", "eggs"]
    },

    {
        name:"Garlic pasta",
        price: 15,
        category: "pasta",
        popularity: 39,
        rating: 7,
        tags: ["pasta", "garlic","vegetarian", "cheese", "Italian cuisine", "[parmesan", "cheese", "basil", "olive oil"]       
    }
]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/
function FilterFoodByTag(ArrayParam, tag)
{
let Result = ArrayParam.filter(function(item) //Result is a new array that stores items from the Array Parameter filtered by tag
{
    if (item.tags.includes(tag))
    {
        return item
    }
}) 
return Result   
}

 

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)
console.log(`Products that include rice are:`)
console.log(FilterFoodByTag(foodArr, "rice"))
console.log(`---------------------------------------------------`)
//CODE HERE


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
function FilterByProperty(property, number, type)
{
    let Exp = type
    let Result=[] // Result is an empty array that will store the filtered items
switch(Exp)
{
    case "below": //Instead of if-statements, I decided to use the newly-learned 'case-statements'
        {
Result = foodArr.filter(function(item)
{
    if (item[property] < number)
    {
        return item
    }
})
        }

        break

        case "above":
        {
            Result = foodArr.filter(function(item)
            {
if ( item[property] > number)
{
    return item
}
            })
        }
        break
}
return Result
}


/*
    Invoke the `filterByProperty` function passing
    in a value for each parameter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(`Products whose price exceeds 20 include: `)
console.log(FilterByProperty("price", 20, "below")) //This line of code logs out all products whose price exceeds 20
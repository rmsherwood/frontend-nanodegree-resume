//	$("#main").append("Robert Sherwood");

//	var firstName ="Robert";

//	var age = 29;

//	var awesomeThoughts = "I am Robert and I am AWESOME!";

//	var email ="rmsherwood@udacity.com";

//	var newEmail = email.replace("udacity", "gmail");

//	console.log(email);
//	console.log(newEmail);

//	var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//	console.log(awesomeThoughts);
//	console.log(funThoughts);

//	$("#main").append(funThoughts);

//	var formattedName = HTMLheaderName.replace("%data%", "Robert Sherwood");

//	var role = "Web Developer";
//	var formattedRole = HTMLheaderRole.replace("%data%", role);

//	$("#header").prepend(formattedRole);
//	$("#header").prepend(formattedName);

//	var skills = ["awesomness", "perogramming", "teaching", "JS"];

//	$("#main").append(skills[0]);


// var sampleArray = [0,0,7];

// var incrementLastArrayElement = function(_array) {
//    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    
//    newArray = _array.slice(0);

//    var lastNumber = newArray.pop();

//    newArray.push(lastNumber + 1);



    // Don't delete this line!
//    return newArray;
//};

// Did your code work? The line below will tell you!
//console.log(incrementLastArrayElement(sampleArray));

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    


    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
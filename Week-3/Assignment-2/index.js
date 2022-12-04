let basicDetails = function (hobby, foodPreference) {
    console.log (`\nFull Name: ` + this.firstName + " " + this.lastName +`\nGender: ` + this.gender +`
    I like to `+hobby+`
    I like to eat `+ foodPreference+` food
    `);
};

var user1 = {
    firstName: "ANUGRAH",
    lastName: "PAUL",
    gender: "MALE"
}
var user2 = {
    firstName: "YASH",
    lastName: "AGRAWAL",
    gender: "MALE"
}

console.log("============================CALL===============================");
basicDetails.call(user1, "Read Books", "Non-Vegetarian");
basicDetails.call(user2, "Drink Alcohol", "Vegetarian");

console.log("===============================Apply===============================");
basicDetails.apply(user1, ["Read Books", "Non-Vegetarian"]);
basicDetails.apply(user2, ["Drink Alcohol", "Vegetarian"]);

console.log("===============================Bind===============================");
u1 = basicDetails.bind(user1, "Read Books", "Non-Vegetarian");
u2 = basicDetails.bind(user2, "Drink Alcohol", "Vegetarian");
u1();
u2();

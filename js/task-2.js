

// function calcAverageCalories(days) {
//     let totalCalories = 0;
//     if (days.length === 0) {
// return 0;
//     }
//     else
//     for (let i = 0; i < days.length; i++) {
//         totalCalories += days[i].calories;
//     }

//     return totalCalories / days.length;
// }

// console.log(
//     calcAverageCalories([
//       { day: "monday", calories: 3010 },
//       { day: "tuesday", calories: 3200 },
//       { day: "wednesday", calories: 3120 },
//       { day: "thursday", calories: 2900 },
//       { day: "friday", calories: 3450 },
//       { day: "saturday", calories: 3280 },
//       { day: "sunday", calories: 3300 }
//     ])
//   ); // 3180
  
//   console.log(
//     calcAverageCalories([
//       { day: "monday", calories: 2040 },
//       { day: "tuesday", calories: 2270 },
//       { day: "wednesday", calories: 2420 },
//       { day: "thursday", calories: 1900 },
//       { day: "friday", calories: 2370 },
//       { day: "saturday", calories: 2280 },
//       { day: "sunday", calories: 2610 }
//     ])
//   ); // 2270
  
//   console.log(
//     calcAverageCalories([])
//   ); // 0


// Поради:

// Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName));
};

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken
} = require("./library.js");

// Write your code below:
async function serveDinnerAgain() {
  let foodArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans()
  ]);
  let veg = foodArray[0];
  let rice = foodArray[1];
  let chicken = foodArray[2];
  let beans = foodArray[3];
  console.log(
    `Dinner is served. We're having ${veg}, ${rice}, ${chicken}, and ${beans}.`
  );
}
serveDinnerAgain();

// let randomColor = [purple, black, green, red, pink, blue, yellow];

$("#red").on("click", function() {
  console.log("I am clicked");
  this.style.background = "green";
});

$("#green").on("click", function() {
  console.log("I am clicked");
  this.style.background = "blue";
});

$("#blue").on("click", function() {
  this.style.background = "red";
  console.log("I am clicked");
});

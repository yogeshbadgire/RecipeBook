


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("recipes_search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("recipes");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function updateRecipe() {
        
  const servings = parseFloat(document.getElementById('servings').value);
  var cuID;
  for(let i = 1; i <= 50; i++) {
      cuID = "ing"+i;
      const qty = parseFloat(document.getElementById(cuID).getAttribute('value'));        
      document.getElementById(cuID).innerHTML = qty*servings; 
  }        
}
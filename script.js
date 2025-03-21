


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
      var result = qty*servings;
      switch(result) {
        case 0:
            result = "";
            break;
        case 0.0625:
            result = "1/16";
            break;
        case 0.125:
            result = "1/8";
            break;
        case 0.1875:
            result = "1/8 + 1/16";
            break;
        case 0.25:
            result = "1/4";
            break;
        case 0.3125:
            result = "1/4 + 1/16";
            break;
        case 0.375:
            result = "1/4 + 1/8";
            break;
        case 0.4375:
            result = "1/4 + 1/8 + 1/16";
            break;
        case 0.5:
            result = "1/2";
            break;
        case 0.5625:
            result = "1/2 + 1/16";
            break;
        case 0.625:
            result = "1/2 + 1/8";
            break;
        case 0.6875:
            result = "1/2 + 1/8 + 1/16";
            break;
        case 0.75:
            result = "1/2 + 1/4";
            break;
        case 0.8125:
            result = "1/2 + 1/4 + 1/16"
            break;
        case 0.875:
            result = "1/2 + 1/4 + 1/8"
            break;
        case 0.9375:
            result = "1/2 + 1/4 + 1/8 + 1/16"
        default:
            result = result;
    }
      document.getElementById(cuID).innerHTML = result;
  }        
}  

function servingsList() {
    const selectElement = document.getElementById("servings");
  
    for (let i = 3; i <= 100; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      selectElement.add(option);
    }
  }
function displayRecipe(response) {
  new Typewriter("#recipes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#prompt").value;
  let apiKey = "3a335bb48bo85f01c326tf9592be14f5";
  let prompt =
    "User instructions are: Generate a recipe for " + instructionsInput;
  let context =
    "You are a esteamed chef with expert knowledge of all food. You mission is to generate a recipe with step by step instructions and separate each line with a <br />. Insert an ingredient list at the beginning of the recipe. Make sure to follow the user instructions. Do not include a title to the recipe. Insert a <br /> and sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipes");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink-smooth">Generating a recipe for ${instructionsInput}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);

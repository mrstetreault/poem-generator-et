function displayPoem(response) {
  console.log("displaying poem");
  new Typewriter("#poem-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#prompt").value;
  let apiKey = "3a335bb48bo85f01c326tf9592be14f5";
  let prompt =
    "User instructions are: Generate a poem about " + instructionsInput;
  let context =
    "You are a romantic poet expert to write poems. Your mission is to generate a 4 line poem. Make sure to follow the user instructions. Please make sure to sign the poem 'SheCodes AI' in the last line and make sure the signature only is in a <strong>HTML</strong> format.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);

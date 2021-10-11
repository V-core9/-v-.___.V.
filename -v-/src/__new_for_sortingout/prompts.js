//  https://www.npmjs.com/package/prompts
//  Lightweight, beautiful and user-friendly interactive prompts

const prompts = require("prompts");

async function getPrompts() {
  const response = await prompts([
    {
      type: "text",
      name: "twitter",
      message: `What's your twitter handle?`,
    },
    {
      type: "multiselect",
      name: "color",
      message: "Pick colors",
      choices: [
        { title: "Red", value: "#ff0000" },
        { title: "Green", value: "#00ff00" },
        { title: "Blue", value: "#0000ff" },
      ],
    },
  ]);

  console.log(response);
}

getPrompts();

//==============[GOOD]=============

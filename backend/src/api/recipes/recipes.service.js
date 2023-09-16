require("dotenv").config();
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const createRecipe = async (ingredients) => {
  ingredients = [
    "onions",
    "tomato",
    "spinach",
    "rice",
    "broccoli",
    "pasta",
    "beans",
  ];
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Respond in JSON format with recipe_name, description, difficulty, servings, ingredients array, instructions array, prep_time",
      },
      {
        role: "user",
        content: `Give me a recipe using the any of the following ingredients: ${ingredients.join()}`,
      },
    ],
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const recipe = JSON.parse(response.choices[0].message.content);
  return { recipe };
};

const generateImage = async (recipe) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are an image prompt generator. First, ask me for a description of an image, and help me fill in the following. Then, output the completed prompt.

        ![Image] (https://image.pollinations.ai/prompt/{description}), where {description} = {sceneDetailed},%20{adjective1},%20{charactersDetailed},%20{adjective2},%20{visualStyle1},%20{visualStyle2},%20{visualStyle3},%20{genre}`,
      },
      {
        role: "user",
        content: `Give me a recipe using the any of the following ingredients: ${ingredients.join()}`,
      },
    ],
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
};

module.exports = { createRecipe };

import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention. Keep it simple and clear. Format your response in markdown.
`;

export async function handler(event, context) {
  try {
    const body = JSON.parse(event.body);
    const ingredientsString = body.ingredients.join(", ");

    const prompt = `${SYSTEM_PROMPT}\n\nIngredients: ${ingredientsString}`;

    const response = await hf.chatCompletion({
      model: "HuggingFaceH4/zephyr-7b-beta",
      inputs: prompt,
      parameters: {
        max_new_tokens: 512,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ recipe: response.generated_text }),
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong." }),
    };
  }
}

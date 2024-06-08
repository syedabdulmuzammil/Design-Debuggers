import { Configuration, OpenAIApi } from "openai";
// Utility function to interact with GPT-3.5 Turbo
async function talkWith(conversation) {
  try {
    // Initialize the OpenAI API with the API key from environment variable
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    // Send the message to GPT-3.5 Turbo
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a tech assistant, your work is only to answer the question very briefly to a certain limit and then recommend students a particular field that you guess is better for them ",
        },
        { role: "user", content: conversation },
      ],
    });
    // Return the assistant's reply from the response
    return response.data.choices[0].message.content;
  } catch (error) {
    // Handle API errors
    if (error.code === "ENOTFOUND" && error.hostname === "api.openai.com") {
      // Custom error message for ENOTFOUND issue
      throw new Error(
        "Unable to connect to the OpenAI API. Please check your internet connection."
      );
    } else if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      throw new Error(error.response.data);
    } else {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}
export default talkWith;

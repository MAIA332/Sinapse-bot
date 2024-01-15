// Given JSON response
const jsonResponse = '{"id": "cmpl-b29debed-7488-4e8a-ad18-2178b78539f9", "object": "text_completion", "created": 1705285338, "model": "./IA/models/llama-2-7b-chat.Q8_0.gguf", "choices": [{"text": "Q:Correct grammatically, give coherence in formal language without special caracteres to the text below, and write a brief description to complement the information : o objetivo principal deste projeto \\u00e9 criar uma implementar uma solu\\u00e7\\u00e3o avan\\u00e7ada de chatbots personalizados para atender a necessidades espec\\u00edficas de clientes pessoa jur\\u00eddica o chatbot ser\\u00e1 projetado para oferecer suporte da informa\\u00e7\\u00f5es e intera\\u00e7\\u00f5es eficientes melhorando a comunica\\u00e7\\u00e3o e a experi\\u00eancia do cliente empresa Real A: The primary objective of this project is to create an advanced solution for personalized chatbots that can cater to the specific needs of legal entities, such as companies. The chatbot will be designed to provide efficient information and interaction, improving communication and customer experience. By implementing this solution, we aim to enhance the overall efficiency of the company\'s communication and make it more personalized and tailored to the needs of its clients. Description: This project aims to develop an innovative chatbot solution that can cater to the diverse needs of legal entities, such as companies. The chatbot will be designed to provide efficient information and interaction, improving communication and customer experience. With this advanced solution, companies can enhance their overall efficiency of communication and make it more personalized and tailored to the needs of their clients.", "index": 0, "logprobs": null, "finish_reason": "stop"}], "usage": {"prompt_tokens": 122, "completion_tokens": 169, "total_tokens": 291}}';

// Parse JSON
const parsedJson = JSON.parse(jsonResponse);

// Access the answer text after "A:"
const answerText = parsedJson.choices[0].text.split("A:")[1].trim();

// Print the parsed answer
console.log(answerText);

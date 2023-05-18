---
sidebar_position: 2
---

# create chabot from document

With sarufi you can easily create a chabot containing some of your company doucments that people can ask about. With this feature you will be able to create a bot in a faster way. The document can be of format pdf,docs or text files. All you need to do is just uploading your file.

You will need to know about some few concepts though. We shall take a look at prompts, temperature and memory.

## Know the basics

A prompt  is a short piece of text that guides a chatbot to generate a specific response. It can be used to control the chatbot's persona, tone, strictness, and language. By carefully crafting the prompt, you can control the chatbot's responses to a high degree of precision

A max token  value is the maximum number of words a chatbot can process in a single interaction. Setting a high max token value will allow the chatbot to generate more complex responses, but it will also take longer and cost more.

Temperature is a parameter that controls the creativity of a chatbot's responses. For example, a chatbot with a high temperature is more likely to generate creative and unexpected responses, while a chatbot with a low temperature is more likely to generate conservative and predictable responses.

Lets get an idea of what is a token. A we deal with NLP models process texts by chunking them into small groups/chunks of words or letters. The model set with many token will have ability to process large chunks of text but this comes with cost and letacy issues.

## Lets build a bot

You need to have your document ready. Login to [sarufi](sarufi.io), then **Create a bot**. Then you can create a new bot by filling the basic info about the bot. Make sure you have selected `create from documnet choice`. Click **Create**

## Adjust some configuration

- Write a good prompt
    A good prompt is one of the best ways we can make sure that the bot will respond in a way we want. We can give it a persona like "You act as an Sarufi Assistance". The good prompt will enable the model yeld good responses.

- Adjust temperature

    As discussed earlier, temperature setting will allow your bot to be consistent(with temperature set to 0) or creative(temperature set above 0)

- Toggle Memory ability

    Memory will help your bot be able to respond to follow-up questions as it will have the idea of previous context. The use of this may depend on the needs of the bot.

## Test the bot

After making the changes, you don't forget to save. Click **save**. Then your chabot will be live for use. Click the chat icon on the right side to start testing the bot.
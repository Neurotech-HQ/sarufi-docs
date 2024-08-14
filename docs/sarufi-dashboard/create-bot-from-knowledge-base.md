---
sidebar_position: 3
---

# Create chabot from document

With sarufi you can easily create a chabot containing some of your company documents that people can ask about(FAQs, general information). The document can be of format pdf,docs or text files. All you need to do is just uploading your file.

Lets look at some basic concepts before diving into the building section. We shall take a look at prompts, temperature and memory.

## Know the basics

- A prompt

  This is a short piece of text that guides a chatbot to generate a specific response. It can be used to control the chatbot's persona, tone, strictness, and language. By carefully crafting the prompt, you can control the chatbot's responses to a high degree of precision.

  You will find a default prompt set to something like *Act as a chatbot that can answer questions about the content of a document only. If the question is out of scope, Just say "I don't know, can you rephrase the question" or "I don't understand, please rephare your message". Be polite, energetic, and positive.*

  You can edit your bot's prompt to suit the need.

- Max token  value

    Lets get an idea of what is a token. As we deal with Language models, they only understand and process text by splitting it into small groups/chunks of characters.

    Example:

    ```text
    Sentence: "Hello, tell me about sarufi."
    Tokens: ["Hello" , "," , "tell", "about", "saruf", "."]
    ```

    You can play around with some texts to get more insight, try it using [Tokenizer](https://platform.openai.com/tokenizer)

    So the model set with many token will have ability to process large chunks of text but this comes with cost and letacy issues(the model will take longer time to process)

    So the maximum number of words a chatbot can process in a single interaction. Setting a high max token value will allow the chatbot to generate more complex responses, but it will also take longer and cost more.

- Temperature

    This is a parameter that controls the creativity of a chatbot's responses. For example, a chatbot with a high temperature is more likely to generate creative and unexpected responses, while a chatbot with a low temperature is more likely to generate conservative and predictable responses.

## Lets build a bot

You need to have your document ready. Login to [sarufi](https://www.sarufi.io/), then **Create a bot** 👉🏼 select **Create from knowledge base** .  Just fill in the basic info about your bot.

![Create bot from knowledge base](/img/create-a-bot-from-knowledge-base.png)

Here are some few things to elaborate

- Language selection

    With language selection(currently English and Swahili), you can choose any base language for your bot.

- Community visibility

    We provide [sarufi Community playground](https://playground.sarufi.io/community) for developer to showcase what they have been able to create using Sarufi. The toogle button lets you decide to make your chatbot publically available at sarufi Community for people to test.

    Lets leave it **off** as we can share our bot once its completely finished.

✅ Click **Create**

## Adjust some configuration

After creating the bot, it will appear on the dashboard. Click it to start making the magic with sarufi.

![Dashboard knowldege base Chatbot view](/img/dashboard-knowledge-base-bot-view.png)

Lets take a look at some terminology used in the dashboard.

- Write a good prompt

    A good prompt is one of the best ways we can make sure that the bot will respond in a way we want. We can give it a persona like "You act as an Sarufi Assistance". The good prompt will enable the model yeld good responses.

- Adjust temperature

    As discussed earlier, temperature setting will allow your bot to be `consistent`(with temperature set to 0) or `creative`(temperature set above **0**)

- Toggle Memory ability

    Memory will help your bot be able to respond to follow-up questions as it will have the idea of previous context. The use of this may depend on the needs of the bot.

🚀 I tell you something amazing thing, never forget to 🇸 🇦  🇻 🇪 your bot configuration.

## Test the bot

After making the changes, you don't forget to save. Click **save**. Then your chabot will be live for use. Click the chat icon on the right side to start testing the bot.

I created  a sample bot using some of the documents about sarufi. Here is the live test

![Sarufi chabot created from Knowledge base](/gif/sarufi-chabot-from-knowledge-base.gif)

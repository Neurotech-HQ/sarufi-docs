---
sidebar_position: 1
---

# Basic Concepts and Terminology

Before you start building your first chatbot, it is important to understand the basic concepts and terminology of chatbots. Here are some of the basic concepts and terminology that you need to know:

## What is a Chatbot?

Chatbots are software applications that simulate a conversation with a user. They are used to automate interactions with users, and can be used to `provide information`, `answer questions`, and `perform tasks`. Chatbots are often used in customer service, sales, and marketing.

![Sample Chatbot](/img/laptop-6545315_1280.jpg)

You can think of a chatbot as a virtual assistant that you can interact with through a chat interface, you can have a look at [Sarufi playground](https://playground.sarufi.io/) to see some of the chatbots examples made with sarufi.



## Chatbot building blocks

There are many different types of chatbots, and each type of chatbot is built using different building blocks. Here are some of the most common building blocks that are used to build chatbots:

- **User Interface**: The user interface is the part of the chatbot that the user interacts with. It is the part of the chatbot that the user sees and interacts with. The user interface can be a chat interface, a voice interface, or a combination of both.

![Chatbot User Interface](/img/whatsapp-interface-1660652.svg)

- **Intents**: An intent is a user's intention or goal when interacting with a chatbot. For example, if a user asks a chatbot a question, the intent of the user is to get an answer to the question. If a user asks a chatbot to book a flight, the intent of the user is to book a flight.

![Chatbot Intents](/img/man-838880.png)

- **Entities**: An entity is a piece of information that is relevant to the user's intent. For example, if a user asks a chatbot to book a flight, the entity is the flight that the user wants to book.

![Chatbot Entities](/img/text-mining-1476780_6401.png)


- **Dialog**: A dialog is a conversation between a user and a chatbot. A dialog is made up of one or more turns. A turn is a single interaction between a user and a chatbot. For example, if a user asks a chatbot a question, the dialog is made up of one turn. If a user asks a chatbot a question, and the chatbot asks the user a follow-up question, the dialog is made up of two turns.

![Chatbot Dialog](/img/pixel-3699345.svg)

## SARUFI Architecture

Now that you know the basic concepts and terminology of chatbots, let's take a look at the SARUFI architecture. The SARUFI current architecture is made up of two main components:

- [**Intent Detection**](#intent-detection)
- [**Dialog Management**](#dialog-management)

### Intent Detection

The intent detection component is responsible for detecting the user's intent. Sarufi handles intents training  and detection for you. You don't need to worry about the details like how the bot is trained, how it is deployed, or how it is used in production anymore and you can focus on building your bot.  Your main task is to provide the training data for the intents that you want to detect. Sarufi will take care of the rest.

### Dialog Management[Flow]

The Dialog management component is responsible for managing the dialog between the user and the chatbot. Sarufi handles dialog management for you. all you need to do is define the dialog flow for your bot. Sarufi will take care of the rest.

## Application logic

The app logic is the part of the chatbot that you manage, which can involves things like:

1. **Data storage**: The data storage is the part of the chatbot that stores the data that is used by the chatbot. For example, if a chatbot is used to book flights, the data storage will store information about flights, such as flight numbers, flight times, and flight prices.

2. **APIs**: The APIs are the part of the chatbot that is used to interact with other systems. For example, if a chatbot is used to book flights, the APIs will be used to interact with the airline's booking system.

3. **Business logic**: The business logic is the part of the chatbot that is used to perform business tasks. For example, if a chatbot is used to book flights, the business logic will be used to book flights.

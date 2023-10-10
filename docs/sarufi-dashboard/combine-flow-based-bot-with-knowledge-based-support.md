---
sidebar_position: 3
---

# Combine Flow based bot with Knowledge based support

Its super useful if you can have a bot that can answer questions from your trained intents and also answer questions from your knowledge base. With this power at hand, you bot becomes super useful and can be used in many scenarios.

Lets explore the quick way to do this in [Sarufi](sarufi.io)

This guide assumes that you are familiar with building chatbot from both [scratch](/docs/sarufi-dashboard/intro-on-sarufi-dashboard#create-chatbot-from-scratch) and [knowledge Base](/docs/sarufi-dashboard/create-bot-from-knowledge-base.md). As we are going to explore the simple process of combining the two.

## Lets delve into the process

I assume that you already have intent based chatbot that you would like to give more support by providing a knowledge base. The bot must have atleast 10 intents

Lets start by creating a bot from scratch. You can follow the guide [here](/docs/sarufi-dashboard/intro-on-sarufi-dashboard#create-chatbot-from-scratch) to create a bot from scratch.

After creating the bot, you will be redirected to the dashboard. Click on the bot you have just created to start building it.

### Adding knowledge support

To add knowlege support, you must have the documents(pdf, docx) with contents to support your bot.

Navigate to settings >> General settings >>Switch to Knowledge Base bot. The click *Edit*.

In the new window, you will have a normal section to upload your documents and customize the bot.

### Combine the two

After adding your support documents, navigate to settings >>(General) >> Switch to bot from Scratch. Before you save the changes, there is one important setting to be made here.

Scroll down, there is a `Threshold` and `Fallback` section. We are going to set oor threshold and turn on the Fallback to our documnet.

Before doing this let take a quick recap on what threshold is.

- A threshold indicates the confidence of a bot's model on a user text to determine user intent and execute the defined flow. A threshold is a value between 0 and 1.

    Lets assume that the bot has confidence level of about **0.345** on certain user massage. If we set bot's threshold to **0.4**, it will not be able to pick up the intent. So we introduce a fallback message as a fallback message will be the response in case a model evaluates user intent below the threshold set.

    ![Illustration on Threshold](/img/illustration-threshold.png)

    Setting our threshold in general means that if the model confidence on user intent is below the threshold, the bot will fallback to the fallback message or document.

    The fallback can be a simple message (as "Please rephrase your message" or "Please let me know what you mean by saying this") or the bot can be configured to fallback to a document. This is covered in [Creating a bot using Knowledge base](/docs/sarufi-dashboard/create-bot-from-knowledge-base)
    
    ![The setting in the dashboard](/img/sarufi-threshold-setting.png)

With clear understanding of Threshold and Fallback, lets set our threshold to **0.6** and turn on the fallback to our document. 

Finally click `Save` button.

## Lets test our bot

After saving the changes, you can now test your bot. You can test your bot by clicking the chat icon on the right side of the dashboard. I created a simple bot that could respond to some messages based on my intents and the doument provided.

![Sample bot](/img/sample-bot.gif)

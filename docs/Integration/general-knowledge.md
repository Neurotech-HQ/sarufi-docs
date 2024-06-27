---
sidebar_position: 1
---

# General Terms

Lets first get into general explanation/detailed guide about what you are going to find out at this section. The section goes into how you can enhance your chatbot functionalities such as receiving an email when a user books a meeting, and much more.

The integration features are now supported for either `intent-based` or `hybrid`(Combination of intent-based and LLM-based) chatbots.

## Interface

The very first thing you land on when you navigate to you sarufi account is workspace that houses your chatbots. To access the integration section, you will have to navigatie to your chabot >> Integration >> Select integration of your choice.

![Sarufi Integration Interface](/img/integration_interface_image.png)

## Trigger Intent

In most of integrations, you will encounter the term `trigger intent`. Lets go through this using a very simple analogy assuming you already have an idea about an  [intent](/docs/getting-started/basic-concepts#intent-detection).

Let's take an example of a Restaurant Assistant Chatbot with functionalities such as ordering, refund requests, and more. The chatbot handles conversations for each functionality without giving special attention to any particular intent. However, if we want to trigger a specific integration when a user's message corresponds to a particular intent, we can implement a trigger mechanism.

For instance, I would like to receive an email whenever a refund request is reported. In this case, the "refund request" intent will be treated with special attention and designated as a trigger intent.

In summary, a trigger intent is an intent that, when detected in a user's message, initiates a specific action, such as sending an email.

---
sidebar_position: 7
---

# Custom integration

With custom integration, you can have own server to process what ever happen on trigger intent. This allows you add can add extra functionality to let it interact with other systems, such as databases, APIs, and third-party applications. This works as webhook

This is possible by utilizing Sarufi's webhook functionality to automate workflows. This will make our previous chatbot more powerful and useful. We can integrate webhooks into our chatbot to handle things like payments, update inventories, and update delivery tracking systems.

## Webhooks

A webhook is an HTTP-based callback mechanism that allows two systems to communicate in real-time. It is triggered when an event occurs, such as an order confirmation. When the event is triggered, the webhook sends a request to a specified URL, which can be used to trigger an action, such as updating a database, sending a payment push, updating a delivery system, or sending a message notification.

:::note
Remember that a webhook only communicates one way!
:::

## Interface Overview

The custom integration interface consists of the following components:

| Components          | Description                                                |
|-------------------|------------------------------------------------------------|
| URL  | Webhook url |
| Query Token(Optional)           | Add Authorization token if the server needs it                     |
| Trigger intent              | Select the intents that will trigger the webhook functionality                     |
| Activate Toggle   | Toggle to activate or deactivate the email integration.    |
| Save Button       | Click to save the email integration settings.             |

All you have to do is specify which states should trigger the webhook and set the webhook URL in Sarufi.

## Step-by-Step Integration Guide

Follow these steps to integrate custom-webhook functionality into your chatbot:

The first thing is Login to you account, navigate to your chatbot in Workspace.

1. Access Custom integration Interface

    In your chatbot, navigate to integrations section then to the custom integration section.

1. Configure Triggered Intents

    Select the intents that will trigger the webhook functionality

![Sarufi: Custom integration](/img/custom-integration.png)

## Test it

With everything set, here is the sample chatbot using custom integration.

![Sample of our chatbot](/gif/webhook-order-pizza.gif)

Here is the notification message received from the bot after the order:

![Twilio notification](/img/twilio-notification.jpeg)

---
sidebar_position: 2
---

# Email integration

Email integration allows your chatbot to send emails, enabling communication with users via email. It allows your chatbot to send emails in response to specific user interactions. With this functionality, you can enhance the communication capabilities of your chatbot and provide users with important notifications or updates via email.

## Interface Overview

The email integration interface consists of the following components:

| Components          | Description                                                |
|-------------------|------------------------------------------------------------|
| Triggered Intents | Select the intents that will trigger the email functionality. |
| Subject           | Enter the subject line for the email.                     |
| Body              | Enter the main content of the email.                       |
| Activate Toggle   | Toggle to activate or deactivate the email integration.    |
| Save Button       | Click to save the email integration settings.             |

## Step-by-Step Integration Guide

Follow these steps to integrate email functionality into your chatbot:

The first thing is Login to you account, navigate to your chatbot in Workspace.

1. Access Email Integration Interface

    In your chatbot, navigate to integrations section then to the Email integration section.

    ![Integration interface](/img/integration_interface_image.png)

1. Configure Triggered Intents

    Select the intents that will trigger the email functionality. These are the actions or commands from the user that will prompt the chatbot to send an email.

    ![Sarufi setup: email intent config](/img/email-intent.png)

1. Enter Email Details.

    Enter the subject line and body of the email. Customize these fields based on the information you want to include in the email message.

1. Enter Recipient's Email Address.

    Enter the email address of the recipient to whom the email will be sent. Here you can input  the email or choose from the state.

    If you choose from state, you might want to know how the values provided by user gets propagate throughout the chatbot's memory at at [variable placement](/docs/add-more-features/Variable-placement)

    ![email](/img/email-details.png)

1. Activate Email Integration.

    Toggle the switch to activate the email integration. When activated, the chatbot will send emails based on the specified intents, subject, and body.

1. Save Settings.

    Click the "Save" button to save your email integration settings. Ensure that all configurations are correctly saved before proceeding.

## Testing

After configuring the email integration settings, test the functionality to ensure that emails are sent correctly in response to the specified intents.

## YouTube Reference

Our YouTube channel has a video tutorial on how to integrate Email into your application. Watch the video [Sarufi x Email Integration](https://www.youtube.com/watch?v=bhHAbIbak-8).

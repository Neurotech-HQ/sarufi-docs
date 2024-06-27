---
sidebar_position: 3
---

# AzamPay integration

AzamPay integration enables your chatbot to process payments seamlessly through AzamPay's secure payment gateway. It allows your chatbot to initiate and complete payment transactions based on user actions. With this integration, you can offer your users a convenient way to make payments directly within the chatbot interface.

## AzamPay

**AzamPay** is an East African company specializing in end-to-end online payment solutions. They offer a range of digital tools designed to:

- Streamline payment and collection processes
- Integrate with existing accounting/Enterprise Resource Planning (ERP) systems
- Provide bespoke solutions for local, regional, and international transactions

![azampay](/img/azampay-image.png)

To know more about AzamPay, visit the [AzamPay website](https://azampay.com/).

## Before we get started

There are a few prerequisites before intergrating with AzamPay:

- A Sarufi bot. If you don’t have one, you can click [here](https://sarufi.io) to create one.
- Integration credentials provided by AzamPay. These are used for integrating AzamPay services into your application. They consist of the following:
  - App name
  - Client ID
  - Client Secret

## Interface Overview

The AzamPay integration interface consists of the following components:

| Components            | Description                                               |
|-------------------|-----------------------------------------------------------|
| App Name          | Enter the name of your application from AzamPay                       |
| Client ID         | Enter the client ID provided by AzamPay.                  |
| Client Secret     | Enter the client secret provided by AzamPay.              |
| Triggered Intents | Select the intents that will trigger AzamPay functionality.|
| Mobile Number     | Select the state for the mobile number associated with the payment. |
| Amount            | Enter the amount to be paid via AzamPay.                  |
| Activate Toggle   | Toggle to activate or deactivate the AzamPay integration. |
| Save Button       | Click to save the AzamPay integration settings.           |

:::note
The feature is currently supported for either `flow-based` or `hybrid` chatbots. Meaning chatbots built only using knowledge-base/llms have no support yet.
:::

## Step-by-Step Integration Guide

Follow these steps to integrate AzamPay into your application:

The first thing is Login to you account, navigate to your chatbot in Workspace.

1. Access AzamPay Integration Interface

   In your chatbot, navigate to integrations section then to the AzamPay integration section.

    ![Integration interface](/img/integration_interface_image.png)

1. Fill AzamPay details.

    From the interface, its quite straight forward about what you are to fill-out. You will need to enter the `app name`, `Client ID` and the AzamPay `Client Secret`.

    Click `Next` to proceed.

    ![Integration: Azampay interface](/img/azampay-interface1.png)

1. Sarufi setup

   1. Trigger Intent.

        Select the intents that will trigger AzamPay functionality. You'll need to identify and define these intents based on the user interactions you want to enable for payments through AzamPay.

        By selecting the relevant triggered intents, you ensure that AzamPay's payment features are integrated into your application's user experience, aligning with the actions users want to take when making payments.

        ![Sarufi setup: Trigger intent](/img/azampay-interface2.png)

   1. Mobile Number.

        Select the state for the mobile number associated with the payment. You will have option to select the state at which you chatbot acquires mobile number from the user.

        You can learn more on how values get propargated in the memory of chatbot at [variable placement](/docs/add-more-features/Variable-placement)

        ![Sarufi Setup: State Phone number](/img/azampay-interface3.png)

   1. Amount setup.

        At this point, you have options to setup the amount that will be triggered. Here you can enter the amout manual or choose the state for the amount.

        ![Sarufi Setup: Amount](/img/azampay-interface4.png)

   1. Activate.

        Toggle the switch to activate the Azam Pay integration. When activated, users will be able to make payments using AzamPay within your application.

   1. Save integration

    Click the "Save" button to save your Azam Pay integration settings. Ensure that all configurations are correctly saved before proceeding.

## Testing

After configuring the AzamPay integration settings, test the payment functionality to ensure that users can make payments using AzamPay within your application.

## YouTube Video

Our YouTube channel has a video tutorial on how to integrate AzamPay into your application. Watch the video [Sarufi x AzamPay Integration](https://www.youtube.com/watch?v=bPMRriMyz7A).

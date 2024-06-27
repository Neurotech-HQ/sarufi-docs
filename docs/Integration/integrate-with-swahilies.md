---
sidebar_position: 5
---


# Swahilies integration

The Swahilies integration allows your application to incorporate Swahilies' digital payment solutions, designed specifically for businesses in Africa. This integration simplifies payment processing, making it easier and more secure for businesses to accept digital payments.

## Swahilies

**Swahilies** is a company focused on developing digital payment solutions tailored for businesses in Africa. Their goal is to simplify payment processing, making it easier for businesses to accept digital payments securely and efficiently. Swahilies aims to revolutionize the way payments are made and received in Africa by offering innovative and user-friendly payment systems.

![swahilies](/img/swahilies-image.png)

To learn more about Swahilies, visit their [website](https://pay.swahilies.com/).

## Before we get started

There are a few prerequisites for intergrating with Swahilies:

- A Sarufi bot. If you don’t have one, you can click [here](https://sarufi.io) to create one.
- Integration credentials provided by AzamPay. These are used for integrating Swahilies services into your application. They consist of the following:
  - Business  name
  - API key

## Interface Overview

Swahilies integration interface consists of the following components:

| components                      | Description                                                               |
|------------------------------|---------------------------------------------------------------------------|
| Business Name                | Enter the name of your business.                                         |
| API Key                      | Enter the API key provided by Swahilies.                                  |
| Triggered Intents            | Specify the intents that will trigger Swahilies payment functionality.     |
| Choose State for mobile number | Select the state for the mobile number associated with the payment.      |
| Amount                       | Enter the amount to be paid via Swahilies.                                |
| Activate                     | Toggle to activate or deactivate the Swahilies integration.               |

## Step-by-Step Integration Guide

here's a step-by-step guide for integrating Swahilies into your application:

1. Access the Swahilies Integration Interface

    Login to the Sarufi dashboard and navigate to the Swahilies integration section.

1. Business Name

    Enter the name of your business.

1. API Key

    Obtain the API key provided by Swahilies. This key is necessary for authentication and access to Swahilies' payment services.

1. Select Triggered Intents

    Specify the intents that will trigger Swahilies' payment functionality. These could include actions such as initiating a payment or confirming a transaction.

    ![swahilies](/img/swahilies-interface2.png)

1. Choose State for Mobile Number

    Select the state for the mobile number associated with the payment. This ensures that payments are processed correctly based on the selected state by the user.

    ![swahilies](/img/swahilies-interface3.png)

1. Amount.

    Enter the amount to be paid via Swahilies.  Here you can enter the amout manual or choose the state for the amount.

    ![swahilies](/img/swahilies-interface4.png)

1. Activate Swahilies Integration

    Toggle the switch to activate or deactivate the Swahilies integration. This allows you to enable or disable the payment functionality as needed.

1. Save integration

    Click the "Save" button to save the Swahilies integration settings. Ensure that all the required information is correctly entered before saving to ensure smooth integration.

## Testing

After configuring the Swahilies integration settings, test the payment functionality to ensure that users can make payments using Swahilies within your application.

## YouTube Reference

Our YouTube channel has a video tutorial on how to integrate Swahilies into your application. Watch the video [Sarufi x Swahilies Integration](https://www.youtube.com/watch?v=8Gicwt9aktc)

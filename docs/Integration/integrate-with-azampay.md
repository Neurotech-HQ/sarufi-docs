---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AzamPay integration

AzamPay integration enables your chatbot to process payments seamlessly through AzamPay's secure payment gateway. It allows your chatbot to initiate and complete payment transactions based on user actions. With this integration, you can offer your users a convenient way to make payments directly within the chatbot interface.

## AzamPay
**AzamPay** is an East African company specializing in end-to-end online payment solutions. They offer a range of digital tools designed to:

- Streamline payment and collection processes
- Integrate with existing accounting/Enterprise Resource Planning (ERP) systems
- Provide bespoke solutions for local, regional, and international transactions

![azampay](/img/azampay-image.png)

To know more about azampay go  [AzamPay website](https://azampay.com/).

## Before we get started

Before we get started with intergrating with AzamPay, We'll need a few things:
- A Sarufi bot, If you don’t have one, you can click here to create one [here](https://sarufi.io).
- Integration Credentials, this is the essential components provided by AzamPay for integrating their services into your application, These are
    - App name
    - Client ID
    - Client Secret

## Interface Overview

The AzamPay integration interface consists of the following components:

| Components            | Description                                               |
|-------------------|-----------------------------------------------------------|
| App Name          | Enter the name of your application.                       |
| Client ID         | Enter the client ID provided by AzamPay.                  |
| Client Secret     | Enter the client secret provided by AzamPay.              |
| Triggered Intents | Select the intents that will trigger AzamPay functionality.|
| Mobile Number     | Select the state for the mobile number associated with the payment. |
| Amount            | Enter the amount to be paid via AzamPay.                  |
| Activate Toggle   | Toggle to activate or deactivate the AzamPay integration. |
| Save Button       | Click to save the AzamPay integration settings.           |

## Step-by-Step Integration Guide
Follow these steps to integrate Azam Pay into your application:

**1: Access AzamPay Integration Interface**

Log in to your chatbot platform and navigate to the AzamPay integration section.

![integration-interface](/img/integration_interface_image.png)

**2: Enter App Name, Enter Client ID, Enter Client Secret**

Enter the name of your application, client ID provided by Azam Pay, client secret provided by Azam Pay.

click the "next" button to proceed

![azampay_interface1](/img/azampay-interface1.png)

**3: Select Triggered Intents**

Select the intents that will trigger AzamPay functionality. You'll need to identify and define these intents based on the user interactions you want to enable for payments through AzamPay.
By selecting the relevant triggered intents, you ensure that AzamPay's payment features are integrated into your application's user experience, aligning with the actions users want to take when making payments

![azampay_interface2](/img/azampay-interface2.png)

**4: Choose State for Mobile Number**

Select the state for the mobile number associated with the payment. Users may select their state from a dropdown menu.

![azampay_interface3](/img/azampay-interface3.png)

**5: Enter Amount**

Enter the amount to be paid via AzamPay.  Here you can enter the amout manual or choose the state for the amount.

![azampay_interface4](/img/azampay-interface4.png)

**6: Activate Azam Pay Integration**

Toggle the switch to activate the Azam Pay integration. When activated, users will be able to make payments using Azam Pay within your application.

**7: Save integration**

Click the "Save" button to save your Azam Pay integration settings. Ensure that all configurations are correctly saved before proceeding.

## Testing

After configuring the Azam Pay integration settings, thoroughly test the payment functionality to ensure that users can make payments using Azam Pay within your application.
## See the outcomes



<!-- Integrating Azam Pay into your application enhances the payment processing capabilities and provides users with a convenient and secure payment experience. Follow this guide to successfully integrate Azam Pay into your application. -->








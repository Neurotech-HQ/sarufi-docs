---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Swahilies integration
Swahilies integration allows your application to incorporate Swahilies' digital payment solutions, designed specifically for businesses in Africa. This integration simplifies payment processing, making it easier and more secure for businesses to accept digital payments

## Swahilies
**Swahilies** is a company focused on developing digital payment solutions tailored for businesses in Africa. Their goal is to simplify payment processing, making it easier for businesses to accept digital payments securely and efficiently. Swahilies aims to revolutionize the way payments are made and received in Africa by offering innovative and user-friendly payment systems.

![swahilies](/img/swahilies-image.png)

To know more about swahilies go  [swahilies](https://pay.swahilies.com/).

## Before we get started

Before we get started with intergrating with Swahilies, We'll need a few things:
- A Sarufi bot, If you don’t have one, you can click here to create one [here](https://sarufi.io).
- Integration Credentials, this is the essential components provided by Swahilies for integrating their services into your application, These are
    - Business  name
    - API key

To get swahilies credentials,[visit here](https://pay.swahilies.com/contact-us) to get in touch with swahilies Team
   
## Interface Overview

Swahilies integration interface consists of the following components:

| components                      | Description                                                               |
|------------------------------|---------------------------------------------------------------------------|
| Business Name                | Enter the name of your business.                                         |
| Api Key                      | Enter the API key provided by Swahilies.                                  |
| Triggered Intents            | Specify the intents that will trigger Swahilies payment functionality.     |
| Choose State for mobile number | Select the state for the mobile number associated with the payment.      |
| Amount                       | Enter the amount to be paid via Swahilies.                                |
| Activate                     | Toggle to activate or deactivate the Swahilies integration.               |



## Steps
here's a step-by-step guide for integrating Swahilies into your application:

**1: Access  Swahilies Integration Interface**

Log in to your your sarufi account and  navigate to  your chatbot --> `settings` --> `Integration` --> `Swahilies`*. 

![integration-interface](/img/integration_interface_image.png)

**2.Business Name**

Enter the name of your business.

**3.API Key**

Obtain the API key provided by Swahilies. This key is necessary for authentication and access to Swahilies' payment services.

![swahilies](/img/swahilies-interface.png)

**4.Select Triggered Intents**

Specify the intents that will trigger Swahilies' payment functionality. These could include actions such as initiating a payment or confirming a transaction.

![swahilies](/img/swahilies-interface2.png)

**5.Choose State for Mobile Number**

Select the state for the mobile number associated with the payment. This ensures that payments are processed correctly based on the selected state by the user.

![swahilies](/img/swahilies-interface3.png)

**6.Amount**

Enter the amount to be paid via Swahilies.  Here you can enter the amout manual or choose the state for the amount.

![swahilies](/img/swahilies-interface4.png)

**7.Activate Swahilies Integration**

Toggle the switch to activate or deactivate the Swahilies integration. This allows you to enable or disable the payment functionality as needed.
If you no longer want to use your integration, toggle the `Activate` switch off to deactivate the integration.

**8.Save integration**

Click the "Save" button to save the Swahilies integration settings. Ensure that all the required information is correctly entered before saving to ensure smooth integration.

## Testing

After configuring the swahilies integration settings, thoroughly test the payment functionality to ensure that users can make payments using swahilies within your application.

See example

With everything set, lets test our integration.

![Sample swahilies integration](/gif/Chatbot_integration_with_Swahilies.gif)

Follow this guide to successfully integrate swahilies payment integration into your chatbot application.

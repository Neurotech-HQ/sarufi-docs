---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Mpesa integration



## Mpesa
Mpesa is Africa's most successful mobile money service and the region’s largest fintech platform. 
Mpesa  is the preferred way to make payments across the continent both for the banked 
and unbanked due to its safety and unmatched convenience.
It also provides financial services to millions of people who have mobile phones, but do not have bank accounts, or only have limited access to banking services. 

![mpesa](/img/Mpesa.png)

To know more go to  Mpesa developer portal [here](https://www.m-pesa.africa/partners-developers).

## Before we get started

Before we get started with intergrating with Mpesa, We'll need a few things:
- A Sarufi bot, If you don’t have one, you can click here to create one [here](https://sarufi.io).
- Register for M-Pesa API Access:
    - Visit the M-Pesa developer portal and sign up for an account [here](https://uat.openapiportal.m-pesa.com/login).
    - Follow the registration process to obtain access to the M-Pesa API.
- Obtain API Credentials:  obtain the necessary API credentials for integration.
    - API key
    - public key
    - service code

## Interface Overview

Mpesa integration interface consists of the following components:

| components                      | Description                                                               |
|------------------------------|---------------------------------------------------------------------------|
| API key                      | Enter the API key provided by Mpesa                                       |
| Public key                   | Enter the public key provided by Mpesa                                    |
| Service code                 | Enter the service code provided by Mpesa                                                                                                           |
| Triggered intent             | Specify the intents that will trigger Mpesa payment                       |
| Choose state for mobile number | Select the state for the mobile number associated with the payment      |
| Amount                       | Enter the amount to be paid via Mpesa                                     |
| Activate                     | Toggle to activate or deactivate the Mpesa integration                    |


## Steps
Log in to your your sarufi account and  navigate to  your chatbot --> `settings` --> `Integration` --> `Mpesa`.

**1: Access  Mpesa Integration Interface**

Log in to your chatbot platform and navigate to the Mpesa integration section.

![integration-interface](/img/integration_interface_image.png)

**2.Enter Credentials**

Enter  the API key and public key provided by M-Pesa. These credentials are necessary for authenticating your application's requests to the M-Pesa API.Also,enter the service code provided by M-Pesa. This code identifies the specific service or transaction type you are integrating with M-Pesa

![integration-interface](/img/mpesa-interface1.png)

**3.Configure Triggered Intent:**

Specify the intents within your chatbot that will trigger M-Pesa payments. These are the actions or user inputs that will prompt the chatbot to initiate a payment transaction.

![integration-interface](/img/mpesa-interface2.png)

**4.Choose State for Mobile Number:**

Select the state for the mobile number associated with the payment. This ensures that the payment is processed correctly and that the user receives the payment confirmation.

![integration-interface](/img/mpesa-interface3.png)

**5.Enter Amount:**

Enter the amount to be paid via M-Pesa.  Here you can enter the amout manual or choose the state for the amount.

![integration-interface](/img/mpesa-interface4.png)


**6.Activate Mpesa Integration**

Toggle the activation switch to activate or deactivate the M-Pesa integration in your application. Activation is necessary for the integration to be functional.

**7.Save integration**

Click the "Save" button to save the Mpesa integration settings. Ensure that all the required information is correctly entered before saving to ensure smooth integration.

## Testing

After configuring the Mpesa integration settings, thoroughly test the payment functionality to ensure that users can make payments using Mpesa within your application.

 See the outcomes


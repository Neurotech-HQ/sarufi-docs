---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WhatsApp

WhatsApp is a freeware, cross-platform messaging and Voice over IP (VoIP) service owned by Facebook, Inc. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other media.

WhatsApp is one of the most popular messaging apps in the world. It has over 2 billion active users and is available in 120 different languages.

![WhatsApp](/img/whatsapp-1900453_640.png)

## Before we get started

Before we get started with intergrating WhatsApp, we need a few things:
- A Sarufi bot. If you don’t have one, you can click here to create one [here](https://sarufi.io).
- A WhatsApp business account
- An access token from your WhatsApp Cloud API


## How to connect to WhatsApp Cloud API

To connect to WhatsApp Cloud API, you need to create a WhatsApp Business account. You can do this by following the instructions in [Get started (Cloud API)](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started).

Here are steps to follow to get started:
- Go to your [apps](https://developers.facebook.com/apps).
- [Create an app](https://developers.facebook.com/apps/create/).
- Select app type >> Business.
- You will be required to fill-in basic app information >> click **create app** button.
- You will be redirected to the Product section. Add `WhatsApp` as your product by clicking **set up**.

  ## Getting Credentials

This section will guide you on how to obtain whatsapp cloud credentials and Sarufi credentials if you are doing custom deployment. More details on how to create a permanent token and phone number can be found [here](#create-permanent-token).

<Tabs groupId="whatsapp-integration">
<TabItem value="sarufi-dashboard" label="Sarufi Dashboard">

**Whatsapp Cloud Credentials**

- On your Meta Developer dashboard, Navigate to `Whatsapp`-->`API setup`
- There, you will see a **Temporary Access Token** and WhatsApp test number with its **Phone Number ID**.
- Finally, verify the number you will be using for testing in the To field.


In this part of integration with WhatsApp, we will walk through the journey using either Sarufi Dashboard or self-served deployment (custom deployment) for integration.


## Getting Started

All the steps shown/illustrated here assume you already created a Sarufi account and have a bot created. If you don't have an account, you can create one [here](https://sarufi.io).

<Tabs groupId="whatsapp-integration" defaultValue="sarufi-dashboard">
<TabItem value="sarufi-dashboard" label="Sarufi Dashboard">

In this guide, we are going to use [Sarufi Dashboard](https://sarufi.io) to connect to the WhatsApp Cloud API. Sarufi is a no-code platform that allows you to build chatbots and deploy them to different channels.

- Log into your Sarufi account.
- Create a bot. You can follow the instructions [here](/docs/Getting-started/create-a-simple-chatbot).
- Navigate to settings in your bot, located at top right corner. Click on `Integration` >> `WhatsApp`
- Add your WhatsApp token and Phone Number ID. Read on how to get WhatsApp credentials [here](#getting-credentials). The system will create a random verification token for you. You can change it if you want to.

  ![WhatsApp creds](/img/dashboard-whatsapp-deployment-credentials.png)

- Once you have added your WhatsApp token and Phone Number ID, you are ready to deploy your bot to WhatsApp. Click on `Save` button then `Deploy`
- Wait for your job to finish. Once done, you will have a webhook URL presented to you. Copy the URL and follow the steps at [Setting up a WhatsApp webhook](#finalizing-whatsapp-set-up). You will also need to copy the verification token and paste it in your WhatsApp cloud account.

  ![WhatsApp webhook url](/img/dashboard-whatsapp-deployment-webhook-url.png)

- After setting up the webhook, you will need to subscribe to the message topic. Navigate to webhook fields --> click `manage` to subscribe to the `message` topic. Read more on webhook field subscription [here](#finalizing-whatsapp-set-up).
- When this is done, the bot is ready. Activate your bot in WhatsApp by sending it a text.
- In case you want to change some of your credentials from WhatsApp Cloud, just update your credentials in your dashboard and click `Update` button. Then `Re-deploy` again.
- You can view your bot logs by clicking `View Logs` button.
- You can see the deployed PizzaBot in whatsapp in the GIF [below](#test-your-whatsapp-chatbot).

</TabItem>
<TabItem value="custom-deployment" label="Custom Deployment">

With custom deployment, you will be able to host the bot on your own server. This is the best option if you want to have full control over your deployment. This section shows how to do custom deployment using Python. Other languages will be added soon.

- What you need

  You will need a [webhook](https://www.redhat.com/en/topics/automation/what-is-a-webhook) to receive whatsapp messages. The webhook provides a way for an application to notify another application when a new event has occurred. So whatsapp cloud will send messages to your webhook.

  There are several ways this can be done. This tutorial will guide you in using `Ngrok` or `replit`. Choose one that suites you.


<Tabs defaultValue="replit">
<TabItem value="ngrok" label="Using Ngrok">

This section illustrate how to use Ngrok to create a webhook. Ngrok is a multiplatform tunnelling, reverse proxy software that establishes secure tunnels from a public endpoint such as the internet to a locally running network service while capturing all traffic for detailed inspection and replay.

Make sure you have [ngrok](https://ngrok.com/) installed in your working machine.

You will have to modify some commands shown here to suite your working environment. The commands like `python3` and `pip3` will depend on your working environment. You may have to use `python` and `pip` instead.

- Create project folder.

  Create a project folder named `whatsapp-bot`. Navigate into it to create a virtual evironment named `whatsapp-bot-env`. Activate the environment.

  Run the command to make the magic 🔥 happen.

  - For Unix-based systems __[Linux and Mac]__

    - Install virtual environment

      This step is optional as you may have a Python virtual environment already installed. If not, you can install it by running the command below.

      ```bash
      sudo apt install python3-venv
      ```
    - Create project folder and virtual environment

      ```bash
      mkdir whatsapp-bot
      cd whatsapp-bot
      python3 -m venv whatsapp-bot-env
      source  whatsapp-bot-env/bin/activate
      ```
  
  - For Windows

    - Install a virtual environment

      This step is optional as you may have Python virtual environment already installed. If not, you can install it by running the command below.

      ```bash
      pip install virtualenv
      ```
    - Create the project folder and a virtual environment

      ```bash
      mkdir whatsapp-bot
      cd whatsapp-bot
      python -m venv whatsapp-bot-env
      whatsapp-bot-env\Scripts\activate.bat
      ```

- Clone Blueprint repo

  We are going to clone a [blueprint repo](https://github.com/Neurotech-HQ/sarufi-heyoo-blueprint.git) and install the required packages in our virtual environment.

  ```bash
  git clone https://github.com/Neurotech-HQ/sarufi-heyoo-blueprint.git
  cd sarufi-heyoo-blueprint
  pip3 install -r requirements.txt
  ```

- Create a file named `.env` in your working folder to hold environment variables. You can use a text editor to create the file.
  
   In the file add the following. Read on how to [get WhatsApp and Sarufi creds](#getting-credentials)

   ```text
    SARUFI_API_KEY = Your Sarufi API KEY
    SARUFI_BOT_ID   = Your Bot Id
    WHATSAPP_TOKEN  = Your Whatsapp token
    PHONE_NUMBER_ID = whatsapp phone number id
    VERIFY_TOKEN    = Your verify token
  ```
  :::note
  The verification token is a random string. You can just create a random string and use it as your verification token. You can use any random string, but make sure you don't lose it because you will need to use the same string when we are setting up the webhook.
  :::
  
- Once you have environment variables set, you are ready to fire 🚀 your `main.py` up in the activated virtual envirnoment.

  ```bash
  python3 main.py
  ```

  Run the command below to start ngrok.

  ```bash
  ./ngrok http 5000
  ```

  **`Note:`** keep the port number the same as used in `main.py`

- Finish up. After running the command, you will have to copy the URL ngrok provides. The URL looks like `https://xxxxxxxxxxx.ngrok.io`.

  With the provided URL, follow the steps at [Setting up WhatsApp webhooks](#finalizing-whatsapp-set-up).

  Copy the `VERIFY_TOKEN`, added as environment variable. Then paste into **verify token** section in your whatsapp cloud --> **verify and save**.

  You can read more about subscribing to message topics up [here](#finalizing-whatsapp-set-up).
  When this step is done, the bot is complete. Activate your WhatsApp bot by sending it a text.

- See the deployed WhatsApp PizzaBot in the gif [below](#test-your-whatsapp-chatbot).

</TabItem>
<TabItem value="replit" label="Using Replit">

- Log into your [Replit](https://replit.com/) account.
  
- Fork the repo [WhatsApp bot using Sarufi API and heyoo](https://replit.com/@neurotechafrica/sarufi-heyoo-blueprint) into your account.

- Navigate to Tools--> Secrets to create environment variables. Read [Getting WhatsApp and Sarufi credentials](#getting-credentials).

  Create Secrets as shown below.

    |Secrete key               | Description            |
    |:---                      |:---                    |
    |`PHONE_NUMBER_ID`         | Whatsapp cloud phone ID|
    |`WHATSAPP_TOKEN`          | Your whatsapp token    |
    |`SARUFI_API_KEY`          | Your sarufi API KEY   |
    |`SARUFI_BOT_ID`           | Your sarufi bot id     |
    | `VERIFY_TOKEN`           | Your verify token      |

  :::note 
  You can use any name for your secret keys. Just make sure you use the same name in your script.
  The verification token is a random string. You can just create a random string and use it as your verification token.
  :::

- Run the script
  
  After creating the secret keys, click `Run` button. A small webview window will open up with a URL that looks like `https://{your repl name}.{your replit username}.repl.co`.

  With the url, follow simple steps at [Setting whatsapp webhook](#finalizing-whatsapp-set-up).

- Final touches

  Go into your repl, copy the `VERIFY_TOKEN` --> paste into verify token in your whatsapp cloud --> **verify and save**.

  You can read more about subscribing to message topics up [here](#finalizing-whatsapp-set-up).
  When this step is done, the bot is complete. Activate your WhatsApp bot by sending it a text.
- See the deployed WhatsApp PizzaBot in the gif [below](#test-your-whatsapp-chatbot).

</TabItem>
</Tabs>


</TabItem>
</Tabs>


</TabItem>
<TabItem value="custom-deployment" label="Custom Deployment">

- Whatsapp Cloud Credentials

  Navigate to `Whatsapp`-->`API setup` to get your WhatsApp cloud `token` and `Phone Number ID` to be used.

  You will have the access token and Phone Number ID.

  ![How to get whatsapp token and Phone Number ID](/img/get_whatsapp_token.png)

- Getting Sarufi Credentials

  To authorize our chatbot, we are going to use our authorization keys from Sarufi. Log in into your [Sarufi Account](https://sarufi.io). Go to your Profile in your Account to get your authorization keys.

  ![Sarufi authorization keys](/img/sarufi_authorization.png)

  For **Bot ID**, Navigate to Settings in your bot and copy the `Bot ID`.

</TabItem>
</Tabs>

## Create Permanent token

With just few steps, you will be able to create a permanent token and add your phone number. This token will be used to authorize your bot to send messages on WhatsApp.

1. Create a System User

- Navigate to [Meta Business Suite](https://business.facebook.com/) --> Your account --> Settings (gear icon)

  ![Business Settings: Users](/img/business-settings-users.png)

- Navigate to `Users` --> `System Users` --> Click on `Add`
- Add name of system user --> Set role to `Admin` --> click `Save`

  ![Create System User](/img/create-system-user.png)

2. Add your App to Assets

- After creating a system user, navigate to `Assign Assets`

  ![Assign Assets](/img/assign-assets.png)

- Naviagate to `Apps` --> Select your app --> Grant it full control --> `Save changes`

  ![Adding App to assets](/img/add-app-to-assets.png)

3. Generate Permanent Access Token

  After adding the app to your assets, the next step is to generate a permanent access token. You will have a page that looks like the one below.

  ![Adding permanent access token](/img/added-app-to-assets.png)

- Click on `Generate New Token` --> Select an App --> Select your token expiration time.
- Add Permisions. Uou need to add the `whatsapp_business_management` and `whatsapp_business_messaging` permisions.
- Click `Generate Token` --> Copy the token and save it somewhere safe. You will need it in your script.

  ![Generate permanent token](/img/generate-permanent-access-token.png)

  You will have time to view your token. So make sure you copy it and save it somewhere safe. It is only shown once.

4. Add your production phone number

  Do this if you want to use your production phone number. If you want to use your test number, you can skip this step. Follow few steps to step your phone number

- Naviagate to your [Meta Developer Account](https://developers.facebook.com/apps/) --> Your app --> `WhatsApp` --> `API setup` --> `Add phone number`

  ![Add phone number in meta app](/img/meta-add-phone-number.png)

- Provide required details, then verify your phone number by entering the code received.
- After adding the phone number, scroll up in Meta Developer app dashboard to send and receive section. In the From field, select your phone number.
- You will have to copy your `Phone Number ID` and generate a permanent `access token` then paste them into Sarufi for deployment.

5. Add payment method

You will need to add a payment method to your Meta app. This is required for you to be able to send messages in WhatsApp. You can add a payment method by navigating to your Meta App dashboard  --> Products --> WhatsApp --> API setup then follow the instructions provided.

## Finalizing Whatsapp setup

In this section, we are going to finalize our WhatsApp setup. We are going to setup a webhook and subscribe to message topic.

- Setting up a WhatsApp webhook

  Navigate to your WhatsApp cloud account --> `Configuration` --> (Webhook) edit --> paste the URL into the Callback URL field.

  You will also need a verification token. Copy the token from either the dashboard or your script's environment variables  --> paste into verify token in your whatsapp cloud --> **verify and save**.
    
  ![Webhook setup](/img/webhook_setup.png)

- Webhook field subscription

  After verifing and saving your WhatsApp webook, navigate to webhook fields --> click `manage` to subscribe to the `message` topic.

  ![Webhook fields subscription](/img/webhook_subscription.png)

## Test your WhatsApp chatbot

Let's finish by testing our bot in WhatsApp.

Navigate to your _WhatsApp cloud account_ >> _API Setup_ >> scroll down to a field named `To`. Click `manage phone number` to add your phone number. Follow the instructions until the phone number is added.

Click **send message** to start testing your bot. You will receive a message from your test number which your will use in testing your bot.

![Send test message to your number](/img/whatsapp-send-test-message.png)

You can test WhatsApp by sending a message to your bot.

- Lets test our PizzaBot

  Showcasing the PizzaBot we have been working on, here are the responses of the bot deployed in WhatsApp.
  
  ![WhatsApp bot test](/gif/whatsapp-bot-sample.gif)

## What you learned

In this tutorial, you learned how to connect Sarufi to the WhatsApp Cloud API. You also learned how to configure and run WhatsApp.

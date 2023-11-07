---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WhatsApp

WhatsApp is a freeware, cross-platform messaging and Voice over IP (VoIP) service owned by Facebook, Inc. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other media.

WhatsApp is one of the most popular messaging apps in the world. It has over 2 billion active users and is available in 120 different languages.

![WhatsApp](/img/whatsapp-1900453_640.png)

## How to connect to WhatsApp Cloud API

To connect to WhatsApp Cloud API, you need to create a WhatsApp Business account. You can do this by following the instructions in the [Get started-cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started).

Here are steps to follow for you to get started: 
- Go to your [apps](https://developers.facebook.com/apps).
- [Create an app](https://developers.facebook.com/apps/create/).
- Select app type >> Business.
- You will be required to fill-in basic app informations >> click **create app** button.
- You will be redirected to Product section. Add `WhatsApp` as your product by clicking **set up**.
- On your left side bar, click whatsapp >> **API setup**
- Right there you will see a your **Tempoarary Access Token** and WhatsApp test number with its **Phone number ID**.
- Lastly verify the number you will be using for testing on the To field.


In this part of integration with whatsapp, I will walk you the journey using either Sarufi Dashboard or self-served deployment(custom deployment) for integration.


## Getting Started

All the steps shown/illustrated here assume you already created a Sarufi account and have a bot created. If you don't have an account, you can create one [here](https://sarufi.io).

<Tabs groupId="whatsapp-integration" defaultValue="sarufi-dashboard">
<TabItem value="sarufi-dashboard" label="Sarufi Dashboard">

In this guide, we are going to use [Sarufi Dashboard](https://sarufi.io) to connect to WhatsApp Cloud API. Sarufi is a no-code platform that allows you to build chatbots and deploy them to different channels.

- Log into your Sarufi account.
- Create a bot. You can follow the instructions [here](/docs/Getting-started/create-a-simple-chatbot).
- Navigate to settings in your bot, located at top right corner. Click on `Integration` >> `WhatsApp`
- Add your whatsapp token and phone number ID. Read on how to [get whatsapp creds](#getting-credentials). The system will create random verify token for you. You can change it if you want to.

  ![WhatsApp creds](/img/dashboard-whatsapp-deployment-credentials.png)

- Once you have added your whatsapp token and phone number ID, you are ready to deploy your bot to WhatsApp. Click on `Save` button then `Deploy`
- Wait for your job to finish. Once done, you will have a webhook url presented to you. Copy the url and follow simple steps at [Setting whatsapp webhook](#finalizing-whatsapp-set-up). You will also need to copy the verification token and paste it in your whatsapp cloud account.

  ![WhatsApp webhook url](/img/dashboard-whatsapp-deployment-webhook-url.png)

- After setting up webhook, you will need to subscribe to message topic. Navigate to webhook fields --> click `manage` to subscribe to `message` topic. Read on [webhook field subscription](#finalizing-whatsapp-set-up).
- When done ,you are good to go... fire up your bot in whatsapp by sending text.
- In case you want to change some of your credentials from WhatsApp Cloud, just update your credentials in your dashboard and click `Update` button. Then `Re-deploy` again.
-You can view your bot logs by clicking `View Logs` button.
- You can see the deployed Pizza bot in whatsapp in the gif [below](#test-your-whatsapp-chatbot)

</TabItem>
<TabItem value="custom-deployment" label="Custom Deployment">

With custom deployment, you will be able to host the deployment on your own server. This is the best option if you want to have full control of your deployment. This section shows how to do custom deployment using python. Other languages will be added soon.

- What you need

  You will need a [webhook](https://www.redhat.com/en/topics/automation/what-is-a-webhook) to receive whatsapp messages. The webhook provides a way for an application to notify another application when a new event has occurred. So whatsapp cloud will send messages to your webhook.

  There are several ways this can be done. This tutorial will guide you in using `Ngrok` or `replit`. Choose one that suites you.


<Tabs defaultValue="replit">
<TabItem value="ngrok" label="Using Ngrok">

This section illustrate how to use Ngrok to create a webhook. Ngrok is a multiplatform tunnelling, reverse proxy software that establishes secure tunnels from a public endpoint such as the internet to a locally running network service while capturing all traffic for detailed inspection and replay.

Make sure you have [ngrok](https://ngrok.com/) installed in your working machine.

You will have to modify some commands shown here to suite your working environment. The commands like `python3` and `pip3` will depend on your working environment. You may have to use `python` and `pip` instead.

- Create project folder.

  Lets Make a project folder named `whatsapp-bot`. Navigate into it to create virtual evironment `whatsapp-bot-env`. Activate the environment

  Run the command to make the magic 🔥 happen.

  - For unix based systems __[Linux and Mac]__

    - Install virtual environment

      This step is optional as you may have python virtual environment already installed. If not, you can install it by running the command below.

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
  
  - For windows

    - Install virtual environment

      This step is optional as you may have python virtual environment already installed. If not, you can install it by running the command below.

      ```bash
      pip install virtualenv
      ```
    - Create project folder and virtual environment

      ```bash
      mkdir whatsapp-bot
      cd whatsapp-bot
      python -m venv whatsapp-bot-env
      whatsapp-bot-env\Scripts\activate.bat
      ```

- Clone Blueprint repo

  We are going to clone a [blueprint repo](https://github.com/Neurotech-HQ/sarufi-heyoo-blueprint.git) and install required packages in our virtual environment.

  ```bash
  git clone https://github.com/Neurotech-HQ/sarufi-heyoo-blueprint.git
  cd sarufi-heyoo-blueprint
  pip3 install -r requirements.txt
  ```

- Create a file named `.env` in your working folder to hold environment variables. Use your text editor to create the file.
  
   In the file add the following. Read on how to [get WhatsApp and Sarufi creds](#getting-credentials)

   ```text
    SARUFI_API_KEY = Your Sarufi API KEY
    SARUFI_BOT_ID   = Your Bot Id
    WHATSAPP_TOKEN  = Your Whatsapp token
    PHONE_NUMBER_ID = whatsapp phone number id
    VERIFY_TOKEN    = Your verify token
  ```
  :::note
  The verification token is a random string. You can just create a random string and use it as your verification token. You can use any random string, but make sure you keep it because you will need to use the same string when we are setting up the webhook.
  :::
  
- Once you have environment variables set, you are ready to fire 🚀 your `main.py` in activated virtual envirnoment.

  ```bash
  python3 main.py
  ```

  Then run the command below to start ngrok

  ```bash
  ./ngrok http 5000
  ```

  **`Note:`** keep the port number the same as used in `main.py`

- Finish up. After ruuning the command, you will have to copy the url ngrok provides. The url looks like `https://xxxxxxxxxxx.ngrok.io`

  With the provided url, follow simple steps at [Setting whatsapp webhook](#finalizing-whatsapp-set-up).

  Copy the `VERIFY_TOKEN`, added as environment variable. Then paste into **verify token** section in your whatsapp cloud --> **verify and save**.

  We are heading a the best part of this journey. Just take time to [subscribe to message topic](#finalizing-whatsapp-set-up).
  When done ,you are good to go... fire up your bot in whatsapp by sending text.

  🏁 When done with saving the token and url, go on to text your bot.
- See the deployed Pizza bot in whatsapp in the gif [below](#test-your-whatsapp-chatbot)

</TabItem>
<TabItem value="replit" label="Using Replit">

- Log into your [Replit](https://replit.com/) account.
  
- Fork the repo [Whatsapp bot using sarufi API and heyoo](https://replit.com/@neurotechafrica/sarufi-heyoo-blueprint) into your account.

- Navigate to Tools--> Secrets to create environment variables. Read [Getting whatsapp and sarufi creds](#getting-credentials).

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
  
  After creating the secret keys, click `Run` button. A small webview window will open up with a url that looks like `https://{your repl name}.{your replit username}.repl.co`.

  With the url, follow simple steps at [Setting whatsapp webhook](#finalizing-whatsapp-set-up).

- Final touches

  Go into your repl, copy the `VERIFY_TOKEN` --> paste into verify token in your whatsapp cloud --> **verify and save**.

  We are reaching at a good point with the set-up. Lets [subscribe to message topic](#finalizing-whatsapp-set-up).
  When done ,you are good to go... fire 🚀 up your bot in whatsapp by sending text.
- Take a look at the deployed Pizza bot in whatsapp in the gif [below](#test-your-whatsapp-chatbot)

</TabItem>
</Tabs>


</TabItem>
</Tabs>


## Getting Credentials

This section will guide you on how to obtain whatsapp cloud credentials and sarufi credentials if you are doing custom deployment.

<Tabs groupId="whatsapp-integration">
<TabItem value="sarufi-dashboard" label="Sarufi Dashboard">

- Whatsapp cloud creds

  Navigate to `Whatsapp`-->`API setup` to get whatsApp cloud `token` and `phone number ID` to be used.

  You will have access token and phone number id.

  ![How to get whatsapp token and phone number ID](/img/get_whatsapp_token.png)

</TabItem>
<TabItem value="custom-deployment" label="Custom Deployment">

- Whatsapp cloud creds

  Navigate to `Whatsapp`-->`API setup` to get whatsApp cloud `token` and `phone number ID` to be used.

  You will have access token and phone number id.

  ![How to get whatsapp token and phone number ID](/img/get_whatsapp_token.png)

- Getting Sarufi Credentials

  To authorize our chabot, we are are going to use authorization keys from sarufi. Log in into your [sarufi account](https://sarufi.io). Go to your Profile on account to get Authorization keys

  ![Sarufi authorazation keys](/img/sarufi_authorization.png)

  For **Bot ID**, Navigate to settings(in your bot)>> copy `bot ID`.

</TabItem>
</Tabs>


## Finalizing Whatsapp set-up

In this section, we are going to finalize our whatsapp set-up. We are going to set webhook and subscribe to message topic.

- Setting whatsapp webhook

  Navigate to your whatsapp cloud account --> `configuration` -->(Webhook) edit --> then paste the url into callback url.

  You will also need a verification token. So copy the token from either dashboard or your script's environment variable  --> paste into verify token in your whatsapp cloud --> **verify and save**.
    
  ![Web hook setup](/img/webhook_setup.png)

- Webhook field subscription

  After veryfing and saving whatsapp webook, navigate to webhook fields --> click `manage` to subscribe to `message` topic.

  ![Webhook fields subscription](/img/webhook_subscription.png)

## Test Your WhatsApp ChatBot

Lets finish up by testing our bot in whatsapp.

Navigate to your _whatsapp cloud account_ >> _API setup_ >> scroll down to a field written `To`. Click manage phone number to add you phone number. Follow instructions till you finish

Click **send message** to start testing your bot. You will receive a message from your test number which your will use in testing your bot.

![Send Test Message to Your Number](/img/whatsapp-send-test-message.png)

You can test WhatsApp by sending a message to your bot.

- Lets test our PizzaBot

  With the Pizza bot we have been working through, here is the bot responses deployed in whatsapp.
  
  ![WhatsApp bot test](/img/whatsapp-bot-sample.gif)

## What you learned

In this tutorial, you learned how to connect Sarufi to WhatsApp Cloud API. You also learned how to configure and run WhatsApp.

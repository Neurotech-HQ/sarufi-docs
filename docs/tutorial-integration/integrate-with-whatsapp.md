---
sidebar_position: 2
---

# WhatsApp

WhatsApp is a freeware, cross-platform messaging and Voice over IP (VoIP) service owned by Facebook, Inc. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other media.

WhatsApp is one of the most popular messaging apps in the world. It has over 2 billion active users and is available in 120 different languages.

![WhatsApp](/img/whatsapp-1900453_640.png)

## How to connect to WhatsApp Cloud API

To connect to WhatsApp Cloud API, you need to create a WhatsApp Business account. You can do this by following the instructions in the [Get started-cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started).

In this part of integration with whatsapp, I will walk you the journey using `python`.

### What you need

You will need a [webhook](https://www.redhat.com/en/topics/automation/what-is-a-webhook) to receive whatsapp messages. There are several ways this can be done. This tutorial will guide you in using [ngrok](#using-ngrok) or [replit](#using-replit). In this blueprint the main library used is [heyoo](https://github.com/Neurotech-HQ/heyoo)

## Using Ngrok

Make sure you have [ngrok](https://ngrok.com/) installed in your working machine.

### Quick setup

Have [sarufi package](https://github.com/Neurotech-HQ/sarufi-python-sdk) installed on your machine before launching your whatsapp bot.

- Create project folder.

  Lets Make a project folder named `whatsapp-bot`. Navigate into it to create virtual evironment `whatsapp-bot-env`. Activate the environment

  Run the command to make the magic 🔥 happen.

  ```bash
  mkdir whatsapp-bot
  cd whatsapp-bot
  python -m venv whatsapp-bot-env
  source  whatsapp-bot-env/bin/activate
  ```

- Clone Blueprint repo

  We are going to clone a [blueprint repo](https://github.com/Neurotech-HQ/sarufi-heyoo-blueprint.git) and install required packages in our virtual environment.

  ```bash
  git clone https://github.com/Neurotech-HQ/sarufi-heyoo-blueprint.git
  cd sarufi-heyoo-blueprint
  pip3 install -r requirements.txt
  ```

- Create a file named `.env` in your working folder to hold environment variables by running.
  
  ```bash
  touch .env
  ```
  
   In the file add the following. Read on how to [get whatsapp creds](#whatsapp-cloud-creds)

   ```bash
    SARUFI_API_KEY = Your Sarufi API KEY
    SARUFI_BOT_ID   = Your Bot Id
    WHATSAPP_TOKEN  = Your Whatsapp token
    PHONE_NUMBER_ID = whatsapp phone number id
  ```
  
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

  With the provided url, follow simple steps at [Setting whatsapp webhook](#setting-whatsapp-webhook).

  Open `main.py`, copy the `VERIFY_TOKEN`--> paste into verify token in your whatsapp cloud --> **verify and save**.

  We are heading a the best part of this journey. Just take time to [subscribe to message topic](#webhook-field-subscription).
  When done ,you are good to go... fire up your bot in whatsapp by sending text.

  🏁 When done with saving the token and url, go on to text your bot.

## Using Replit

- Log into your [Replit](https://replit.com/) account.
  
  Fork the repo [Whatsapp bot using sarufi API and heyoo](https://replit.com/@neurotechafrica/sarufi-heyoo-blueprint) into your account.

  Navigate to Tools--> Secrets to create environment variables. Read [Getting whatsapp creds](#whatsapp-cloud-creds) and [sarufi credentials](#getting-sarufi-credentials).

  Create

    |Secrete key               | Description            |
    |:---                      |:---                    |
    |`PHONE_NUMBER_ID`         | Whatsapp cloud phone ID|
    |`WHATSAPP_TOKEN`          | Your whatsapp token    |
    |`SARUFI_API_KEY`         | Your sarufi API KEY   |
    |`SARUFI_BOT_ID`           | Your sarufi bot id     |

- Run the script
  
  After creating the secret keys, run your `main.py`. A small webview window will open up with a url that looks like `https://{your repl name}.{your replit username}.repl.co`.

  With the url, follow simple steps at [Setting whatsapp webhook](#setting-whatsapp-webhook).

- Final touches

  Go into your repl, copy the `VERIFY_TOKEN` --> paste into verify token in your whatsapp cloud --> **verify and save**.

  We are reaching at a good point with the set-up. Lets [subscribe to message topic](#webhook-field-subscription).
  When done ,you are good to go... fire 🚀 up your bot in whatsapp by sending text.

## Whatsapp cloud creds

Navigate to `Whatsapp`-->`API setup` to get whatsApp cloud `token` and `phone number ID` to be used.

You will have access token and phone number id.

![How to get whatsapp token and phone number ID](/img/get_whatsapp_token.png)

## Getting Sarufi Credentials

To authorize our chabot, we are are going to use authorization keys from sarufi. Log in into your [sarufi account](https://sarufi.io). Go to your Profile on account to get Authorization keys

![Sarufi authorazation keys](/img/sarufi_authorization.png)

For **Bot ID**, Navigate to settings(in your bot)>> copy `bot ID`.

## Setting whatsapp webhook

Navigate to your whatsapp cloud account --> `configuration` -->(Webhook) edit --> then paste the url into callback url.

For Verify token, open `main.py` copy the `VERIFY_TOKEN` --> paste into verify token in your whatsapp cloud --> **verify and save**.
  
![Web hook setup](/img/webhook_setup.png)

## Webhook field subscription

After veryfing and saving whatsapp webook, navigate to webhook fields --> click `manage` to subscribe to `message` topic.

![Webhook fields subscription](/img/webhook_subscription.png)

## How to test WhatsApp

Lets finish up by testing our bot in whatsapp.

Navigate to your _whatsapp cloud account_ >> _API setup_ >> scroll down to a field written `To`. Click manage phone number to add you phone number. Follow instructions till you finish

Click **send message** to start testing your bot. You will receive a message from your test number which your will use in testing your bot.

![Send Test Message to Your Number](/img/whatsapp-send-test-message.png)

You can test WhatsApp by sending a message to your bot.

### Lets test our PizzaBot

With the Pizza bot we have been working through, here is the bot responses deployed in whatsapp.
![WhatsApp bot test](/img/whatsapp-bot-sample.gif)

## What you learned

In this tutorial, you learned how to connect Sarufi to WhatsApp Cloud API. You also learned how to configure and run WhatsApp.

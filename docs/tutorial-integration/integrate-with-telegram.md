---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Telegram

Telegram is a cloud-based instant messaging and voice over IP service. It was developed by the Russian entrepreneur Pavel Durov and his brother Nikolai Durov, who were also the founders of VK.com and Odnoklassniki.

Telegram is one of the most popular messaging apps in the world. It has over 500 million active users and is available in 20 different languages.

![Telegram](/img/telegram-5348490_640.png)

## How to connect to Telegram 🔗

To connect to Telegram, you need to create a Telegram bot. You can do this by following the instructions in the [Telegram documentation](https://core.telegram.org/bots#6-botfather). The instructions are as follows:

1. Open Telegram and search for `@BotFather`.
2. Click on the bot to start a chat.
3. Send the `/newbot` command to create a new bot.
4. Follow the instructions to create a new bot.

Once you have created a bot, you will receive a `token`. This token is used to authenticate your bot with Telegram.

In this guide we are going to use [Sarufi](https://sarufi.io/) to connect to Telegram. Sarufi is a platform that allows you to create chatbots without any coding knowledge. It is a no-code platform that allows you to create chatbots using a simple drag-and-drop interface. You will be able to deploy your chatbot directly to Telegram using Sarufi Dashboard. You have also the option to use your own server to host your chatbot as custom deployment.

## Gettting started

Deploying your chatbot to Telegram is easy. You can deploy your chatbot to Telegram using Sarufi Dashboard or using your own server. We are going to cover both methods in this guide.

<Tabs>
<TabItem value="sarufi-dashboard" label="Sarufi Dashboard">

Sarufi Dashboard provides a simple interface to deploy your chatbot to Telegram. You can create a chatbot from scratch or use one of the templates available in Sarufi Dashboard. Assuming that you already have a chatbot created in Sarufi Dashboard, you can deploy it to Telegram by following the steps below:

1. Log in to Sarufi Dashboard.
2. Click on the chatbot you want to deploy to Telegram.
3. Navigate to settings >> Integrations >> Telegram.
4. Add your Telegram credentials/Bot's Token

    Copy your Bot's Token obtained from BotFather.

    You have  a section to add a `Start Message` which will be bot's reponse when a user sends `/start` command to your bot. You can customize the message to your preference. You have the following variable to use in your message:-

    - `{name}` - User's name. This is the name the user has on Telegram
    - `{bot_name}` - Bot's name from Sarufi Dashboard

    Here is example of a start message:-

    ```text
    Hi {name}, Welcome To {bot_name}, How can i help you?
    ```

    ![Adding Telegram credentials](/img/dashboard-telegram-deployment-credentials.png)

    Click `save` then `Deploy`

5. Wait for your job to finish. Once done, you will have the section status change to `Live`

    ![Telegram deployment status](/img/dashboard-telegram-deployment-completed.png)

    This means that your bot is live on Telegram. You can now test your bot by opening it in Telegram app. You have a section to view your bot's Logs. You can view the logs to see what your bot is doing.

6. Test your telegram Bot by opening it in Telegram app.

  To make changes to your bot, you can edit your bot in Sarufi Dashboard, `Update` then `Re-deploy` it to Telegram. You can view your bot logs by clicking `View Logs` button.
  
  Take look at the sample bot we have been working on [here](#test-your-telegram-bot)

</TabItem>
<TabItem value="custom-deployment" label="Custom Deployment">

With custom deployment, you can deploy your chatbot to Telegram using your own server. You can use any server that supports Python and Flask/FastAPI. You can also use a cloud service like Heroku or AWS. 

We have blueprint to illustrate how to deploy your either using polling or webhook method. You can read more about these methods, [polling vs Webhook](/blog/telegram-webhook-vs-polling)

Basically we have two methods to deploy your bot to Telegram:-

<!-- Custom Integration tabs begin here -->

<Tabs defaultValue="webhook">
<TabItem value="polling" label="Using Polling">

You will have to modify some commands shown here to suite your working environment. The commands like `python3` and `pip3` will depend on your working environment. You may have to use `python` and `pip` instead.


1.  Creating project folder and Virtual Environment 📂

  - Create a project folder

    Lets create a project folder, `Telegram bot` and navigate to it.

    ```bash
    mkdir 'Telegram bot'
    cd 'Telegram bot'
    ```
  - Creating virtual environment and activating it

    You can can set up your evironment according to your preferences,either `virtualenv` or `conda`. Read more on [creating virtual environment](https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/).
    - Unix based systems
      - Install virtual environment

        This step is optional as you may have python virtual environment already installed. If not, you can install it by running the command below.

        ```bash
        sudo apt install python3-venv
        ```
      - Create and activate virtual environment

        ```bash
        python3 venv -m sarufi_telegram
        source sarufi_telegram/bin/activate
        ```

    - Windows
      - Install virtual environment

        This step is optional as you may have python virtual environment already installed. If not, you can install it by running the command below.

        ```bash
        pip install virtualenv
        ```

      - Create and activate virtual environment

        ```bash
        python venv -m sarufi_telegram
        .\sarufi_telegram\Scripts\activate
        ```

2. Clone the repo and install packages 📦

  The shortest route is to use Telegram blueprint for Sarufi, which is available in our Github repository. You can find it [here](https://github.com/Neurotech-HQ/telegram-chatbot-blueprint) by clonning the directory.

  ```bash
  git clone https://github.com/Neurotech-HQ/telegram-chatbot-blueprint.git
  cd telegram-chatbot-blueprint
  pip3 install -r requirements.txt
  ```

3. Configure Environment variables ⚙

  After installing packages, we need to configure our credentials. In `telegram-chatbot-blueprint`, create a file(`.env`) using your text-editor to hold environment variables.

  Open `.env` in the editor to edit the details with your credentials for sarufi and telegram. Then add the following:-

  ```text
  SARUFI_API_KEY =Your Sarufi API Key
  SARUFI_BOT_ID = bot id
  TELEGRAM_TOKEN = telegram token
  START_MESSAGE = Hi {name}, Welcome To {bot_name}, How can i help you?
  ```

  The `START_MESSAGE` will be the bot's response when `/start` command is sent by user.

4. How to run Telegram 🚀

  To run Telegram bot, simply run `main.py` file after configuring above creditials.

  ```bash
  python3 main.py
  ```

  **NOTE:** _All operations are carried out in the active evironment in case you use virtual environment_

  Below is a sample of our Pizza bot we have been working on, [view chatbot](#test-your-telegram-bot).

</TabItem>

<TabItem value="webhook" label="Using Webhook">

You can use any server that supports Python and Flask/FastAPI. You have a lot of options on how to do custom deployment. You can use replit, Heroku and many other services. I'll be using ngrok to expose my local server to the internet. The procedures are the same for other services.

We have a blueprint to guide you on how to deploy chatbot via replit. Just fork  [Sarufi Telegram Webhook repl](https://replit.com/@neurotechafrica/sarufi-telegram-webhook-blueprint) and you're ready to go. 

In this section we are going to use `ngrok` to expose our local server to the internet. The steps are as follows:-

You will have to modify some commands shown here to suite your working environment. The commands like `python3` and `pip3` will depend on your working environment. You may have to use `python` and `pip` instead.

1. Ngrok installation

  Make sure you have ngrok installed in your local machine. You can follow instructions [here](https://ngrok.com/download) to install ngrok.

2. Quick Project Setup

  - Create a project directory `Telegram bot`.

    This is the directory that will hold our project. You can name it anything you want.

    ```bash
    mkdir 'Telegram bot'
    cd 'Telegram bot'
    ```

  - Make Virtual Environment
    
    You will have to modify some commands shown here to suite your working environment. The commands like `python3` and `pip3` will depend on your working environment. You may have to use `python` and `pip` instead.

    Using virtual environment is a good practice, so we are going to create one. You can read more on [why use virtual environment](https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/). We shall install all necessary packages in the environment

    - Unix based systems

      - Install virtual environment
      
        This step is optional as you may have python virtual environment already installed. If not, you can install it by running the command below.

        ```bash
        sudo apt install python3-venv
        ```
        
      - Create virtual environment and activate it

        ```bash
        python3 -m venv sarufi
        source sarufi/bin/activate
        ```

    - Windows
      - Install virtual environment

        This step is optional as you may have python virtual environment already installed. If not, you can install it by running the command below.

        ```bash
        pip install virtualenv
        ```

      - Create virtual environment and activate it
  
        ```bash
        virtualenv sarufi
        .\sarufi\Scripts\activate
        ```

3. Clone repo and install requirements

  - Clone and install requirements.

    In this part, we are going to clone the [Sarufi Telegram Chatbot deployment Blueprint](https://github.com/Neurotech-HQ/sarufi-telegram-webhook-blueprint) and install the packages.

    Run the commands below

    ```bash
    git clone https://github.com/Neurotech-HQ/sarufi-telegram-webhook-blueprint.git
    cd sarufi-telegram-webhook-blueprint
    pip3 install -r requirements.txt
      ```

  - Environment variables

    After installing packages, we need to configure our credentials. In `telegram-chatbot-blueprint`, create a file `.env` to hold environment variables. You will need to obtain your credentials from Sarufi and Telegram. Read more on how to get your credentials [below](#get-credentials).

    In `.env`, we are going to add the following credetials. Using your favourite text editor add the following:-

    ```text
    SARUFI_API_KEY = your API KEY
    SARUFI_BOT_ID= bot id
    TELEGRAM_BOT_TOKEN = telegram token
    START_MESSAGE= Hi {name}, Welcome To {bot_name}, How can i help you
    ```

    **Note**: The Start Message will be bot's reponse when a user sends /start command to your bot.

    You can customize the message to your preference. You have the following variable that you can use in your start message to make it more personalized:-

    - {name} - User's name. This is the name the user has on Telegram
    - {bot_name} - Bot's name from Sarufi Dashboard

4. Starting ngrok server

  Ngronk is a tool that allows you to expose a web server running on your local machine to the internet.

  ```bash
  ngrok http 8000
  ```
  You will have a public https url indicating that its forwarding to your `localhost:8000`

5. Set Webhook Url

  We are going to set the webhook url to our bot. This is telling telegram server to send updates to our bot via specified url. This way our server can rest whenever there is no update. With this option you can deploy your chatbot as a lambda function.

  Using any of favourate API testing client or curl, set the webhook url as shown below

  ```bash
  curl --request POST 'https://api.telegram.org/bot<your bot token>/setWebhook?url=<your ngrok public url>'
  ```
  **NOTE:** The port number(for this case, 8000) matches the port used in `main.py`

6. Running your bot

  Run python script. Its the time you have been waiting for. Lets lauch 🚀 our bot. 

  ```python
  python3 main.py
  ```
  **NOTE:** All operations are done in activated virtual environment for convience

  Open your telegram app, search for your bot --> Send it a text. You can see a sample bot [below](#test-your-telegram-bot)


## Get Credentials

- Getting Sarufi credentials.
  
  To authorize our chabot, we are are going to use authorization keys from sarufi. Log in into your [sarufi account](https://sarufi.io). Go to your Profile on account to get Authorization keys(client ID and client secret)

  ![Sarufi authorazation keys](/img/sarufi_authorization.png)


- Telegram bot's Token

  To create a chatbot on Telegram, you need to contact the [BotFather](https://telegram.me/BotFather), which is essentially a bot used to create other bots.

  To connect to Telegram, you need to create a Telegram bot. You can do this by following the instructions in the [Telegram documentation](https://core.telegram.org/bots#6-botfather). The instructions are as follows:

  1. Open Telegram and search for `@BotFather`.
  2. Click on the bot to start a chat.
  3. Send the `/newbot` command to create a new bot.
  4. Follow the instructions to create a new bot.

  Once you have created a bot, you will receive a `token`. This token is used to authenticate your bot with Telegram.

</TabItem>
</Tabs>

<!-- Custom Integration tabs end here -->

</TabItem>
</Tabs>


:::note
The `Start Message` will be bot's reponse when a user sends `/start` command to your bot.

You can customize the message to your preference. You have the following variable  that you can use in your start message to make it more personalized:-

- `{name}` - User's name. This is the name the user has on Telegram
- `{bot_name}` - Bot's name from Sarufi Dashboard

Here is example of a start message:-

```text
Hi {name}, Welcome To {bot_name}, How can i help you?
```
:::

## Test Your Telegram Bot

To test your Telegram chatbot, you can send a message to your bot on the Telegram app. You can also use the Telegram API to send messages to your bot.

1. Open Telegram and search for your bot by name.
2. Click on the bot to start a chat.
3. Send a message to your bot and see how it responds.


Here is the test sample of our Pizza bot we have been working on.

![Pizza bot test](/gif/telegram-bot-sample.gif)

## What you learned 👨🏽‍💻

In this tutorial, you learned how to connect Sarufi to Telegram and how to configure and run your chatbot in Telegram. You also learned how to test your chatbot by sending messages to it through the Telegram app or using the Telegram API. With this knowledge, you can now create your own custom chatbot and connect it to Telegram using Sarufi.

---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Messenger

Messenger is a messaging app and platform developed by Facebook, Inc. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other media.

Messenger is one of the most popular messaging apps in the world. It has over 2 billion active users and is available in 120 different languages.

## How to connect to Messenger

To get started using this blueprint, you will need credentials which you can get from [Facebook Developer Portal](https://developers.facebook.com/) after creating an app. Note that the bot will be used on a page so you will need to create a page.

Here are steps to follow for you to get started:

- [Go to your apps](https://developers.facebook.com/apps)
- [create an app](https://developers.facebook.com/apps/create/)
- On `Which use case do you want to add to your app?`, select **Other** >> Next
- Select Business >> Business
- It will prompt you to enter basic app informations
- It will ask you to add products to your app. Add Messenger
- Create a page if you have none as the bot will be used on the page
- Get `access token`.

## Getting Started

Deploying your messenger bot can be either done using either Sarufi Dashboard or your own server. We are going to cover both ways.

<Tabs defaultValue="sarufi-dashboard">
<TabItem value="sarufi-dashboard" label="Sarufi Dashboard">

Sarufi Dashboard provide a quick way to deploy your bot. You can deploy your bot in just a few clicks. You can also use it to manage your bot. You can view your bot logs and many more. To get started, you will need to have a [sarufi account](https://sarufi.io).

Steps:
- Log in into your [sarufi account](https://sarufi.io). 

    Go to your Dashboard to create a bot. Click `Create Bot` button. Enter your bot name and click `Create Bot` button

- Add messenger credentials

    Navigate to settings >> Integrations >> Facebook Messenger. Enter your page access token and Verify token. Click Save button. Then click `Deploy` button.

    ![Adding Messenger credentials in sarufi dashboard](/img/dashboard-messenger-deployment-credentials.png)

- Wait for your job to finish. Once done, you will have a webhook url presented to you. Copy the url and follow simple steps at [setting messenger webhook](#finalize-messenger-setup).

    ![Messenger webhook url](/img/dashboard-messenger-deployment-webhook-url.png)

- In case you want to change some of your credentials, just update your credentials in your dashboard and click `Update` button. Then `Re-deploy` again.
- You can view your bot logs by clicking `View Logs` button.

</TabItem>

<TabItem value="custom-deployment" label="Custom Deployment">

This section covers how you can set up your own server to deploy your bot. We are going to use python as our programming language. The guide on other languages will be added soon.

We are going to cover the work-how of either using [ngrok](https://ngrok.com) or [replit](https://replit.com) to deploy our bot.

The main library used in the deployement is [Pymessenger](https://github.com/davidchua/pymessenger).

<Tabs>

<TabItem value="Replit" label="Using Replit">

Replit provides an in-browser IDE and compute resources to develop and host applications from a web browser. It is an online IDE, which means you can access it from any modern web browser without having to install or configure anything. Its a good place to deploy your bot.

Steps

We are going to cover the steps briefly here.

- Log into your [Replit](https://replit.com/) account.

  Fork the repo [Sarufi bot deployed on messenger](https://replit.com/@neurotechafrica/sarufi-messenger-blueprint) into your account.

  Navigate to `Tools`--> `Secrets` to create environment variables. We have discussed on how to get page access token at introduction part where as for sarufi view instructions here [get sarufi credentials](#getting-sarufi-credentials).

     Create
    |Key | Description|
    |:---|:---|
    |SARUFI_API_KEY| Your sarufi API key|
    |PAGE_ACCESS_TOKEN| Your facebook page token|
    |SARUFI_BOT_ID| Id of bot to be deployed|
    |VERIFY_TOKEN| A random string to be used as verification token|

- Run your repl

    After adding the secret keys, click `Run` button. A small webview window will open up with a url that looks like `https://{your repl name}.{your replit username}.repl.co`. Copy the url as it will be needed when setting up the webhook.

- Finish up the setup

    To finalize the process, we are going to set up webhook and subscribe to webhook fields. Read [Finalize Messenger Setup](#finalize-messenger-setup) to finish up the setup.

- Test your bot

    Open your messenger app/web, search for your page name. Send messages to it. The messages will be redirected to your bot. Here is the sample of our pizza bot deployed. View a sample of our [pizza bot](#pizza-bot-test).


</TabItem>
<TabItem value="ngrok" label="Using Ngrok">

This section illustrate how to use Ngrok to create a webhook. Ngrok is a multiplatform tunnelling, reverse proxy software that establishes secure tunnels from a public endpoint such as the internet to a locally running network service while capturing all traffic for detailed inspection and replay.


Steps

You will have to modify some commands shown here to suite your working environment. The commands like `python3` and `pip3` will depend on your working environment. You may have to use `python` and `pip` instead.

1. Make sure you have [ngrok](https://ngrok.com) installed in your machine.
2. Make Project folder and Virtual environment

    Lets Make a project folder named `messenger-bot`. Navigate into it to create virtual evironment `messsenger-bot-env`. Activate the environment.

    Run the command to make the magic happen

    - Create a project directory `Telegram bot`.

    This is the directory that will hold our project. You can name it anything you want.

    ```bash
    mkdir 'Messenger chatbot'
    cd 'Messenger chatbot'
    ```

  - Make Virtual Environment

    Using virtual environment is a good practice, so we are going to create one. You can read more on [why use virtual environment](https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/). We shall install all necessary packages in the environment

    - Unix based systems
        - Install virtual environment
        
        This step is optional as you may have python virtual environment already installed. If not, you can install it by running the command below.

        ```bash
        sudo apt install python3-venv
        ```
        
        - Create virtual environment and activate it

        ```bash
        python3 -m venv sarufi-messenger
        source sarufi-messenger/bin/activate
        ```

    - Windows
      - Install virtual environment

        This step is optional as you may have python virtual environment already installed. If not, you can install it by running the command below.

        ```bash
        pip install virtualenv
        ```

      - Create virtual environment and activate it
  
        ```bash
        virtualenv sarufi-messenger
        .\sarufi-messenger\Scripts\activate
        ```

3. Clone the repo and install requirements

    ```bash
    git clone https://github.com/Neurotech-HQ/sarufi-messenger-blueprint.git
    ```

    Make sure you are in activated environment, then run the following

    ```bash
    cd sarufi-messenger-blueprint
    pip3 install -r requiremnts.txt
    ```

4. Add credentials

    We are going to keep our credentials in `.env` file. You can use either a text editor or command line to creat it. With messenger page access token, we covered it previously. Then for sarufi api key, just follow this to [get sarufi credentials](#getting-sarufi-credentials)

    In the file, we are going to add the following

    ```bash
    SARUFI_API_KEY=Your sarufi API key
    PAGE_ACCESS_TOKEN = Your facebook page token
    SARUFI_BOT_ID= Id of bot to be deployed
    VERIFY_TOKEN = A random string to be used as verification token
    ```
    :::note
    The verification token is a random string. You can just create a random string and use it as your verification token. You can use any random string, but make sure you keep it because you will need to use the same string when we are setting up the webhook.
    :::

6. Start the server and ngrok

    - Run the script to start the server

        ```bash
        python3 main.py
        ```

    - Start ngrok

        This will create a public url to access the local server. The url looks like `https://xxxxxxxxxxx.ngrok.io`. We shall use this url to set up our webhook.

        ```bash
        ./ngrok http 8000
        ```
    
    **`Note:`** Keep the port number is the same as used in `main.py`.
7. Chatbot at work

    Open your messenger app/web, search for your page name. Send messages to it. The messages will be redirected to your bot. Here is the sample of our pizza bot deployed. View a sample of our [pizza bot](#test-your-messenger-chatbot).

</TabItem>

</Tabs>

- Getting sarufi credentials

    To authorize our chabot, we are are going to use authorization keys from sarufi. Log in into your [sarufi account](https://sarufi.io). Go to your Profile to get API key.

    ![Sarufi API key](/img/sarufi_authorization.png)



</TabItem>

</Tabs>

## Finalize Messenger Setup

We are going to finalize the setup by setting up webhook and subscribe to messages and messaging_postback.

1. Setting webhook

    After starting ngrok, you will have a public url to access the local server. The url looks like `https://xxxxxxxxxxx.ngrok.io`. Navigate into your facebook developer account. On the webhooks section, click `messenger` >> `settings`.

    ![messenger settings section](/img/messenger-settings-section.png)

    Scroll down to webhook section of messenger, click `Add callback url`. Then paste the provided url into url section. Copy the `VERIFY_TOKEN`, paste it into verify token in messenger >> **Verify and save**.

    ![Messenger webhook setup](/img/messenger-webhook-setup.png)

2. webhook field subscription

    We have to subscribe to webhook fields in order to receive messages sent by user. We shall subscribe to `messages` and `messaging_postback` topic. Just scroll down to webhook section of messenger, click `Add subscriptions`. Then select `messages` and `messaging_postback` >> **Save**.


## Test Your Messenger ChatBot

With a bot deployed in messenger, here is a sample of a pizza bot.

![Bot deployed in messenger](/img/messenger-bot.gif)

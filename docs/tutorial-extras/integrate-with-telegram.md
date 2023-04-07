---
sidebar_position: 1
---

# Telegram

Telegram is a cloud-based instant messaging and voice over IP service. It was developed by the Russian entrepreneur Pavel Durov and his brother Nikolai Durov, who were also the founders of VK.com and Odnoklassniki.

Telegram is one of the most popular messaging apps in the world. It has over 500 million active users and is available in 20 different languages.

![Telegram](/img/telegram-5348490_640.png)

## How to connect to Telegram 🔗

To connect to Telegram, you need to create a Telegram bot. You can do this by following the instructions in the [Telegram documentation](https://core.telegram.org/bots#6-botfather).

Once you have created a bot, you will receive a `token`. This token is used to authenticate your bot with Telegram.

## Basic setup ⚙️

Lets create a project folder, `Telegram bot`. In this folder, we are going to create a virtual environment using `venv`. You can can set up your evironment according to your preferences,either `virtualenv` or `conda`. Read more on [creating virtual environment](https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/).

1. Creating project folder 📂

    ```bash
    mkdir 'Telegram bot'
    cd 'Telegram bot'
    ```

2. Creating virtual environment

    Creating virtual environment and activating it

    ```bash
    python3 venv -m sarufi_telegram
    source sarufi_telegram/bin/activate
    ```

3. Clone the repo and install packages 📦

    The shortest route is to use Telegram blueprint for Sarufi, which is available in our Github repository. You can find it [here](https://github.com/Neurotech-HQ/telegram-chatbot-blueprint) by clonning the directory.

    ```bash
    git clone https://github.com/Neurotech-HQ/telegram-chatbot-blueprint
    cd telegram-chatbot-blueprint
    pip3 install -r requirements.txt
    ```

## Configure Environment variables ⚙

After installing packages, we need to configure our credentials. In `telegram-chatbot-blueprint`, create a file(`.env`) using your text-editor to hold environment variables.

Open `.env` in the editor to edit the details with your credentials for sarufi and telegram. Then add the following:-

```text
sarufi_client_id= Your sarufi client ID 
sarufi_client_secret = Your sarufi client Secret 
sarufi_bot_id= bot id
token = telegram token
start_message= Hi {name}, Welcome To {bot_name}, How can i help you
```

The `start_message` will be the bot's response when `/start` command is sent by user.

## How to run Telegram 🚀

To run Telegram bot, simply run `app.py` file after configuring above creditials.

```bash
python app.py
```

**NOTE:** _All operations are carried out in the active evironment in case you use virtual environment_

## How to test Telegram 📊

To test your Telegram chatbot, you can send a message to your bot on the Telegram app. You can also use the Telegram API to send messages to your bot.

1. Open Telegram and search for your bot by name.
2. Click on the bot to start a chat.
3. Send a message to your bot and see how it responds.


## What you learned 👨🏽‍💻

In this tutorial, you learned how to connect Sarufi to Telegram and how to configure and run your chatbot in Telegram. You also learned how to test your chatbot by sending messages to it through the Telegram app or using the Telegram API. With this knowledge, you can now create your own custom chatbot and connect it to Telegram using Sarufi.



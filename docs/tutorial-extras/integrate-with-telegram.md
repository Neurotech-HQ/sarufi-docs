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

After installing packages, we need to configure our credentials. In `telegram-chatbot-blueprint`, create a file(`.env`) to hold environment variables.

```bash
touch .env
```

In the file we are going to add the following credetials. You can do it in the terminal or open using text editor `.env`. Then add the following:-

- In the terminal

  ```bash
  echo "sarufi_username= Your sarfi username" >>.env &
  echo "sarufi_password = Your sarufi password" >> .env &
  echo "sarufi_bot_id= bot id" >> .env & 
  echo "token = telegram token" >>.env &
  echo "start_message= Hi {name}, Welcome To {bot_name}, How can i help you" >> .env
  ```

- Open `.env` file in text editor

  ```text
  sarufi_username= Your sarfi username
  sarufi_password = Your sarufi password
  sarufi_bot_id= bot id
  token = telegram token
  start_message= Hi {name}, Welcome To {bot_name}, How can i help you

The `start_message` will be the bot's response when `/start` command is sent by user.

## How to run Telegram 🚀

To run Telegram bot, simply run `app.py` file after configuring above creditials.

```bash
python app.py
```

**NOTE:** _All operations are carried out in the active evironment in case you use virtual environment_

## How to test Telegram 📊

You can test Telegram by sending a message to your bot. You can also use the Telegram API to send messages to your bot or use telegram messenger.

## What you learned 👨🏽‍💻

In this tutorial, you learned how to connect Sarufi to Telegram. You also learned how to configure and run your chatbot in Telegram.

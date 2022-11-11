---
sidebar_position: 1
---

# Telegram

Telegram is a cloud-based instant messaging and voice over IP service. It was developed by the Russian entrepreneur Pavel Durov and his brother Nikolai Durov, who were also the founders of VK.com and Odnoklassniki.

Telegram is one of the most popular messaging apps in the world. It has over 500 million active users and is available in 20 different languages.

## How to connect to Telegram

To connect to Telegram, you need to create a Telegram bot. You can do this by following the instructions in the [Telegram documentation](https://core.telegram.org/bots#6-botfather).

Once you have created a bot, you will receive a `token`. This token is used to authenticate your bot with Telegram.

## How to configure Telegram

The shortest route is to use Telegram blueprint for Sarufi, which is available in our Github repository. You can find it [here](https://github.com/Neurotech-HQ/telegram-chatbot-blueprint) by clonning the directory.

```bash
git clone https://github.com/Neurotech-HQ/telegram-chatbot-blueprint
```

You only need to configure the `config.yaml` file found in cloned directory. You can find instructions in the `README.md` file.

```yaml config.yaml
sarufi:
  username: sarufi_username
  password: sarufi_password
  bot_id: sarufi_bot_id

telegram:
  token: telegram_token
  start_message: |
    Hi {name}, I can help you with ABC
```

The `start_message` will be the bot's response when `/start` command is sent from telegram.

## How to run Telegram

To run Telegram bot, you need to install the dependencies in the `requirements.txt` file and run `app.py` file.

```bash
cd telegram-chatbot-blueprint
pip install -r requirements.txt
python app.py
```

## How to test Telegram

You can test Telegram by sending a message to your bot. You can also use the Telegram API to send messages to your bot or use telegram messenger.

## What you learned

In this tutorial, you learned how to connect Sarufi to Telegram. You also learned how to configure and run Telegram.

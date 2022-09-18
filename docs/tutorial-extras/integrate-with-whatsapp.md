---
sidebar_position: 2
---

# WhatsApp

WhatsApp is a freeware, cross-platform messaging and Voice over IP (VoIP) service owned by Facebook, Inc. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other media.

WhatsApp is one of the most popular messaging apps in the world. It has over 2 billion active users and is available in 120 different languages.

## How to connect to WhatsApp Cloud API

To connect to WhatsApp Cloud API, you need to create a WhatsApp Business account. You can do this by following the instructions in the [WhatsApp documentation](https://www.whatsapp.com/business/api).

Once you have created a WhatsApp Business account, you will receive a token. This token is used to authenticate your bot with WhatsApp Cloud API.

For Python developers the easiest way to connect to WhatsApp Cloud API is to use the [heyoo](https://github.com/Neurotech-HQ/heyoo) of which you can easily install it using pip.

```bash
pip install heyoo
```

### Sarufi - Heyoo Blueprint

To make it easier for you to connect Sarufi to WhatsApp Cloud API, we have created a blueprint for Sarufi and Heyoo. You can find it [here](https://github.com/Neurotech-HQ/sarufi-heyoo-blueprint). You only need to configure the `config.yaml` file. You can find the instructions in the `README.md` file.

```yaml config.yaml

sarufi:
  username: sarufi_username
  password: sarufi_password
  bot_id: sarufi_bot_id

whatsapp:
  token: whatsapp_token
  phone_number_id: whatsapp_phone_number_id
```

## How to run WhatsApp

To run WhatsApp, you need to install the dependencies in the `requirements.txt` file and run the `app.py` file.

```bash
pip install -r requirements.txt
python app.py
```

## How to test WhatsApp

You can test WhatsApp by sending a message to your bot.

## What you learned

In this tutorial, you learned how to connect Sarufi to WhatsApp Cloud API. You also learned how to configure and run WhatsApp.
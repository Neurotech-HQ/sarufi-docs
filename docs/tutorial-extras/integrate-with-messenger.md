---
sidebar_position: 3
---

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

## Deloying the bot

The main library used in the deployement is [Pymessenger](https://github.com/davidchua/pymessenger).

### Using ngrok

Steps

1. Make sure you have [ngrok](https://ngrok.com) installed in your machine.
2. Make Project folder.

    Lets Make a project folder named `messenger-bot`. Navigate into it to create virtual evironment `messsenger-bot-env`. Activate the environment.

    Run the command to make the magic happen

    ```bash
    mkdir messenger-bot
    cd messenger-bot
    python3 -m venv messenger-bot-env
    source  messenger-bot-env/bin/activate
    ```

3. Clone the repo

    ```bash
    git clone https://github.com/Neurotech-HQ/sarufi-messenger-blueprint.git
    ```

4. Install requirements.

    Make sure you are in activated environment, then run the following

    ```bash
    cd sarufi-messenger-blueprint
    pip3 install -r requiremnts.txt
    ```

5. Create .env file

    We are going to keep our credentials in `.env` file. You can use either a text editor or command line to creat it. With messenger page access token, we covered it previously. Then for sarufi api key, just follow this to [get sarufi credentials](#getting-sarufi-credentials)

    In the file, we are going to add the following

    ```bash
    sarufi_api_key=Your sarufi API key
    page_access_token = Your facebook page token
    sarufi_bot_id= Id of bot to be deployed
    ```

6. Run main.py and set ngrok

    - Fire up your python script
  
        ```bash
        python3 main.py
        ```

    - Start ngrok

        ```bash
        ./ngrok http 5000
        ```

    **`Note:`** Keep the port number the same as used in `main.py`.

7. Setting webhook

    After starting ngrok, you will have a public url to access the local server. The url looks like `https://xxxxxxxxxxx.ngrok.io`. Navigate into your facebook developer account. On the webhooks section, click `messenger` >> `settings`.

    ![messenger settings section](/img/messenger-settings-section.png)

    Scroll down to webhook section of messenger, click `Add callback url`. Then paste the provided url into url section. Copy the `VERIFY_TOKEN`, paste it into verify token in messenger >> **Verify and save**.

    ![Messenger webhook setup](/img/messenger-webhook-setup.png)

8. webhook field subscription

    We have to subscribe to webhook fields in order to receive messages sent by user. We shall subscribe to `messages` and `messaging_postback` topic.

9. Test your bot

    Open your messenger app/web, search for your page name. Send messages to it. The messages will be redirected to your bot. Here is the sample of our pizza bot deployed.

### Using replit

Way to go

- Log into your [Replit](https://replit.com/) account.

  Fork the repo [Sarufi bot deployed on messenger](https://replit.com/@neurotechafrica/sarufi-messenger-blueprint) into your account.

  Navigate to `Tools`--> `Secrets` to create environment variables. We have discussed on how to get page access token at introduction part where as for sarufi view instructions here [get sarufi credentials](#getting-sarufi-credentials).

     Create
    |Key | Description|
    |:---|:---|
    |saruf_api_key| Your sarufi API key|
    |page_access_token| Your facebook page token|
    |sarufi_bot_id| Id of bot to be deployed|

- Run the script

    After creating the secret keys, run your `main.py`. A small webview window will open up with a url that looks like `https://{your repl name}.{your replit username}.repl.co`.

    With the url, Navigate into your facebook developer account. On the webhooks section, click `messenger` >> `settings`.

    ![messenger settings section](/img/messenger-settings-section.png)

    Scroll down to webhook section of messenger, click `Add callback url`. Then paste the provided url into url section. Copy the `VERIFY_TOKEN`, paste it into verify token in messenger >> **Verify and save**.

    ![Messenger webhook setup](/img/messenger-webhook-setup.png)

- Webhook field subscription

    We have to subscribe to webhook fields in order to receive messages sent by user. We shall subscribe to `messages` and `messaging_postback` topic.

- Final touches

  We are reaching at a good point with the set-up. Open your messenger app/web, search for your page name. Send messages to it. The messages will be redirected to your bot. Here is the sample of our pizza bot deployed.

## getting sarufi credentials

To authorize our chabot, we are are going to use authorization keys from sarufi. Log in into your [sarufi account](https://sarufi.io). Go to your Profile to get API key.

![Sarufi API key](/img/sarufi_authorization.png)

## Pizza Bot test

With a bot deployed in messenger, here is a sample of a pizza bot.

![Bot deployed in messenger](/img/messenger-bot.gif)

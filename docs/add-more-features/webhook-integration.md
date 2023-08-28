---
sidebar_position: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Know about webhook

As our chatbot(talking about our `PizzaBot`) has ability to handle conversational as we needed to be. We can add extra ability to let it interact with other systems, such as databases, APIs, and third-party applications.

This is possible by utilizing sarufi's webhook functionality to automate workflows. This will make our previous chatbot so powerful and useful. We can integrate webhook into our chatbot to handle things like payments,update inventories, update delivery tracking system.

## Webhook

Lets have a simple explanation on webhook.

A webhook is a  HTTP-based callback mechanism that allows two systems to communicate in real-time. It is triggered when an event occurs, such as a order confirmation. When the event is triggered, the webhook sends a request to a specified URL, which can be used to trigger an action, such as updating a database or sending a payment push, updating delivery system, sending message notification.

:::note
Remember that webhook is only one way communication.
:::

All you have to do is specify which states should trigger the webhook and set webhook url in sarufi.

## Preparing the runway🛣

With our pizza bot, we shall set up the webhook to send a person in charge a notification of new confirmed order.

![Webhook illustration](/img/webhook-illustration.png)

Steps:

- Have a public url

- Set trigger intents

    Navigate to your sarufi account --> `settings` --> `Webhook`. Select the intent(s) that will trigger sending of data to your webhook url. Then `save`

![Sarufi webhook field](/img/sarufi-webhook-setup.png)

- Process received data

- Send request to other system

## The take-off🛫

Lets use flask to set up our server and twilio to send message notification to alert me when new order is confirmed.

You can use [replit](https://replit.com) or [ngrok](https://ngrok.com) to make your server available online. The webhook is based on our pizza bot we have been working on.

Lets make a minor chanages on the current state of the bot. I will add a choice confirmation to let user confirm.

### Adding Choices in the flow

Here is the updated sketch of our chatbot
![Updated version of pizza bot](/img/pizz-bot-with-choices.png)

You might be asking yourself about choice menu. `Choice menu` basically ensures that the user choses from the given choices. In case a user selects a choice that was not provided, the `fallback message` will be displayed to alert him/her.

We shall modify the message of the bot at `phone_number` to let user know that he/she has to select from the choices displayed.

To add choice menu, navigate(in the dashboard) to your state to be connected to choice menu. Click `connect` button --> `Connect to Choice Menu`.
You will have to create a new choice menu, where you will be provided with a small window to add basic information. Here is what we are going to add:-

- Choice name

    The choice name is by default to start with `choice_`. Lets call our choice, `choice_confirmation`.

- Fallback message

    This a message that will be displayed when user choses unavailable choice.

- Add a choice

    Each choice is to have a `text` and connected `state`. A text will be the user input where as `state` will be the state connected when the choice text is fed by the user.

    Lets add 1 to let one confirm the order and 2 to cancel the order.

    ![Sarufi choice menu](/img/sarufi-choice-menu.png)

    With our choices in place we need to connect each to a state. Lets start with choice `1`, click `Connect` ➡️ `Create a state` ➡️ Enter state name, eg *customer_confirms*.

    We shall be using text message component, select `Text component` then add message eg: *Thank you for ordering with us, you order will be available soon*. Then click **Save**. Do the same for choice `2`. Then click **Save**.

    It will be looking like this.

    ![Complete choice menu](/img/sarufi-choice-menu-completed.png)

## The Journey✈️

In our journey, we are going to set up a webhook server. You can use either ngrok or replit to make your local server publically available by having an `https` path.

<Tabs>

<TabItem value="replit" label="Replit">

Way to go

1. Fork the [Pizza bot sample webhook](https://replit.com/@jovyinny/sarufi-bot-webhook) into your replit account.

2. Create secret keys

    |Secret key| Description|
    |---|---|
    |phone_number|"Your twilio phone number"|
    |twilio_SID|"Your Twilio SID"|
    |twilio_assigned_phone_number|"Youe twilio assigned number"|
    |twilio_auth_token|"Twilio auth token"|

3. Webhook url

    To obtain a public url for your flask server, run your script. Then a small web preview window will open up with url in format like `https://{your repl name}.{your replit usermae}.repl.co`

4. Set up sarufi webhook

    Navigate to your sarufi account --> `settings` --> `Webhook`. Select the intent(s) that will trigger sending of data to your webhook url. Then `save`

    **Note:** The route that receives new order is `/new-order`. So your url will be like `https://{your repl name}.{your replit usermae}.repl.co/new-order`

</TabItem>

<TabItem value="ngrok" label="Ngrok">

STEPS:

1. Clone  the repository, simply run

    ```bash
    git clone https://github.com/jovyinny/sample-webhook.git
    ```

2. Install requirements

    Lets install need packages to get our webhook fired. Run

    ```bash
    cd sample-webhook
    pip install -r requirements.txt
    ```

3. Create `.env` file

    We are going to create `.env` file to hold our secret keys from Twilio

    ```text
    phone_number="Your twilio phone number"
    twilio_SID="Your Twilio SID"
    twilio_assigned_phone_number="Youe twilio assigned number"
    twilio_auth_token="Twilio auth token"
    ```

4. Run the script

    ```bash
    python3 main.py
    ```

5. Start ngrok server

    ```bash
    ./ngrok http 5000
    ```

    **Note:** Keep the port number same as used in `main.py`

6. Finish up

    After running the command, you will have to copy the url ngrok provides. The url looks like `https://xxxxxxxxxxx.ngrok.io`

7. Set sarufi webhook

    With url from ngrok, its time to set up our new pizza order alert.Navigate to your sarufi account --> `settings` --> `Webhook`. Select the intent(s) that will trigger sending of data to your webhook url. Then `save`.

    **Note:** The route that receives new order is `/new-order`. So your url will be like `https://xxxxxxxxxxx.ngrok.io/new-order`.

</TabItem>

</Tabs>

## Code Snippet

Here a few lines of code that were used to accomplish the task. It easy to manage your webhook with even more intents specified.

All you need to know is the `structure of data` being sent when a particular intent is triggered.

```python
import os
from flask import Flask,request
from twilio.rest import Client
from dotenv import load_dotenv

# flask app
app=Flask(__name__)

load_dotenv()
# twilio
client=Client(os.environ.get("twilio_SID"),os.environ.get("twilio_auth_token"))

def send_notification(message:str):
  message = client.messages.create(
    body=message,
    from_=os.environ.get('twilio_assigned_phone_number'),
    to=os.environ.get("phone_number")
  )
  print("Message sent")
  
  
def extract_data(data:dict)->str:
  number_of_pizza=data.get("number_of_pizzas")
  toppings=data.get("pizza_toppings")
  address=data.get("address")
  phone_number=data.get("phone_number")
  
  # formated message
  message=f"🔔New order alert.\n A customer with phone number {phone_number} has place an order of {number_of_pizza} pizza with {toppings} toppings to be delivered to {address}"

  return message

@app.route("/new-order",methods=["POST"])
def new_order():
  data=request.get_json()
  if int(data.get("choice_confirmation"))==1:
    print("new order confirmed")
    message=extract_data(data)
    send_notification(message)
  else:
    print("new order cancelled")
  return "Received"


if __name__ == "__main__":
  app(port=5000,debug=True)
```

## Landing🛬

With everything set, lets make order to our chatbot.

![Sample of our chatbot](/img/webhook-order-pizza.gif)

Notification message

![Twilio notification](/img/twilio-notification.jpeg)

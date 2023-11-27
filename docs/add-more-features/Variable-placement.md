---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Variable placement

Our chabot has more functionality now, we want to make it more lit by powering it with more user conversion experience. Imagine our Pizza bot asked a username and about what they will have as toppings. we can use the response to give a good message that describes to a user what they expect to be in the delivery package.

## More on variable placement

Lets have a look at the `order_pizza` flow below:-

![Pizza flow example](/img/pizza-example-flow.png)

From  the flow above, we can use user's response from previous state to provide a personalized response. Variable placement is implemented in the flow by enclosing state name in double curl brackets as `{{state name}}`. The same format is used Sarufi Dashboard. The variable should be only used within the same flow.

## Get working

We are going to update our pizza bot to provide personalized answers. Below are yaml and json files. After updating flow file, go ahead to update your bot as we did in previous guides.

Below is how the variable placement works:

![Pizza flow with variable placement illustration](/img/variable-placement-illustration.png)

User response from previous state is stored in memory of the next state. So at state `username`, a bot has a memory of response provided in previous state of `order_pizza` with a value __Jovine__. The value can be referenced in the message as `{{username}}`.

This can be done at any state in the same flow. The bot will let our customer know how many pizzas has ordered and kind of toppings. This is a cool experience with our bot now.

Lets get started by updating our flow file. Feel free to use the dashboard as the flow is the same

<Tabs>
<TabItem value="yaml" label="YAML">

```yaml
order_pizza:
  message:
    - - 'Hello, what''s your name?'
    - - Can you provide your name please?
  images:
    - link: >-
        https://sarufi-media.s3.amazonaws.com/d265fce7-3f73-4a40-b03f-f68ddbee6ebc.jpg
      caption: welcome to Pizza bot
  
  next_state: username
username:
  message:
    - '{{username}}, How many pizza would like?'
  next_state: number_of_pizzas
  validators:
    - type: custom_validation
      regex: '^[1-9]?$'
      error_message: "\U0001F926\U0001F3FD‍♀️ Please provide valid number. Number between 1-9"
number_of_pizzas:
  message:
    - what would you like to have on your pizza
  next_state: pizza_toppings
  validators:
    - type: custom_validation
      regex: '^[a-zA-Z]+$'
      error_message: "\U0001F926\U0001F3FE‍♀️ Please provide text only"
pizza_toppings:
  message:
    - - 'Hey {{username}}, What is your address?'
    - - '{{username}}, Cool, Whats your address ?'
  type: text
  next_state: address
address:
  message:
    - 'Sure, What is your phone number ?'
  type: text
  next_state: phone_number
  validators:
    - type: phone_number_validation
      error_message: >-
        Please enter a valid phone number like 0711111111 or +255711111111 or
        +(222)222-2222
phone_number:
  message:
    - >-
      Hey {{username}} you're about to place an order of {{number_of_pizzas}}
      pizza(s) with {{pizza_toppings}} to be delivered at {{address}}. 
    - ''
    - Please confirm
    - ''
  next_state: choice_confirmation
  type: interactive
  buttons:
    - '1': ✅ I confirm
    - '2': ❌ cancel
choice_confirmation:
  '1': order_confirmed
  '2': order_cancelled
  fallback_message:
    - Please select 1 to confirm or 2 to cancel
order_cancelled:
  message:
    - 'You are welcome at our pizza service. '
    - ''
    - We are always happy to serve  you
  type: text
  next_state: end
order_confirmed:
  message:
    - Thank you for ordering with us. Your order has been placed.
  type: text
  next_state: end
```

</TabItem>

<TabItem value="json" label="JSON">

```json
{
  "order_pizza": {
    "message": [
      ["Hello, what's your name?"],
      ["Can you provide your name please?"]
    ],
    "images": [
      {
        "link": "https://sarufi-media.s3.amazonaws.com/d265fce7-3f73-4a40-b03f-f68ddbee6ebc.jpg",
        "caption": "welcome to Pizza bot"
      }
    ],
    "next_state": "username"
  },
  "username": {
    "message": ["{{username}}, How many pizza would like?"],
    "next_state": "number_of_pizzas",
    "validators": [
      {
        "type": "custom_validation",
        "regex": "^[1-9]?$",
        "error_message": "🤦🏽‍♀️ Please provide valid number. Number between 1-9"
      }
    ]
  },
  "number_of_pizzas": {
    "message": ["what would you like to have on your pizza"],
    "next_state": "pizza_toppings",
    "validators": [
      {
        "type": "custom_validation",
        "regex": "^[a-zA-Z]+$",
        "error_message": "🤦🏾‍♀️ Please provide text only"
      }
    ]
  },
  "pizza_toppings": {
    "message": [
      ["Hey {{username}}, What is your address?"],
      ["{{username}}, Cool, Whats your address ?"]
    ],
    "type": "text",
    "next_state": "address"
  },
  "address": {
    "message": ["Sure, What is your phone number ?"],
    "type": "text",
    "next_state": "phone_number",
    "validators": [
      {
        "type": "phone_number_validation",
        "error_message": "Please enter a valid phone number like 0711111111 or +255711111111 or +(222)222-2222"
      }
    ]
  },
  "phone_number": {
    "message": [
      "Hey {{username}} you're about to place an order of {{number_of_pizzas}} pizza(s) with {{pizza_toppings}} to be delivered at {{address}}. ",
      "",
      "Please confirm",
      ""
    ],
    "next_state": "choice_confirmation",
    "type": "interactive",
    "buttons": [
      {
        "1": "✅ I confirm"
      },
      {
        "2": "❌ cancel"
      }
    ]
  },
  "choice_confirmation": {
    "1": "order_confirmed",
    "2": "order_cancelled",
    "fallback_message": ["Please select 1 to confirm or 2 to cancel"]
  },
  "order_cancelled": {
    "message": [
      "You are welcome at our pizza service. ",
      "",
      "We are always happy to serve  you"
    ],
    "type": "text",
    "next_state": "end"
  },
  "order_confirmed": {
    "message": ["Thank you for ordering with us. Your order has been placed."],
    "type": "text",
    "next_state": "end"
  }
}
```

</TabItem>
</Tabs>

At `order_pizza` state, our customer will provide the number of pizzas, this response is stored in memory of the next state. So at state `number_of_pizzas`, a bot has a memory of response provided in previous state of `order_pizza`.

The same happens at `pizza_toppings` state; where the response from previous state, `number _of_pizzas` is in the memory at that state.

This can be done at any state in the same flow. The bot will let our customer know how many pizzas has ordered and kind of toppings. This is a cool experience with our bot now.

In the flow used you can notice presence of choices. If you find it hard to understand, please refer to [chatbot addons: choices](/docs/getting-started/chatbots-addons#handling-choices) guide.

## See the outcomes

Below is what the bot response looks like. The bot uses the flows shared above.

![Variable placement conversation sample gif](/gif/variable-placement-conversation.gif)

You can see how this feature can be used to provide personalized experience to your customers.

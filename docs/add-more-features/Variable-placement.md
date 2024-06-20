---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Variable placement

Our chatbot has been growing in functionality. However, we could make it cooler by supercharging its conversation skills 💬. Imagine that our PizzaBot asks for a username and about what toppings the customer wants on their pizza. We can then use the responses to give a personalised message which confirms the delivery details to the customer.

## More on variable placement

Lets have a look at the `order_pizza` flow below:

![Pizza flow example](/img/pizza-example-flow.png)

From the flow above, we can use the user's response from a previous state to provide a personalised response. Variable placement is implemented in the flow by enclosing the state name in double curly brackets, like `{{state name}}`. The same format is used in the Sarufi Dashboard. The variable should be only used within the same flow.

## Implementing variable placement

We are going to update our PizzaBot to provide personalised answers. There are example YAML and JSON files below. After updating the flow, update your bot similarly to the previous guides.

Here is a diagram explaining how variable placement works:

![Pizza flow with variable placement illustration](/img/variable-placement-illustration.png)

The user response from the previous state is stored in the memory of the next state. So at state `username`, the bot has memory of the response provided in the previous state of `order_pizza` with the value __Jovine__. The value can be referenced in the message as `{{username}}`.

This can be done at any state in the same flow. The bot will let our customer know how many pizzas they have ordered and what toppings they selected.

Get started by updating the flow file. Feel free to use the dashboard as the created flow is the same.

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
      caption: Welcome to PizzaBot
  
  next_state: username
username:
  message:
    - '{{username}}, how many pizzas would you like to order?'
  next_state: number_of_pizzas
  validators:
    - type: custom_validation
      regex: '^[1-9]?$'
      error_message: "\U0001F926\U0001F3FD‍♀️ Please provide a valid number between 1-9."
number_of_pizzas:
  message:
    - What toppings would you like to have on your pizza?
  next_state: pizza_toppings
  validators:
    - type: custom_validation
      regex: '^[a-zA-Z]+$'
      error_message: "\U0001F926\U0001F3FE‍♀️ Please only enter text."
pizza_toppings:
  message:
    - - 'Hey {{username}}, what is your address?'
  type: text
  next_state: address
address:
  message:
    - '{{username}}, what is your phone number?'
  type: text
  next_state: phone_number
  validators:
    - type: phone_number_validation
      error_message: >-
        Please enter a valid phone number like 0711111111, +255711111111 or
        +(222)222-2222.
phone_number:
  message:
    - >-
      {{username}}, you're about to place an order of {{number_of_pizzas}}
      pizza(s) with {{pizza_toppings}} to be delivered to {{address}}.
    - ''
    - Please confirm if this is correct.
    - ''
  next_state: choice_confirmation
  type: interactive
  buttons:
    - '1': ✅ Confirm
    - '2': ❌ Cancel
choice_confirmation:
  '1': order_confirmed
  '2': order_cancelled
  fallback_message:
    - Please select 1 to confirm or 2 to cancel
order_cancelled:
  message:
    - 'See you next time!'
    - ''
    - We are always happy to serve you.
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
        "caption": "welcome to PizzaBot"
      }
    ],
    "next_state": "username"
  },
  "username": {
    "message": ["{{username}}, how many pizzas would you like to order?"],
    "next_state": "number_of_pizzas",
    "validators": [
      {
        "type": "custom_validation",
        "regex": "^[1-9]?$",
        "error_message": "🤦🏽‍♀️ Please provide a valid number between 1-9."
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
        "error_message": "🤦🏾‍♀️ Please only provide text."
      }
    ]
  },
  "pizza_toppings": {
    "message": [
      ["Hey {{username}}, what is your address?"],
    ],
    "type": "text",
    "next_state": "address"
  },
  "address": {
    "message": ["{{username}}, what is your phone number?"],
    "type": "text",
    "next_state": "phone_number",
    "validators": [
      {
        "type": "phone_number_validation",
        "error_message": "Please enter a valid phone number like 0711111111, +255711111111 or +(222)222-2222."
      }
    ]
  },
  "phone_number": {
    "message": [
      "{{username}}, you're about to place an order of {{number_of_pizzas}}
      pizza(s) with {{pizza_toppings}} to be delivered to {{address}}.",
      "",
      "Please confirm if this is correct.",
      ""
    ],
    "next_state": "choice_confirmation",
    "type": "interactive",
    "buttons": [
      {
        "1": "✅ Confirm"
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
      "See you next time!",
      "",
      "We are always happy to serve you."
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

At the `order_pizza` state, the customer will enter the number of pizzas they want to order. This response is stored in the memory of the next state. So at state `number_of_pizzas`, our bot has a memory of the response provided in previous state of `order_pizza`.

The same happens at the `pizza_toppings` state where the response from previous state, `number_of_pizzas` is in the memory at that state.

This can be done at any state in the same flow. The bot will let our customer know how many pizzas and what toppings they have ordered.

In the flow used you can notice that we used choices. If do not fully understand choices, please read the guide about choices [here](/docs/getting-started/chatbots-addons#handling-choices).

## Results

Here is what the bot response looks like. This bot uses the flows shown above.

![Variable placement conversation sample gif](/gif/variable-placement-conversation.gif)

You can see how this feature can be used to provide a personalised experience to your customers.

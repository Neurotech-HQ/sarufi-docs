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

From  the flow, we can use user's response from previous state to provide a personalized response. Variable placement is implemented in the flow by enclosing state name in double curl brackets as `{{state name}}`. The same format is used Sarufi Dashboard.

## Get working

We are going to update our pizza bot to provide personalized answers. Below are yaml and json files. After updating flow file, go ahead to update your bot as we did in previous article.

Below is how the variable placement works:

![Pizza flow with variable placement illustration](/img/variable-placement-illustration.png)

The user response from previous state is stored in memory of the next state. So at state `number_of_pizzas`, a bot has a memory of response provided in previous state of `order_pizza`. But you can not use the value for reference in the same state.

You can see that the value held by `number_of_pizzas` is used in `pizza_toppings` state. This can be done at any state in the same flow. The bot will let our customer know how many pizzas has ordered and kind of toppings. This is a cool experience with our bot now.

Lets get started by updating our flow file. Feel free to use the dashboard as the flow is the same

<Tabs>
<TabItem value="yaml" label="YAML">

```yaml
order_pizza:
  message:
    - 'Sure, How many pizzas would you like to order?'
  validators:
    - type: numeric_validation
      error_message: 'Please enter a valid number'
  next_state: number_of_pizzas

number_of_pizzas:
  message:
    - 'Sure, What would you like to have on your pizza?'
  next_state: pizza_toppings

pizza_toppings:
  message:
    - 'Cool, Whats your address ?'
  next_state: address

address:
  message:
    - 'Sure, What is your phone number ?'
  validators:
    - type: 'phone_number_validation'
      error_message:
        - 'Please enter a valid phone number like 0711111111 or +255711111111 or +(222)222-2222'
  next_state: 'phone_number'

phone_number:
  message:
    - Your order of {{number_of_pizzas}} pizza with {{pizza_toppings}} toppings has been placed.
    - Thank you for ordering with us.
  next_state: end
```

</TabItem>

<TabItem value="json" label="JSON">

```json
{
    "order_pizza": {
        "message": [
            "Sure, How many pizzas would you like to order?"
        ],
        "validators": [
            {
                "type": "numeric_validation",
                "error_message": "Please enter a valid number"
            }
        ],
        "next_state": "number_of_pizzas"
    },
    "number_of_pizzas": {
        "message": [
            "Sure, What would you like to have on your pizza?"
        ],
        "next_state": "pizza_toppings"
    },
    "pizza_toppings": {
        "message": [
            "Cool, Whats your address ?"
        ],
        "next_state": "address"
    },
    "address": {
        "message": [
            "Sure, What is your phone number ?"
        ],
        "validators": [
            {
                "type": "phone_number_validation",
                "error_message": [
                    "Please enter a valid phone number like 0711111111 or +255711111111 or +(222)222-2222"
                ]
            }
        ],
        "next_state": "phone_number"
    },
    "phone_number": {
        "message": [
            "Your order of {{number_of_pizzas}} pizza with {{pizza_toppings}} toppings has been placed.",
            "Thank you for ordering with us."
        ],
        "next_state": "end"
    }
}
```

</TabItem>
</Tabs>


At `order_pizza` state, our customer will provide the number of pizzas, this response is stored in memory of the next state. So at state `number_of_pizzas`, a bot has a memory of response provided in previous state of `order_pizza`.

The same happens at `pizza_toppings` state; where the response from previous state, `number _of_pizzas` is in the memory at that state.

This can be done at any state in the same flow.
The bot will let our customer know how many pizzas has ordered and kind of toppings. This is a cool experience with our bot now.

## See the outcomes

Navigate to [sarufi cummunity playground](https://playground.sarufi.io/community) to test your bot's response. Below is what the bot response looks like.

![Variable placement conversation](/img/variable-placement-conversation.png)

From the image you can see the last bot's response provides good response.

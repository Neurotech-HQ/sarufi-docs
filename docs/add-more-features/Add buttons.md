---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interactive Buttons

Adding interactive buttons for our bot will provide a better user experience and less chance for input validation problems. The user can make selections quickly without typing using buttons.

## What to know about buttons

As your bot can be deployed in various platforms like WhatsApp, Messenger, Telegram and many more, we have to ensure that every platform supports the type of button we want to make.
Here are general rules we will follow.

- A state can have only 3 buttons
- The button name should not exceed 20 characters

A button will be connected to a state with a response if a particular button is pressed.

## Update the flow

All other flows we have looked at used the default type, `text`.  Buttons use a different flow type called `interactive`.
The buttons will take a list of dictionaries with the key being the `button's state` and value being the `button's name`.

We are going to update our flow by adding the buttons to let customer confirm the order.

<Tabs>
<TabItems value="yaml" label="YAML">

```yaml
phone_number:
message:
    - Your order of {{order_pizza}} pizza with {{number_of_pizzas}} toppings has been placed.
    - Please confirm.
next_state: end
# adding buttons
type: interactive
buttons:
    - customer_accepts: I confirm
    - customer_denies: I don't confirm

customer_accepts:
message:
    - Thank you for ordering with us.
    - Your pizza will be delivered soon.
next_state: end

customer_denies:
message:
    - See you next time!
```

</TabItems>

<TabItems value="json" label="JSON">

```json
{
    "phone_number": {
        "message": [
            "Your order of {{order_pizza}} pizza with {{number_of_pizzas}} toppings has been placed.",
            "Please confirm."
        ],
        "next_state": "end",
        "type": "interactive",
        "buttons": [
            {
                "customer_accepts": "I confirm"
            },
            {
                "customer_denies": "I don't confirm"
            }
        ]
    },
    "customer_accepts": {
        "message": [
            [
                "Thank you for ordering with us.",
                "Your pizza will be delivered soon."
            ]
        ],
        "next_state": "end"
    },
    "customer_denies": {
        "message": [
            "See you next time!"
        ]
    }
}
```

</TabItems>
</Tabs>

We have two buttons. `I confirm` connects to the **customer_accepts** state and `I don't confirm` connects to the **customer_denies** state. States connected to the buttons can be any length
depending your bot's needs.

## The conversation

Search for your bot in the [Sarufi Playground](https://playground.sarufi.io/community) to see our bot's abilities.
Here is our PizzaBot example with the `I confirm` button pressed.

![Conversation after adding buttons](/img/playground-buttons.png)

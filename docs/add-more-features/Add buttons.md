---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interactive button

Adding interactive buttons for our bot will provide a user more experience. A user can make quick selections.

## What to know about buttons

As your bot can be deployed in many platforms such as WhatsApp, Messenger, Telegram and many more, we have to abide to their rules on how buttons should appear.
Here are general rules we are going to follow.

- A state can have only 3 buttons
- Button name should not exceed 20 characters

A button will be connected to a state with a response if a particular button is pressed.

## Update the flow

All other flows we have looked at used default type, `text` but buttons will be added in a flow with type as `interactive`.
Buttons will take a list with a dictionary with pair of `button's state` and `button's name`.

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
type: interactive,
buttons:
    - customer_accepts: I confirm
    - customer_denies: I don't confirm

customer_accepts:
message:
    - - Thank you for ordering with us.
    - We shall have your pizza delivered soon
next_state: end

customer_denies:
message:
    - Sorry, You are welcome to shop with us
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
        "type": "interactive,",
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
                "We shall have your pizza delivered soon"
            ]
        ],
        "next_state": "end"
    },
    "customer_denies": {
        "message": [
            "Sorry, You are welcome to shop with us"
        ]
    }
}
```

</TabItems>
</Tabs>

We have two buttons, `I confirm` that connects to **customer_accepts** state and `I don't confirm` that connects to **customer_denies** state. States connected to the buttons can be as long as your bot demands.

## The conversion

Search for your bot at [sarufi playground](https://playground.sarufi.io/community) to see bot's ability.
Here is our Pizza bot example with `I confirm` button pressed.

![Conversation after adding buttons](/img/playground-buttons.png)

---
sidebar_position: 3
---

# Interactive button

Adding interactive buttons for our bot will provide a customer more experience. A customer can make quick selections.

## What to know about buttons

As your bot can be deployed in many platforms such as WhatsApp, Messenger, Telegram and many more, we have to abide to their rules on how buttons should appear. Buttons will be added in a flow.
Here are general rules we are going to follow.

- A state can have only 3 buttons
- The text in the button should not exceed characters

A button will be connected to a state with a response if a particular button is pressed.

## Get it done

We are going to update our flow. This is a small part of a whole script we had before.

```yaml
phone_number:
  message:
    - Your order of {{order_pizza}} pizza with {{number_of_pizzas}} toppings has been placed.
    - Please confirm
  next_state: end
  # what we have added
  type: interactive,
  buttons:
    - customer_accepts: I confirm
    - customer_denies: I don't confirm 

customer_accepts:
  message:
    - - Thank you for ordering with us. 
      - We shall call you when our delivery vehicle reaches at {{pizza_toppings}}
  next_state: end

customer_denies:
  message:
    - Sorry, You are welcome to shop with us
```

**NOTE:** The variable `pizza_toppings` is in the full yaml script used before.

The buttons will take a list with a dictionary with pair of `buttons state` and `button's name`. A button's state will be triggered when the button is pressed.

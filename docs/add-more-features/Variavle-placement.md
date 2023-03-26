---
sidebar_position: 2
---

# Variable placement

Our chabot has more functionality now, we want to make it more lit by powering it with more user conversion experience. Imagine our Pizza bot asked a username and about what they will have as toppings. we can have a good confirmation message that describes to a user what they expect to be in the delivery package.

## More on variable placement

Lets have a look at the `order_pizza` flow below:-

![Pizza flow illustration](/img/variable-placemennt-illustraction.png)

From  the flow, we can use user response from previous state to provide a user with personalized response. Variable placement is implement in the flow by enclosing state name in double curl brackets as `{{state name}}`

## Lets put it works

We are going to update our pizza bot by letting the bot provide personalized answers.

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
    - Your order of {{order_pizza}} pizza with {{number_of_pizzas}} toppings has been placed.
    - Thank you for ordering with us.
  next_state: end
```

At the state `phone_number`, the bot will let our customer know how many pizzas has ordered and kind of toppings.

In the flow, at state `order_pizza` our customer will provide the number of pizza. With his/her answer in the memory of our bot, we have used it to provide a more meaningful response. This can be done with any state in the flow.

---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Chatbot Addons

We have seen how to create a simple chatbot in the previous section. In this section, we will see how to add addons to our chatbot. Addons are a set of functionalities that can be added to our chatbot to make it more interactive, things like: handling choices, canceling intents in the middle of a conversation, and etc.

In the previous section, we created a chatbot that can order pizza. but what if the user what to cancel the order in the middle of the conversation? What if we are to give the user a choice to pick pizza toppings? We will see how to handle these scenarios in this section.

## Cancel intent [Special Intent]

if you name your intent `cancel` then it will be treated as a special intent. If the user says something that matches the cancel intent in the middle of a conversation, the conversation will be canceled and the chatbot will respond with the message defined in the `cancel flow`.

Let's add a cancel intent to our chatbot. You can use the following code to add a cancel intent to our chatbot.

<Tabs>
<TabItem value="py" label="python">

```python
>>> cancel_intent = {
...     "cancel": [
...         "cancel",
...         "cancel it",
...         "cancel it please",
...         "acha",
...         "acha sasa",
...         "I changed my mind, cancel it",
...         "I changed my mind, cancel it please",
...     ]
... }
>>> chatbot.add_intent(cancel_intent)
2022-09-18 12:25:42,844 - root - INFO - Updating bot
2022-09-18 12:25:44,209 - root - INFO - Bot(id=15, name=My First Chatbot)
2022-09-18 12:25:44,209 - root - INFO - A new intents "['cancel']" has been added
```
</TabItem>
<TabItem value="go" label="Golang">

```go
title := "cancel"

content := []string{
		"cancel",
		"cancel it",
		"cancel it please",
		"acha",
		"acha sasa",
		"I changed my mind, cancel it",
		"I changed my mind, cancel it please",
	}

if err = example_bot.AddIntent(title, content); err != nil {
        fmt.Println(err)
    }

app.UpdateBot(example_bot) // for changes to take effect
```
</TabItem>
</Tabs>

Let's now add a cancel fallback flow to our chatbot. You can use the following code to add a cancel flow to our chatbot.
<Tabs>
<TabItem value="py" label="python">

```python
>>> chatbot.add_flow(
...     {"cancel": {"message": ["okay gotcha you, welcome again"], "next_state": "end"}}
... )
2022-09-18 12:37:40,147 - root - INFO - Updating bot
2022-09-18 12:37:41,824 - root - INFO - Bot(id=15, name=My First Chatbot)
2022-09-18 12:37:41,825 - root - INFO - A new flow "['cancel']" has been added
```
</TabItem>
<TabItem value="go" label="Golang">

```go
title := "cancel"
content := `{"message": ["Okay we cancelled it, welcome again!","next_state": "end"}`

if err = example_bot.AddFlow(title, content); err != nil {
        fmt.Println(err)
    }
app.UpdateBot(example_bot)

```
</TabItem>
</Tabs>

### Testing the cancel intent

Let's test the cancel intent. and see if it works as expected.

```python
>>> chatbot.respond('order pizza')
{'message': ['Sure, How many pizzas would you like to order?']}
>>> chatbot.respond('2')
{'message': ['Sure, What would you like to have on your pizza?']}
>>> chatbot.respond('cancel it')
{'message': ['okay gotcha you, welcome again']}
```

:::note
As you can see, when the cancel intent was detected, the conversation was canceled in the middle of the conversation and the chatbot responded with the message defined in the cancel flow.
:::

## Handling choices

In the previous section, we saw how to add a cancel intent to our chatbot. But what if we want to give the user a choice to pick pizza toppings? We can handle choices by defining a flow that starts with the `choice` keyword.

Also the choice flow is unlike other flow in the sense that it doesn't have a `next_state` key nor a `message` key. Instead, it has a `choices` key that contains a list of choices. Each choice is a dictionary that has a available choices as keys and the `next state` as values.

```json
{
  "choice_xxx":{
    "choice_1": "next_state_1",
    "choice_2": "next_state_2",
    "choice_3": "next_state_3",
    "fallback_message": "fallback_message"
  }
}
```

:::note
The `fallback_message` is the message that will be sent to the user if the user says something that doesn't match any of the available choices.
::: 

### Adding a choice flow

Let's add a choice flow to our chatbot. You can use the following code to add a choice flow to our chatbot.

```python
>>> chatbot.flow = {
...     "greets": {"message": ["Hi, How can I help you?"], "next_state": "end"},
...     "order_pizza": {
...         "message": ["Sure, How many pizzas would you like to order?"],
...         "next_state": "number_of_pizzas",
...     },
...     "number_of_pizzas": {
...         "message": [
...             "Sure, What would you like to have on your pizza?",
...             "1. Cheese",
...             "2. Pepperoni",
...             "3. Both"
...         ],
...         "next_state": "choice_pizza_toppings",
...     },
...     "choice_pizza_toppings": {
...         "1": "pizza_toppings",
...         "2": "pizza_toppings",
...         "3": "pizza_toppings",
...         "fallback_message": ["Sorry, the topping you chose is not available."],
...     },
...     "pizza_toppings": {
...         "message": ["Cool, Whats your address ?"],
...         "next_state": "address",
...     },
...     "address": {
...         "message": ["Sure, What is your phone number ?"],
...         "next_state": "phone_number",
...     },
...     "phone_number": {
...         "message": ["Your order has been placed.", "Thank you for ordering with us."],
...         "next_state": "end",
...     },
...     "goodbye": {"message": ["Bye", "See you soon"], "next_state": "end"},
... }
```

### Testing the choice flow

```python
>>> chatbot.respond('please order me a pizza')
{'message': ['Sure, How many pizzas would you like to order?']}
>>> chatbot.respond('2')
{'message': ['Sure, What would you like to have on your pizza?', '1. Cheese', '2. Pepperoni', '3. Both']}
>>> chatbot.respond('4')
{'message': ['Sorry, the topping you chose is not available.']}
>>> chatbot.respond('2')
{'message': ['Cool, Whats your address ?']}
>>> chatbot.respond('cancel it')
{'message': ['Sawa, Kitu gani kingine ungependa nikusaidie']}
```

:::note
If you noticed, at the end of the conversation, the chatbot responded with the message not defined in our flow this  is we removed the cancel flow  when updating the chatbot. So the chatbot responded with the default fallback message.
:::

## What you have learned

In this tutorial, you have learned how to:

1. How to terminate a conversation in the middle of the conversation.
2. How to handle choices in a conversation.

:::tip
You can fetch all chatbots you have created by using the `bots()` method.
:::

```python
>>> from sarufi import Sarufi
>>> sarufi = Sarufi(api_key='your API KEY')
>>> sarufi.bots()
```

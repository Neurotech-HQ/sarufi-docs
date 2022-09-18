---
sidebar_position: 2
---

# Create your first Chatbot

As I mentioned in the previous section, that we only support [Python SDK](https://github.com/Neurotech-HQ/sarufi-python-sdk) for now and we will be adding more SDKs in the future.

We will be using [Python SDK](https://github.com/Neurotech-HQ/sarufi-python-sdk) for this tutorial. You can install it using the following command:

```bash
pip install sarufi
```

## Draft Architecture

Before we start coding, let's first draft the architecture of our chatbot. Here an oversimplified version of the architecture for our chatbot. Sarufi will handle intents training, intent inference, and dialog management. We will be handling the application logic and the user interface.

![Oversimplified Architecture](/img/oversimplified-architecture.svg)

## Authentication

Before we start coding, we need to authenticate with Sarufi. Currently, we only support authentication your **username** and **password**. You can get your username and password. We still have't released the signup page yet. You can try out Sarufi by signing up for our [beta program](https://sarufi.typeform.com/to/TKq7QY).

Once you're successfully accepted to our beta program, you will receive an email with your username and password. You can use the following code to authenticate with Sarufi.

```python
>>> from sarufi import Sarufi
>>> sarufi = Sarufi(username="your-username", password="your-password")
```

## Create Empty Chatbot

Now that we have successfully authenticated with Sarufi, we can create an empty chatbot, with 0 intents and 0 utterances. You can use the following code to create an empty chatbot.

```python
>>> chatbot = sarufi.create_bot(name='My First Chatbot')
2022-09-12 15:42:02,821 - root - INFO - Creating bot
>>> chatbot
Bot(id=13, name=My First Chatbot)
```

## Starting Conversation with our Chatbot

Now that we have successfully created an empty chatbot, we can start a conversation with our chatbot and see how it responds. You can use the following code to start a conversation with our chatbot.

```python
>>> chatbot.respond('Hey')
2022-09-12 15:44:02,811 - root - INFO - Sending message to bot and returning response
2022-09-12 15:44:07,078 - root - INFO - Status code: 200
2022-09-12 15:44:07,078 - root - INFO - Message sent successfully
{'message': 'Intent for this message is missing in [FLOW]'}
```

:::note
As you can see, our chatbot is not able to understand the message we sent but replied us with a predefined response.  This is because we haven't trained our chatbot yet. We will be training our chatbot in the next section.
:::

## Help me order a pizza [Intent]

Let's now create an intent that will help us order a pizza and also add some utterances to that intent. You can use the following code to create an intent and add some utterances to that intent.

To make more interactive, let's general intents like `greets`, `order_pizza`, `goodbye` and add some utterances to those intents.

```python
>>> from sarufi import Sarufi
>>> sarufi = Sarufi(username="your-username", password="your-password")
>>> chatbot = sarufi.get_bot(13)
>>> chatbot.intents = {
...     'greets': ['hey', 'hello', 'hi', 'howdy', 'hola', 'greetings', 'good morning', 'good afternoon', 'good evening'],
...     'goodbye': ['bye', 'goodbye', 'see you later', 'see you soon', 'see you', 'talk to you later', 'talk to you soon', 'talk to you'],
...     'order_pizza': ['I need a pizza', 'I want a pizza', 'order a pizza', 'I want to order a pizza']}
2022-09-12 15:55:06,696 - root - INFO - Updating bot
2022-09-12 15:55:07,972 - root - INFO - Bot(id=13, name=My First Chatbot)
>>> chatbot.intents
{'greets': ['hey', 'hello', 'hi', 'howdy', 'hola', 'greetings', 'good morning', 'good afternoon', 'good evening'], 'goodbye': ['bye', 'goodbye', 'see you later', 'see you soon', 'see you', 'talk to you later', 'talk to you soon', 'talk to you'], 'order_pizza': ['I need a pizza', 'I want a pizza', 'order a pizza', 'I want to order a pizza']}
```

### Conversation with our chatbot after adding intents and utterances

Now that we have successfully added some intents and utterances to our chatbot, let's start a conversation with our chatbot and see how it responds. You can use the following code to start a conversation with our chatbot.

```python
>>> chatbot.respond("Hey")
2022-09-12 15:56:16,078 - root - INFO - Sending message to bot and returning response
2022-09-12 15:56:17,279 - root - INFO - Status code: 200
2022-09-12 15:56:17,279 - root - INFO - Message sent successfully
{'message': 'Intent for this message is missing in [FLOW]'}
```

:::note
You might wondering like but we trained it, yes ofcourse we trained it but we haven't given a flow on how to respond to the user. We will be adding a flow in the next section.
:::

## Help me order a pizza [Flow]

Flow is a directed graph that defines the conversation flow between the user and the chatbot. Flow is defined using the [JSON](https://www.json.org/json-en.html) format. where each node is an intent and each edge is a response to the user message & the next intent to be triggered.

:::note
You can have nodes that are not intents. In that case, the node will be treated as a response to the user message. If you want to end the conversation, you can add a node with the name `end`.
:::

Let's now add a flow to our chatbot. You can use the following code to add a flow to our chatbot.

```python
>>> chatbot.flow = {
...     'greets': {
...         'message': ['Hi, How can I help you?'],
...         'next_state': 'end'
...     },
...     'order_pizza': {
...         'message': ['Sure, How many pizzas would you like to order?'],
...         'next_state': 'number_of_pizzas'
...     },
...     'number_of_pizzas': {
...         'message': ['Sure, What would you like to have on your pizza?'],
...         'next_state': 'pizza_toppings'
...     },
...     'pizza_toppings': {
...         'message': ['Cool, Whats your address ?'],
...         'next_state': 'address'
...     },
...     'address': {
...         'message': ['Sure, What is your phone number ?'],
...         'next_state': 'phone_number'
...     },
...     'phone_number': {
...         'message': ['Your order has been placed.', 'Thank you for ordering with us.'],
...         'next_state': 'end'
...     },
...     'goodbye': {
...         'message': ['Bye', 'See you soon'],
...         'next_state': 'end'
...     }
... }
```

### Conversation with our chatbot after adding flow

Now that we have successfully added a flow to our chatbot, let's start a conversation with our chatbot and see how it responds. You can use the following code to start a conversation with our chatbot.

```python
>>> chatbot.respond('Hey')
{'message': ['Hi, How can I help you?']}
>>> chatbot.respond('Bye')
{'message': ['Bye', 'See you soon']}
>>> chatbot.respond('I want to order pizza')
{'message': ['Sure, How many pizzas would you like to order?']}
>>> chatbot.respond('3')
{'message': ['Sure, What would you like to have on your pizza?']}
>>> chatbot.respond('tomato')
{'message': ['Cool, Whats your address ?']}
>>> chatbot.respond('123, Main Street, New York')
{'message': ['Sure, What is your phone number ?']}
>>> chatbot.respond('+255783483934')
{'message': ['Your order has been placed.', 'Thank you for ordering with us.']}
```

:::note
You can see that our chatbot is able to understand the user message and respond to the user message. This is because we have trained our chatbot with intents and utterances and also added a flow to our chatbot.
:::

## Conclusion

In this tutorial, we have learned how to create a chatbot using Sarufi. We have also learned how to train our chatbot with intents and utterances and also how to add a flow to our chatbot. We have also learned how to start a conversation with our chatbot and how to respond to the user message.

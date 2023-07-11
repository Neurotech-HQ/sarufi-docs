---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Chatbot from file
<Tabs>
<TabItem value="py" label="Python">

[Sarufi-Python-SDK](https://github.com/Neurotech-HQ/sarufi-python-sdk) allows you to create a chatbot from a file. where you can define your intents, utterances, and responses separately.

You can either use YAML or JSON format to define your chatbot. You can find the sample JSON file [here](https://github.com/Neurotech-HQ/sarufi-python-sdk/tree/main/examples/insuarance).

:::note
Perhaps you can choose which format to use, YAML or JSON, based on your preference. We will be using YAML format in this tutorial as it is more human-readable.
:::

## Create Chatbot from file

[Sarufi-Python-SDK](https://github.com/Neurotech-HQ/sarufi-python-sdk) allows you to create a chatbot from a file, where you can define your intents, utterances, and responses separately.

You can either use YAML or JSON format to define your chatbot. You can find the sample YAML file [here](https://github.com/Neurotech-HQ/sarufi-python-sdk/tree/main/examples/insurance/get-started-intents.yaml) and the sample JSON file [here](https://github.com/Neurotech-HQ/sarufi-python-sdk/tree/main/examples/insurance/get-started-intents.json).

To create a chatbot from the YAML file, use the following code snippet:

<Tabs groupId="get_started">
<TabItem value="yaml" label="YAML">

```yaml
greetings:
  - Hi
  - Hello 
  - Howdy
  - Hey
  - Good morning
  - Good evening
  - Good afternoon
  - Good day
  - Good night

goodbye:
  - Bye
  - Goodbye
  - See you later
  - See you soon
  - Talk to you later
  - Talk to you soon
  - Talk to you
  - See you
  - Have a nice day
  - Have a nice evening
  - Have a nice night
  - Have a nice morning

thanks:
  - Thanks
  - Thank you
  - Thank you so much
  - Thanks a lot
  - Thanks a bunch
  - Thanks a ton
  - Thanks a million
  - Thanks a zillion
```
</TabItem>
<TabItem value="json" label="JSON">

```json
{
  "greetings": [
    "Hi",
    "Hello",
    "Howdy",
    "Hey",
    "Good morning",
    "Good evening",
    "Good afternoon",
    "Good day",
    "Good night"
  ],
  "goodbye": [
    "Bye",
    "Goodbye",
    "See you later",
    "See you soon",
    "Talk to you later",
    "Talk to you soon",
    "Talk to you",
    "See you",
    "Have a nice day",
    "Have a nice evening",
    "Have a nice night",
    "Have a nice morning"
  ],
  "thanks": [
    "Thanks",
    "Thank you",
    "Thank you so much",
    "Thanks a lot",
    "Thanks a bunch",
    "Thanks a ton",
    "Thanks a million",
    "Thanks a zillion"
  ]
}
```
</TabItem>
</Tabs>

If you are not familiar with YAML or JSON, you can learn more about them [here](https://yaml.org/) and [here](https://www.json.org/), respectively.


## Create dialog file

Here is a sample file with dialog defined in YAML format. You can find the sample YAML file [here](https://github.com/Neurotech-HQ/sarufi-python-sdk/tree/main/examples/dialogs/get-started-dialog.yaml).

<Tabs>
<TabItem value="yaml" label="YAML">

```yaml get-started-dialog.yaml
greetings:
  message:
   - Hi, how can I help you?
  next_state: end

goodbye:
  message:
   - Bye
   - See you soon
  next_state: end

thanks:
  message:
   - You are welcome
  next_state: end
```
</TabItem>
<TabItem value="json" label="JSON">

```json
{
  "greetings": {
    "message": ["Hi, how can I help you?"],
    "next_state": "end"
  },
  "goodbye": {
    "message": ["Bye", "See you soon"],
    "next_state": "end"
  },
  "thanks": {
    "message": ["You are welcome"],
    "next_state": "end"
  }
}
```
</TabItem>
</Tabs>

## Create a description YAML file

Here is a sample file with description defined in YAML format. You can find the sample YAML file **here**.

<Tabs>
<TabItem value="yaml" label="YAML">

```yaml
name: Pizza Bot
description: A chatbot that helps you order pizza
industry: Food
```
</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "name": "Pizza Bot",
    "description": "A chatbot that helps you order pizza",
    "industry": "Food"
}
```
</TabItem>
</Tabs>

## Create a chatbot from YAML files

You can create a chatbot from YAML files using the following code.

```python
>>> from sarufi import Sarufi
>>> sarufi = Sarufi(api_key='your API KEY')
>>> response = sarufi.create_from_file(
...     intents="data/intents.yaml",
...     flow="data/flows.yaml",
...     metadata="data/metadata.yaml",
... )
```

You can also update a chatbot from YAML files using the following code.

```python
>>> from sarufi import Sarufi
>>> sarufi = Sarufi(api_key='your API KEY')
>>> response = sarufi.update_from_file(
...     intents="data/intents.yaml",
...     flow="data/flows.yaml",
...     metadata="data/metadata.yaml",
...     id="xxx",
... )
```

You can use the same code to create or update a chatbot from JSON files. The only difference is the file extension.

## What you have learned

In this tutorial, you have learned how to create a chatbot from YAML files using [Sarufi-Python-SDK](https://github.com/Neurotech-HQ/sarufi-python-sdk). 

</TabItem>
<TabItem value="go" label="Golang">

[Sarufi Golang SDK](https://github.com/sarufi-io/sarufi-golang-sdk) allows you to create intents and flows from `json` files.

## Create Intents From JSON File

Lets say you have an `intents.json` file with the following content:
```json
{
    "greetings": [
        "Hi",
        "Hello",
        "Mambo",
        "Hola",
        "Salut"
    ],
    "goodbye": [
        "Bye",
        "Goodbye",
        "See you later",
        "Adios",
        "Au revoir"
    ],
    "thanks": [
        "You're welcome",
        "No problem",
        "My pleasure",
        "Anytime",
        "No problem"
    ],
    "confused": [
        "I'm sorry, I don't understand",
        "I'm not sure I understand",
        "I'm sorry, can you repeat that?",
        "I'm sorry, what was that?",
        "I'm sorry, I didn't understand that"
    ]
}
```

You can simply include the name of the file with the function `bot.CreateIntents("intents.json")`:
```go
if err := example_bot.CreateIntents("intents.json"); err != nil {
    log.Fatal(err)
}

// For changes to take effect
if err = app.UpdateBot(example_bot); err != nil {
    log.Fatal(err)
}

```

## Create Flows From JSON Files

You can similarly create flows from json files. Assuming you have an `flows.json` files as below:
```json
{
    "greetings": {
        "message": [
            "Hello, how can I help you?"
        ],
        "next_state": "end"
    },
    "goodbye": {
        "message": [
            "Goodbye, hope to see you again soon"
        ],
        "next_state": "end"
    },
    "thanks": {
        "message": [
            "You're welcome"
        ],
        "next_state": "end"
    },
    "confused": {
        "message": [
            "I'm sorry, I didn't understand you"
        ],
        "next_state": "end"
    }
}
```

Then you can create a new flow as follows:
```go
if err := example_bot.CreateFlows("flows.json"); err != nil {
    log.Fatal(err)
}

// For changes to take effect
if err = app.UpdateBot(example_bot); err != nil {
    log.Fatal(err)
}
```

## What you have learned

In this tutorial, you have learned how to create intents and flows from JSON files using [Sarufi Golang SDK](https://github.com/sarufi-io/sarufi-golang-sdk).
</TabItem>
</Tabs>

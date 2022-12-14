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

## Create Intent YAML file

Here is a sample file with intents defined in YAML format. You can find the sample YAML file **here**.

```yaml get-started-intents.yaml
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

## Create dialog YAML file

Here is a sample file with dialog defined in YAML format. You can find the sample YAML file **here**.

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

## Create a description YAML file

Here is a sample file with description defined in YAML format. You can find the sample YAML file **here**.

```yaml get-started-description.yaml
name: Pizza Bot
description: A chatbot that helps you order pizza
industry: Food
```

## Create a chatbot from YAML files

You can create a chatbot from YAML files using the following code.

```python
>>> from sarufi import Sarufi
>>> sarufi = Sarufi("testing@gmail.com', "xxx")
>>> response = sarufi.create_from_file(
...     intents="data/intents.yaml",
...     flow="data/flows.yaml",
...     metadata="data/metadata.yaml",
... ))
```

You can also update a chatbot from YAML files using the following code.

```python
>>> from sarufi import Sarufi
>>> sarufi = Sarufi("testing@gmail.com", "xxx")
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
package main

import (
	"github.com/sarufi-io/sarufi-golang-sdk"
)

func main() {
	var bot sarufi.Bot
	bot.Initialize("your-email", "your-password")
	bot.GetBot(bot_id)

  bot.CreateIntents("intents.json")
}

// output

INFO	2022/12/18 18:47:15 Creating intents from file...
INFO	2022/12/18 18:47:15 Updating bot...
INFO	2022/12/18 18:47:15 Intents created successfully

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
package main

import (
	"github.com/sarufi-io/sarufi-golang-sdk"
)

func main() {
	var bot sarufi.Bot
	bot.Initialize("your-email", "your-password")
	bot.GetBot(bot_id)

  bot.CreateFlows(newFlow)
}

// output

INFO	2022/12/18 18:48:36 Creating flows from file...
INFO	2022/12/18 18:48:36 Updating bot...
INFO	2022/12/18 18:48:36 Flows created successfully
```

## What you have learned

In this tutorial, you have learned how to create intents and flows from JSON files using [Sarufi Golang SDK](https://github.com/sarufi-io/sarufi-golang-sdk).
</TabItem>
</Tabs>

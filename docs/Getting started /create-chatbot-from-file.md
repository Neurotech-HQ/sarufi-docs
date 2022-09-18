---
sidebar_position: 4
---

# Create Chatbot from file

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
... )
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
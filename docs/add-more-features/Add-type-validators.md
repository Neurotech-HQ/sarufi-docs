---
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Adding Type Validators

After we have created our basic bot, we might need a way to validate the type of data a user enters to prevent errors.

For example, you might want the bot to ask the user a phone number for pizza delivery or to provide an email address. **Type validation** ensures the entered data is in a valid format.

Using type validation we can achieve this functionality with only a few statements!

## What we have now

Currently, we support the following validations:- `alphanumeric` , `date` , `email` , `length` , `numeric` , `phone number` , `response message type`, `required field` , `time` , `zipcode` and `custom validation`.

Let's have a quick run through these validators.

| Validator Type | Required Parameters | Description |
| --- | --- | --- |
| `alphanumeric_validation` | `error_message`: string | Validates that the input is an alphanumeric string. This validator can be used to ensure that an input contains only letters and numbers, such as when collecting username or password data. |
| `date_validation` | `error_message`: string | Validates that the input is a valid date in the MM/DD/YYYY, YYYY/MM/DD, or DD-MM-YYYY format. This validator can be used to ensure that an input is a valid date format, which is useful when collecting date information from users.|
| `email_validation` | `error_message`: string | Validates that the input is a valid email address. This validator can be used to ensure that an input is a valid email address, which is useful when collecting contact information from users. |
| `length_validation` | `min_length`: integer, `max_length`: integer, `error_message`: string | Validates that the input length is within the specified range. This validator can be used to ensure that an input falls within a specific length range, such as when setting a minimum or maximum length for a password. |
| `numeric_validation` | `error_message`: string | Validates that the input is a numeric value. This validator can be used to ensure that an input is a number, such as when collecting age or quantity data. |
| `required_field_validation` | `error_message`: string | Validates that a required field is not empty. This validator is useful when you want to ensure that a user has provided a value for a required field, such as a username or password. |
| `phone_number_validation` | `error_message`: string | Validates that the input is a valid phone number. This validator can be used to ensure that an input is a valid phone number for a particular country, which is useful when collecting contact information from users. |
| `response_message_type` | `response_type`: string, `error_message`: string | Validates that the input matches the specified response type. This validator can be used to ensure that an input matches a specific format or type, which is useful when validating user responses to a chatbot or form. |
| `time_validation` | `error_message`: string | Validates that the input is a valid time in the hh:mm AM/PM or 24-hour format. This validator can be used to ensure that an input is a valid time format, which is useful when collecting time information from users. |
| `zipcode_validation` | `error_message`: string | Validates that the input is a valid zip code. This validator can be used to ensure that an input is a valid zip code for a particular country, which is useful when collecting address information from users. |
| `custom_validation` | `regex`: string, `error_message`: string | Validates that the input matches the specified regular expression pattern. This validator can be used to ensure that an input matches a specific pattern, which is useful when validating complex or custom input formats. |

## Get into action

Validators are added in the flow of your chatbot. The **validator type** will be one of the validators mentioned above. The *error_message* is a response from the bot whenever a user enters invalid input.

We are going to add validators to our PizzaBot. We will add numeric and phone number validators.

<Tabs groupId="type_validator">
<TabItem value="py" label="Python">

Update your `flows.yaml` file by adding a few lines.

```yaml
greets:
  message:
    - 'Hi, How can I help you?'
  next_state: end

order_pizza:
  message:
    - 'Sure, How many pizzas would you like to order?'
  # numeric validation added here
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
    - 'Cool, what is your address?'
  next_state: address

address:
  message:
    - 'Sure, What is your phone number?'
  #phone number validation added
  validators:
    - type: 'phone_number_validation'
      error_message:
        - 'Please enter a valid phone number like 0711111111 or +255711111111 or +(222)222-2222'
  next_state: 'phone_number'

phone_number:
  message:
    - Your order has been placed.
    - Thank you for ordering with us.
  next_state: end

goodbye:
  message:
    - Bye
    - See you soon
  next_state: end
```

After we have updated our flow, it is time to update our bot. Running the command below will make the magic happen.

```python
>>> from sarufi import Sarufi
>>> sarufi = Sarufi(api_key='your API KEY')
>>> # We only update the flow
>>> response = sarufi.update_from_file(
...     flow="data/flows.yaml",
...     id="your bot id"
... )
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
> const chatbot = await sarufi.getBot({ id: 45 });
> const bot = {
  flows: {
  "greets": {
    "message": ["Hi, How can I help you?"],
    "next_state": "end"
  },
  "order_pizza": {
    "message": ["Sure, How many pizzas would you like to order?"],
    "validators": [
      {
        "type": "numeric_validation",
        "error_message": "Please enter a valid number"
      }
    ],
    "next_state": "number_of_pizzas"
  },
  "number_of_pizzas": {
    "message": ["Sure, What would you like to have on your pizza?"],
    "next_state": "pizza_toppings"
  },
  "pizza_toppings": {
    "message": ["Cool, what is your address?"],
    "next_state": "address"
  },
  "address": {
    "message": ["Sure, What is your phone number?"],
    "validators": [
      {
        "type": "phone_number_validation",
        "error_message": "Please enter a valid phone number like 0711111111 or +255711111111 or +(222)222-2222"
      }
    ],
    "next_state": "phone_number"
  },
  "phone_number": {
    "message": [
      "Your order has been placed.",
      "Thank you for ordering with us."
    ],
    "next_state": "end"
  },
  "goodbye": {
    "message": ["Bye", "See you soon"],
    "next_state": "end"
  }
}
};
 await sarufi.updateBot({ bot, id: chatbot.id });
```

</TabItem>
<TabItem value="go" label="Golang">

```go
newFlow := `
  {
  "greets": {
    "message": ["Hi, How can I help you?"],
    "next_state": "end"
  },

  "order_pizza": {
    "message": ["Sure, How many pizzas would you like to order?"],
    "validators": [
      {
        "type": "numeric_validation",
        "error_message": "Please enter a valid number"
      }
    ],
    "next_state": "number_of_pizzas"
  },
  
  "number_of_pizzas": {
    "message": ["Sure, What would you like to have on your pizza?"],
    "next_state": "pizza_toppings"
  },
  
  "pizza_toppings": {
    "message": ["Cool, what is your address?"],
    "next_state": "address"
  },
  
  "address": {
    "message": ["Sure, What is your phone number?"],
    "validators": [
      {
        "type": "phone_number_validation",
        "error_message": "Please enter a valid phone number like 0711111111 or +255711111111 or +(222)222-2222"
      }
    ],
    "next_state": "phone_number"
  },
  
  "phone_number": {
    "message": [
      "Your order has been placed.",
      "Thank you for ordering with us."
    ],
    "next_state": "end"
  },
  
  "goodbye": {
    "message": ["Bye", "See you soon"],
    "next_state": "end"
  }
}`

if err = example_bot.CreateFlows(newFlow); err != nil {
        fmt.Println(err)
    }
app.UpdateBot(example_bot)
```

</TabItem>
</Tabs>

Length validation takes some additional information. More information on length validation can be found [here](#one-thing-to-note).

## See the outcome

Now that we have validators added to our bot, let's test our bot in the Playground. Go to [Sarufi Playground](https://playground.sarufi.io/community) and search for your bot to see what the bot can do.

- ❌ Unexpected input

  Here is when the user enters a wrong/unexpected input that does not match the selected validator rules. Let's try providing a *string* instead of a *number*. The bot responds with the **error_message** we set.

  ![Validator: Wrong input](/img/validator-wrong-input.png)

- ☑️ Expected input

  When the user sends a matching input to the set validator, the conversiation will continue. Here are some sample conversations.

  ![Validators: Matching inputs](/img/validator-correct-input.png)

You can see how the use of validators will give your bot a more meaningful conversational experience 🚀.

## One thing to note

Some validators take more parameters in addition to **type** and **error_messsage**. Here are somne examples in YAML and JSON format illustrating their usage.

- Length validation

  For length validation, we need to add a **min_length** and **max_length**.

  <Tabs groupId="additional_explanations">
  <TabItem value="yaml" label="YAML">

  ```yaml
  get_name:
  message:
    - Please provide your full name
  next_state: get_email
  validators:
    - type: length_validation
      error_message: Please provide a name with a length between 7 and 30
      min_length: 7
      max_length: 30
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```js
  "get_name": {
    "message": ["Please provide your full name"],
    "next_state": "get_email",
    "validators": [
      {
        "type": "length_validation",
        "error_message": "Please provide a name with a length between 7 and 30",
        "min_length": 7,
        "max_length": 30
      }
    ]
  }
  ```

  </TabItem>
  </Tabs>

- Response type validation
  
  If we deploy our bot in platforms like WhatsApp, we can get different types of responses from the user. For example, the user might send their ID as an image or send their location for delivery or send a short voice note describing their concern.
  This validator ensures the user sends the correct type of response.
  This validator suppports different types such as `audio` , `file` , `image` , `interactive` ,  `location` , `text` , `video`.

  <Tabs groupId="additional_explanations">
  <TabItem value="yaml" label="YAML">

  ```yaml
  get_id_image:
  message:
    - Please send an image of your ID.
  next_state: get_email
  validators:
    - type: response_message_validation
      response_type: image
      error_message: Please send an image for your ID.
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```js
  "get_id_image: {
    "message": ["Please send an image of your ID."],
    "next_state": "get_email",
    "validators": [
      {
        "type": "response_message_validation",
        "response_type": "image",
        "error_message": "Please send an image for your ID."
      }
    ]
  }
  ```

  </TabItem>
  </Tabs>

- Custom response

  With `custom response`, we can write our own pattern to meet our chatbot's needs. You can write `regex` and try it at [test your regex](https://regex101.com/) to check if it works properly.

  <Tabs groupId="additional_explanations">
    <TabItem value="yaml" label="YAML">

    ```yaml
    get_time_24hrs:
    message:
      - Enter the time you want the pizza to be delivered by in 24-hr format.
    next_state: get_email
    validators:
      - type: custom_validation
        regex: ^[0-2][0-3]:?[0-5][0-9]$
        error_message: Sorry, please enter the time again. The time should be in 24-hour format.
    ```

    </TabItem>
    <TabItem value="json" label="JSON">

    ```js
    "get_id_image: {
      "message": ["Enter the time you want the pizza to be delivered by in 24-hr format."],
      "next_state": "get_email",
      "validators": [
        {
          "type": "custom_validation",
          "regex": "^[0-2][0-3]:?[0-5][0-9]$",
          "error_message": "Sorry, please enter the time again. The time should be in 24-hour format."
        }
      ]
    }
    ```

    </TabItem>
    </Tabs>

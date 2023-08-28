---
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Adding Type Validators

After we have created our basic bot, We may need a way to validate the type of data a user gives the bot. We are going to make the bot more classic.

For example, you want the bot to receive a phone number for Pizza delivery or you want a user to provide an email address. Thats all **type validation** has to do.

Using type validation we are going to achieve this fuctionality with few statements.

## What we have now

By now, we support following validations:- `Alphanumeric` , `Date` , `Email` , `Length` , `numeric` , `Phone number` , `response message type`, `required field` , `time` , `Zipcode` and `custom validation`.

Lets have a quick walk through these validators.

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

Validators will be added in the flow of your chatbot. The **validator type** will be one of the validators we have discussed above and *error_message* as a response from the bot whenever a user enters non valid input.

We are going to use add validator to our Pizza bot. Lets add numeric and phone number validators.

<Tabs groupId="type_validator">
<TabItem value="py" label="Python">

Lets update our `flows.yaml` file by adding few lines.

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
    - 'Cool, Whats your address ?'
  next_state: address

address:
  message:
    - 'Sure, What is your phone number ?'
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

After we have updated our flow, its time we update our bot. Running the command below magic all magic happen.

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
    "message": ["Cool, Whats your address ?"],
    "next_state": "address"
  },
  "address": {
    "message": ["Sure, What is your phone number ?"],
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
    "message": ["Cool, Whats your address ?"],
    "next_state": "address"
  },
  
  "address": {
    "message": ["Sure, What is your phone number ?"],
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

Length validation takes some additional information, i have it explained at [more on length validation](#one-thing-to-note).

## See the outcome

Now we have validators added to our bot, lets test our bot in the playground. Go to [sarufi playground](https://playground.sarufi.io/community), search for your bot to see what the bot can do.

- ❌ Unexpected input

  Here is when the user enters a wrong/unexxpected input that does not match selected validator rules. I will try providing a *string* instead of a *number*. The bot responds with **error_message** we set.

  ![Validator: Wrong input](/img/validator-wrong-input.png)

- ☑️ Expected input

  When the user sends a matching input to the set validator, the conversion will go on. Here are some conversations.

  ![Validators: Matching inputs](/img/validator-correct-input.png)

You can see how the use of validators will give your bot more meaningful conversation experience 🚀.

## One thing to note

Some validators take more parameters apart from **type** and **error_messsage**. Below are examples containing yaml and json file illustrating their usage.

- Length validation

  For length validation, we are going to add **min_length** and **max_length**.

  <Tabs groupId="additional_explanations">
  <TabItem value="yaml" label="YAML">

  ```yaml
  get_name:
  message:
    - Please provide Your full name
  next_state: get_email
  validators:
    - type: length_validation
      error_message: sorry, provide a name with characters between 7 and 30
      min_length: 7
      max_length: 30
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```js
  "get_name": {
    "message": ["Please provide Your full name"],
    "next_state": "get_email",
    "validators": [
      {
        "type": "length_validation",
        "error_message": "sorry, provide a name with characters between 7 and 30",
        "min_length": 7,
        "max_length": 30
      }
    ]
  }
  ```

  </TabItem>
  </Tabs>

- Response type validation
  
  If we deploy our bot in defferent platforms such as whatsapp, we can get specific response from the user. We may let the user send image of his/her ID or send their location for delivery or a short voice note describing their concern. 
  
  This validator comes in hand with suppport of different types such as `audio` , `file` , `image` , `interactive` ,  `location` , `text` , `video`.

  <Tabs groupId="additional_explanations">
  <TabItem value="yaml" label="YAML">

  ```yaml
  get_id_image:
  message:
    - Please send your ID image
  next_state: get_email
  validators:
    - type: response_message_validation
      response_type: image
      error_message: sorry, please image of your ID
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```js
  "get_id_image: {
    "message": ["Please send your ID image"],
    "next_state": "get_email",
    "validators": [
      {
        "type": "response_message_validation",
        "response_type": "image",
        "error_message": "sorry, please image of your ID"
      }
    ]
  }
  ```

  </TabItem>
  </Tabs>

- Custom response

  With custom response, we can write our own pattern to meet chatbot needs. You can write `regex` and try it at [test your regex](https://regex101.com/) to check if it works properly.

  <Tabs groupId="additional_explanations">
    <TabItem value="yaml" label="YAML">

    ```yaml
    get_time_24hrs:
    message:
      - Enter time in 24hrs format
    next_state: get_email
    validators:
      - type: custom_validation
        regex: ^[0-2][0-3]:?[0-5][0-9]$
        error_message: sorry, Your time should be in 24 hours format 
    ```

    </TabItem>
    <TabItem value="json" label="JSON">

    ```js
    "get_id_image: {
      "message": ["Enter time in 24 hrs format"],
      "next_state": "get_email",
      "validators": [
        {
          "type": "custom_validation",
          "regex": "^[0-2][0-3]:?[0-5][0-9]$",
          "error_message": "sorry, Your time should be in 24 hours format"
        }
      ]
    }
    ```

    </TabItem>
    </Tabs>

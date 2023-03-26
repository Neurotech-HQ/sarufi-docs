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

By now, we support following validations:- `Alphanumeric` , `Date` , `Email` , `Length` , `numeric` , `Phone number` , `required field` , `time` and `Zipcode`.

Lets have a quick walk through these validators.

- Alphanumeric (🔠 or 🔢)

  When used, it will accept alphabets, numbers or combination of both. Lets have some examples of inputs that will be accepted. This validator type will be added by naming it as `alphanumeric_validation`.

  Example:    123wdcs or  1122 or adasd.

- Date 📆

  This validator will accept date in the format dd/mm/yyyy or mm/dd/yyyy as numbers. Here the type will be added by naming it as `date_validation`.

  Example: 24/3/2023 or 3/24/2023.

- Email ✉️

  With this validator you can be sure that the user has enter the email and nothing else. We shall add this type by naming it as `email_validation`.

  Example: your-name123@yourdomain.com or hello.me@domain.com

- Length

  If you want to validate the amount of data the user gives the bot, the using this validator will save your from receiving chunks that are unncessary.
  
  You will need to set the minimum length and maximum length of what you expect the user to provide. To add this validation type we shall name it as `length_validation`.

- Numeric 🔢

  Using this validator we can be sure that a user enter a numeric value and not otherwise. Adding numeric validator, we use the name `numeric_validation`.

- Phone number 📞

  Use this validator to let one provide a phone number in a good format. This validator type will be added by naming it as `phone_number_validation`. Examples of phone number formats accepted are:-
  +2(222)22222222 or +2(222)222-222 or  +255711111111 0r 0711111111.

- Required field

  This will enforce the user to provide a response. This can be any input according to your flow. To use the validator in the flow, its type name will be `required_field_validation`.

- Time 🕘

  This validator will accept time in the format `hh:mm AM or PM`. Note the space between mm and AM/PM. Type name of this validator is `time_validation`.

- Zipcode 📫

  If you want to get your customer zipcode to deliver the product, we have a validator for you. Examples of zipcode accepted by the validator are `12345` or `12345-6789` or `12345 6789`. This validator type will be added by naming it as `zipcode_validation`.

## Get into action

Validators will be added in the flow of your chatbot. They take `type name` as **type** and `validator error message` as **error_message**.

The **type** will be one of the validators we have discussed above and *error_message* this is a response from the bot whenever a user enters non valid input.

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
>>> sarufi = Sarufi("testing@gmail.com", "xxxxxx")
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
package main

import (
	"github.com/sarufi-io/sarufi-golang-sdk"
)

func main() {
	var bot sarufi.Bot
	bot.Initialize("your-email", "your-password")
	bot.GetBot(bot_id)

  // create a string in JSON format

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

  bot.UpdateBot(newFlow)
}

// output

INFO	2022/12/18 17:52:08 Updating bot...
INFO	2022/12/18 17:52:08 Flows updated successfully

```

</TabItem>
</Tabs>

## See the outcome

Now we have validators added to our bot, lets test our bot in the playground

- ❌ Unexpected input

  Here is when the user enters a wrong/unexxpected input that does not match selected validator rules. I will try providing a *string* instead of a *number*. The bot responds with **error_message** we set.

  ![Validator: Wrong input](/img/validator-wrong-input.png)

- ☑️ Expected input

  When the user sends a matching input to the set validator, the conversion will go on. Here are some conversations.

  ![Validators: Matching inputs](/img/validator-correct-input.png)

You can see how the use of validators will give your bot a more meaningful conversation experience 🚀.

## One thing to note

All other validators, you just enter validator `name` and `error message` exccept `length validator`.

For length validation, we shall have some additional information to add. We are going to add **min_length** and **max_length**

Here is an example for yaml and json file.

<Tabs>
<TabItem value="yaml" label="Yaml">

```yaml
get_name:
message:
  - Please provide Your full name
next_state: get_email
validators:
  - type: length_validation
    error_message: sorry, provide a name with characters between 7 and 30
    min_length: 10
    max_length: 30
```

</TabItem>
<TabItem value="json" label="Json">

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

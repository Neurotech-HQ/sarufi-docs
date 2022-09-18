chatbot.flow = {
    "greets": {"message": ["Hi, How can I help you?"], "next_state": "end"},
    "order_pizza": {
        "message": ["Sure, How many pizzas would you like to order?"],
        "next_state": "number_of_pizzas",
    },
    "number_of_pizzas": {
        "message": [
            "Sure, What would you like to have on your pizza?",
            "1. Cheese",
            "2. Pepperoni",
            "3. Both",
        ],
        "next_state": "choice_pizza_toppings",
    },
    "choice_pizza_toppings": {
        "1": "pizza_toppings",
        "2": "pizza_toppings",
        "3": "pizza_toppings",
        "fallback_message": ["Sorry, the topping you chose is not available."],
    },
    "pizza_toppings": {
        "message": ["Cool, Whats your address ?"],
        "next_state": "address",
    },
    "address": {
        "message": ["Sure, What is your phone number ?"],
        "next_state": "phone_number",
    },
    "phone_number": {
        "message": ["Your order has been placed.", "Thank you for ordering with us."],
        "next_state": "end",
    },
    "goodbye": {"message": ["Bye", "See you soon"], "next_state": "end"},
}


chatbot.intents = {
    "greets": [
        "hey",
        "hello",
        "hi",
        "howdy",
        "hola",
        "greetings",
        "good morning",
        "good afternoon",
        "good evening",
    ],
    "goodbye": [
        "bye",
        "goodbye",
        "see you later",
        "see you soon",
        "see you",
        "talk to you later",
        "talk to you soon",
        "talk to you",
    ],
    "order_pizza": [
        "I need a pizza",
        "I want a pizza",
        "order a pizza",
        "I want to order a pizza",
    ],
}

chatbot.add_flow(
    {"cancel": {"message": ["okay gotcha you, welcome again"], "next_state": "end"}}
)

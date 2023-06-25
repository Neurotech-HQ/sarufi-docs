---
slug: telegram-webhook-vs-polling
title: Telegram webhooks vs polling
authors: [jovine]
tags: [telegram]
---
 
![Telegram Webhook vs polling](/img/telegram-polling-vs-webhook.png)

After building your chatbot with sarufi, you might need to integrate it with other popular messaging platforms. Talking about popular social platforms can not leave telegram aside, as it have a chabbot friendly eco-sytem.
So why think about webhooks vs polling? This is a question that will be addressed at the end of the short bike-ride 🚵🏼‍♂️ journey were about to start.

With no delays, lets start our short journey.

Telegram chatbot can receive messages from telegram server through majorly two ways, namely polling and web-hook. So your bot will be able to respond to messages delivered to it by either method. Its good to know the differences so that you get rid of misunderstandings.

We shall take a quick look at their comparisons. [Sarufi](https://sarufi.io) provides blueprints that can be used to perform either.To get the idea of what these terminologies mean, i will be using a simple example. Trust me its really short journey with easy to grasp the concept. Prepare yourself to salivate as i shall be talking about foody example.

## Know how polling works

Imagine you walk 🚶🏾 into restaurant ask for a milkshake. Then a waiter handles you a milkshake right away. The next day you head to the same restaurant to order a milkshake again. This time unfortunately milk is out of stock till when the delivery is made at the store.

You head to your place with a bit frastration 😔🚶🏾 now though expecting to try again after few minutes. After few minutes, you try to check if they already made one. This time you find it available. You head to your place 😃🚶🏾 happy now.

Every time you want to know whether your favourite drink is available, you will have to go at the restaurant the ask.

![Polling: Pizza illustration](/img/telegram-polling-example.png)

This is a whole idea of polling. I promised to make the journey short so i wont go into long and short polling. Your bot has to check at regular interval whether telegram server received a new message.
Here a restaurant act as telegram server while he acts as a bot. So a bot will be checking for messages from server time to time.

## Know about Web-hook

Here is another case, You walk 🚶🏾 into a store asking for whatever favourite drink. Luckily by the time its available.

Next day, you walk in again to take one, unfortunately the drinks are out of stock. Then a waiter asks for your home address(contact info). He promises to deliver a drink in person at your door-step as the drinks get into the restaurant. So you head to your place sad but expecting to get one as soon as the store receives new stock.

After few minutes, delivery truck 🚛 arrives at the store with drinks. A waiter takes a bike to your place with a drink in hand. You happy again to have a drink.

![Webhook: Pizza illustration](/img/telegram-webhook-example.png)

The idea of  webhook is that you just need to tell telegram server the address(public accessed url) that will be receiving new messages as they hit their server.

Here a restaurant acts a telegram server and you being a bot. We have an additional member, who is a delivery guy. The guy in this case is a web-hook url.

## Lets make a comparison between two of them

As we are about to reach the end of our trip, lets dive direct into comparison between them. We shall compare them in terms ofL:-

- Implementation

In the polling approach, your application periodically sends requests to the Telegram Bot API to retrieve updates. It typically involves making HTTP requests at fixed intervals to check for new messages or events.

Contrary to polling,with web-hooks, you need to configure a callback URL on your server to receive incoming updates from the Telegram server. Your bot will receive a message whenever there is a new message or event

- Real-time updates

Web-hooks offer real-time updates as they send a request to your server immediately when a new message hits your bot. This reduces delays in receiving updates and responding.

With polling, you will have near-real-time updates. However, the frequency of polling determines the delay in receiving updates. This imposes delays in giving responses to users.

- Consumption of resources

Web-hooks are generally more resource-friendly compared to polling since the server only sends requests when an update occurs. It reduces unnecessary network traffic and server load.

So polling may not be the most efficient approach for high-volume or resource-constrained environments.
A starting point to deploying your chatbot in telegram is knowing the differences between the two.

Now you know their differences. You can weigh-out ⚖️ to choose one your prefer.

## Build a bot 🏁

As we the distation of the ride, hope you enjoyed the journey. You can build cool bots using [sarufi](https://sarufi.io) and seamlessly integrate it with Telegram.
We provide detailed blueprints to deploy your telegram sarufi chatbot using either of methods above. Detailed blueprint are available; [sarufi telegram chatbot](https://github.com/Neurotech-HQ/telegram-chatbot-blueprint) and [sarufi telegram web-hook chatbot](https://github.com/Neurotech-HQ/sarufi-telegram-webhook-blueprint).

## My word

Want to know what i would choose? Connect with me via [Twitter](https://twitter.com/JovineMutelani) and [LinkedIn](https://www.linkedin.com/in/jovine-mutelani-125062254/).

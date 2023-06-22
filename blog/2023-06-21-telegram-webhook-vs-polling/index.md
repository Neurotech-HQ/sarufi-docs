---
slug: sarufi-dashboard
title: Sarufi dashboard
authors: [jovine]
tags: [dashboard,Sarufi]
---
 

Telegram chat-bot can receive messages from telegram server through majorly two ways, namely polling and web-hook. Each method has its own trade offs. We shall explore the differences between the two in this short walk up the hill.
We shall take a quick look at their comparisons. Sarufi provides blueprints that can work in either way. Its good to know the differences so that you get rid of misunderstandings.
To get the idea of what these terminologies mean, i will be using a simple example. Trust me its really easy to grasp the concept.

## Know how polling works

In the first case, You walk into restaurant ask for a milkshake. Then a waiter brings you a milkshake. The next day you head to the same restaurant to order a milkshake again, unfortunately you find that its out of stock.
You leave expecting to come back after few minutes to check if they already made one.  Later you decide to check again whether milkshake is ready or not, this time you find it available.
Every time you want to know whether your favourite drink is available you will need to head out and ask a waiter.

Here you have to go in, check whether a drink is available or not. This is an example of polling. A bot a to check at regular interval if telegram server received a new message.
Here a restaurant act as telegram server while he acts as a bot. So a bot will be checking for messages from server time to time.

## Know about Web-hook

Here is another case, You walk into a restaurant asking for whatever favourite drink. Luckily by the time its available.

Next day, you walk in again to take one, unfortunately the drinks are out of stock.
Then a waiter asks for your home address(contact info). He promises to deliver a drink in person at your door-step as the drinks get into the restaurant.

Here a restaurant acts a telegram server and you being a bot. We have an additional member, who is a delivery guy. The guy in this case is a web-hook url.
You just need to tell telegram server your address(public accessed url) that will be receiving new messages as they hit their server.

## Lets make a comparison between two of them

As our trip is to be short up the hill, let dive direct into comparison between them. Lets compare them in term of:-
Implementation
In the polling approach, your application periodically sends requests to the Telegram Bot API to retrieve updates. It typically involves making HTTP requests at fixed intervals to check for new messages or events
Contrary to polling,with web-hooks, you need to configure a callback URL on your server to receive incoming updates from the Telegram server. Your bot will receive a message whenever there is a new message or event
Real-time updates
Web-hooks offer real-time updates as they send a request to your server immediately when a new message hits your bot. This reduces delays in receiving updates and responding.
With polling, you will have near-real-time updates. However, the frequency of polling determines the delay in receiving updates. This imposes delays in giving responses to users.
Consumption of resources
Web-hooks are generally more resource-friendly compared to polling since the server only sends requests when an update occurs. It reduces unnecessary network traffic and server load. So polling may not be the most efficient approach for high-volume or resource-constrained environments.
A starting point to deploying your chatbot in telegram is knowing the differences between the two.
Build a bot
Our short journey ends here. Build a bot with sarufi and seamlessly integrate it with Telegram.
Sarufi provides detailed blueprints to deploy your telegram sarufi chatbot using either of methods above. We have got you covered for whatever method you choose to deploy with. Detailed blueprint are available; sarufi telegram chatbot and sarufi telegram web-hook chatbot.

---
sidebar_position: 2
---

# Dashboard

Sarufi allows you to develop chatbots in a faster and convenient way. [sarufi.io](https://sarufi.io) has an interactive interface to get you started with your chatbot idea.

Developing your chatbot does not have to be time-consuming and painful. With the Dashboard's user interface, you will be able execute your ideas effortlessly.

Working with the dashboard requires no prior knowledge of programming as sarufi does all the heavy stuffs for you. All needed is your idea to get started.

## Dashboard Features

With a dashboard, you can do a lot quickly. Let's look at the key features of the dashboard.

### Deployment

The Sarufi dashboard enables you to deploy your chatbot on different messaging platforms such as WhatsApp, Telegram, Messenger and many more to come. This will enable you to reach your customers on their favorite messaging platform. You can read more on platform integration [here](/docs/category/integrations).

These integrations can be found in the dashboard under the chatbot on the Deployment tab.

![Sarufi dashboard integrations](/img/sarufi-dashboard-integrations.png)

### Chatbot Analytics

In the dashboard, you can see how your chatbot is performing. You can see the number of users, the number of messages sent and received and much more. This allows you to observe the analytics and make improvements based on them.

![Analytics users counts](/img/analytics-users.png)

![Analytics word cloud](/img/analytics-word-cloud.png)

### Chatbot as Template

With the dashboard, you can create a chatbot and share it as a template usable by other chatbots on the Sarufi platform. This will enable other developers to use your chatbot as a starting point for their chatbot.

Building a chatbot from scratch can be a daunting task. That's why we have created a few templates to help you get started quickly. You can use these templates to create a chatbot for your business in a few minutes. Templates will help you to get started quickly and you can customize them to your needs.

- How to use a template?

    To use a template, you need to follow these steps:

    1. Go to the [Templates](https://sarufi.io/templates) page which looks like this:


        ![Sarufi template marketplace](/img/sarufi-chatbot-template.png)

    1. Select a template that you want to use. Click **View Details** button to view the details of the template.
    1. Try out the demo of the template by clicking **Live chat**. You can also view the screenshots and gif of the template.
    1. Click on the **Use this template** button if you want to use the template.
    1. You will be required to log in into your Sarufi account. If you don't have an account, you can create one for free [here](https://sarufi.io).
    1. You can edit the chatbot according to your needs.

    It is very simple! You can create a chatbot for your business in a few minutes.


- How to create a template?

    To create a template, you need to follow these steps:

    1. Log in into your Sarufi account.
    2. Create a chatbot.
        The chatbot created should not have any ambiguity in the flow. It should be a complete chatbot.
    3. Test your chatbot and make sure that it is working as expected.
    4. Go to the **Template** page.
    5. Click on the **Publish** button in the top right.

    In order to publish your template, you need to fill out basic details about your template. Provide clear and concise information about your template's fuctionalities/features.

    ![Publish chatbot as template](/img/sarufi-template-details.png)

    On the next page, you can also include screenshots of the template in use. You can include a banner image, an image to introduce your chatbot, and several screenshots to show your chatbot in action. Ideally, you should include at least 4 screenshots of your bot in usage.
    ![Template details](/img/sarufi-template-details-2.png)

    Once you have filled in all the details, click on the **Publish** button. Your template will be published on the Sarufi marketplace.

- Available Templates

    We have a wide range of templates covering many business sectors including restaurants, hotels, eCommerce, customer support, lead generation and surveys. We will be adding more templates in the future.


Visit [Sarufi templates](https://www.sarufi.io/templates) to see what templates other developers have created.

### Website Deployment

After developing your Sarufi chatbot, you may want to integrate your bot with your website.

With the dashboard, web integration can be achieved within a few seconds. All you need to do is to specify your website URL and then you can easily customize the chat widget however you want, including theme, color, font, title and other things.

You will have a code snippet that you paste in your HTML page or your React/NextJS App easily 🚀.

![Web plugin settings](/img/sarufi-web-plugin.png)

You can see one of the bots with web integration at [UDICTI](https://udicti.udsm.ac.tz/).

### Integration

With support of webhooks, your bot will have the ability to communicate with third-party APIs (payment gateways, CRMs, etc.) at any point of a conversation.

![Sarufi Integration Interface](/img/integration_interface_image.png)

![Sarufi webhook setup](/img/sarufi-webhook-setup.png)


### Conversation History

As your bot gets to interact with users, it needs to be updated on the cases it was never trained on. You might be asking how this is possible. The key here is using conversation data to improve our chatbot responses and coverage.

![Sarufi conversation history](/img/sarufi-conversation-history.png)

### Chatbot Live Test

During development of anything, you would not like to move on without testing the current state of your project. Sarufi has a cool chatbot live-test feature. This will enable you to eliminate any guesswork and ensures that the chatbot you're developing will work as intended when deployed.

![Dashboard live test](/gif/sarufi-dashboard-live-test.gif)

### Media support

Chatbots are more engaging with audiovisual content like images or videos. The dashboard removes the barrier from making your chatbot have multiple senses by allowing you to use the following elements:

- images
- videos
- documents
- stickers

This will also work exactly the same way deployed to messaging platforms like WhatsApp, Telegram or in the chat widget of your website.

![Dashboard Media support](/img/sarufi-dashboard-media-support.png)

### Response Validation

In case you feel the need to validate conversation responses to match your business logic, Sarufi offers validation whether it is a mobile number, email or a date.

The new dashboard got you covered with our response validation feature. You can use default validators or even write your custom validator using [regular expressions](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html).

![Dashboard response validation](/img/sarufi-dashboard-response-validation.png)

### View Dialog Flow Tree

With the UI, you will be able to view your bot's flow tree. This makes the development process more convenient as you can visualize the connected intents and flows.

![Tree view of flow](/img/dashboard-intent-flow-tree-view.png)

## Start using the Dashboard

To get started with this interface, you will need to sign up with [Sarufi](https://www.sarufi.io).

![Sarufi home page](/img/sarufi.png)

You can login 🔓 using either a **Google** or a **Github** account.

## Create a Bot

After logging in, navigate to the Dashboard by clicking on `My Account` on your profile picture. On the top, click on the `Chatbots` tab and click `Create` in the top right. With creating a bot, you have two options, `intent-based` and [knowledge-based](/docs/sarufi-dashboard/create-bot-from-knowledge-base).

![Dashboard after logging in](/img/dashboard-after-log-in.png)

### Intent-based

Let's start with creating an intent-based chatbot. An intent-based chatbot enables us to finely tailor the way the bot will handle the conversations' flow. This is a good choice for `PizzaBot`.

After clicking `Create` >> **Intent-based**, you will see the following form which allows you to enter important information about your bot:

![Information about the bot](/img/dashboard-create-bot.png)

There are some things worthy of attention here.

- Language selection

    You can currently select either English or Swahili for your bot.
    The bot will be created with default intents and flows accordingly.

- Threshold Settings

    In your bot's settings (Open your chatbot and click on the `Settings` icon in the bottom left), you can customise the answer threshold.

    The threshold indicates how confident the bot must be in order to respond to the user and continue the flow. The threshold is a floating-point value between 0 and 1.

    For example, if the bot has a confidence level of **0.345** on a certain user massage. If we set the bot's threshold to **0.4**,
    it will not recognise the intent and prompt the user to repeat their query with a fallback message.

    ![Illustration on Threshold](/img/illustration-threshold.png)

    Setting the threshold in general means that if the model's confidence in the user intent is below the threshold, the bot will fallback to the fallback message or document.

    The fallback can be a simple message (as "Please rephrase your message" or "Please let me know what you mean by saying this") or the bot can be configured to fallback to a document. This is covered in the document [Creating a bot using knowledge base](/docs/sarufi-dashboard/create-bot-from-knowledge-base).


## Sarufi video series

We have prepared a very easy to watch [Sarufi video series](https://www.youtube.com/watch?v=4up__WcbB-w&list=PLeHPyjol4_fXXiMBwb3Wc8KYiw_nB_4Ye&index=2).
Please watch the series to learn more on how to utilise the Sarufi platform.

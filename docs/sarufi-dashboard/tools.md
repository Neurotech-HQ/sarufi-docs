---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Knowledge Base Tools

Tools are collection of fuctions that provide a way for LLM-based chatbot to interact with external world. The tools aid your chatbot to fetch data from external sources and use it to respond to user's questions. They extend chatbot's ability to respond to user questions. You can let the bot from internet sources like Wikipedia,OpenWeatherMap, Google Maps, etc.

![Knowledge base tools](/img/knowledge-base-tools.png)



## Supported tools

To get access to tools, navigate to settings of your bot that uses Knowledge base >> Tools.  The number of tools will increase as we continue to add more tools. Currently, we support the following tools:

Each tool receives a `description` as part of its configuration. The description is used to guide the LLM on how to use the tool. It should be as clear as possible to avoid ambiguity. The clear description will help the LLM to use the tool in the right way.

1. [Arxiv Search](#arxiv-search)
1. [Bing Search](#bing-search)
1. [Brave Search](#brave-search)
1. [ChatGPT plugin](#chatgpt-plugin)
1. [Duck Duck Go](#duck-duck-go)
1. [Google Places](#google-places)
1. [Google Search](#google-search)
1. [Metaphor search](#metaphor-search)
1. [OpenWeatherMap](#openweathermap)
1. [Serper Search](#serper-search)
1. [Wikipedia](#wikipedia)
1. [Yahoo Finance New](#yahoo-finance-news)
1. [YouTube Search](#youtube-search)

### Arxiv Search

Arxv is a repository of electronic preprints of scientific papers in the fields of mathematics, physics, astronomy, computer science, quantitative biology, statistics, and quantitative finance, which can be accessed online. You can power your chatbot with Arxiv search tool to search for papers in the repository. This will help your chatbot to respond to questions related to scientific papers.

You will have to fill in some of the parameters to get started with Arxiv search tool. The parameters are:-

- Number of Search Results

    Number of the top-scored document(s) the tool should consider. Having large number costs the letancy of response. 3 search results are enough to get the right answer.
- Max Docs

    A limit to the number of loaded documents to the Tool. The high number increases response time. So the number should be set to a reasonable value. Having 3 documents is enough to get the right answer.
- Max Query Length

    The cut limit on the query used for arxiv search. Query length should be limited to avoid long response time. The recommended length is 300.
- Max Characters

    The cut limit on the characters of the document to be returned. The recommended number of characters is 4000.
- Description

### Bing Search

This gives your chatbot super power to search the web using Bing search engine. The tool will help your chatbot to respond to questions related to web search. The tool will return the top scored document(s) from the search results.

You will need to obtain Bing search API key to use this tool. You can get the API key from [here](https://www.microsoft.com/en-us/bing/apis). The API key is free to use but you will need to have a Microsoft account.

The parameters to be filled are:-

- API Key

    The API key to be used to access the Bing search API. The API key is obtained from [here](https://www.microsoft.com/en-us/bing/apis).
- Bing search url

    The url to the Bing search API. You can use alternative url if you have one. Lets use the following url

    ```text
    https://api.bing.microsoft.com/v7.0/search
    ```
- Number of search results.

    Number of the top-scored document(s) the tool should consider. Having large number costs the letancy of response. 3 search results are enough to get the right answer.
- Description

### Brave Search

This gives your chatbot super power to search the web using Brave search engine. The tool will help your chatbot to respond to questions related to web search. The tool will return the top scored document(s) from the search results.

You will need to obtain Brave search API key to use this tool. The API key is free to use but you will need to have a Brave account.

You will need to fill in the following parameters:-

- API Key

    The API key to be used to access the Brave search API. The API key is obtained from [here](https://search.brave.com/search/api).
- Number of search results.
- Description

### ChatGPT plugin

This gives more support to your chatbot by adding extra functionality from GPT Plugins. You only need a plugin url to get started.  Example of the plug in url is:-

```text
https://www.klarna.com/.well-known/ai-plugin.json
```
The url should be a valid `json` file. 

### Duck Duck Go

This tool gives your chatbot super power to search the web using Duck Duck Go search engine. The tool will help your chatbot to respond to questions related to web search. The tool will return the top scored document(s) from the search results.

what you need to set up the tool:-

- Number of search results.

    Number of the top-scored document(s) the tool should consider. Having large number costs the letancy of response. 3 search results are enough to get the right answer.
- Description.

This tool provides ability to search without a need of API key. Thanks to the Duck Duck Go team for providing the API for free, you can support them by donating [here](https://duckduckgo.com/donations).

### Google Places

This aid your chatbot to search for places using Google Places API. The tool will help your chatbot to respond to questions related to places. This is cool tool to use if you are building a chatbot that will help people to find places. The uses cases are endless.

What you need to set up the tool:-

- Google Place API key.

    The API key to be used to access the Google Places API. The API key is obtained from [here](https://developers.google.com/maps/documentation/places/web-service/get-api-key).
- Number of search results.

    Number of the top-scored document(s) the tool should consider. Having large number costs the letancy of response. 3 search results are enough to get the right answer.
- Description.

    Example: "This tool helps you know about places around the world."

### Google Search

Use this tool to power your chatbot with Google search engine. The tool will help your chatbot to respond to questions related to web search. 

You will need to set up the following parameters:-

- Google Search API Key.

    The API key to be used to access the Google Search API. The API key is obtained from [here](https://console.cloud.google.com/apis/credentials).
- Google Custom Search Engine ID.

    The ID of the custom search engine to be used. The ID is obtained from [here](https://programmablesearchengine.google.com/controlpanel/create).
- Search Engine Name.
- Number of search results.
- Description.

### Metaphor

Metaphor is a search engine optimized for LLMs. It provides efficient way for your chatbot to get latest information/details about the subject.

- Metaphor API Key.

    Metaphor provides free 1000 searches per month which should be ideal for a small chatbot. You can get metaphor API Key from [here](https://platform.metaphor.systems/)
- Number of search results.

    Number of the top-scored document(s) the tool should consider. Having large number costs the letancy of response. 3 search results are enough to get the right answer
- Description.

### OpenWeatherMap

This will help your chatbot get accurate weather information. This is handful tool when you chatbot to provide weather details to users.

What you need to set up the tool:-

- OpenWeatherMap API Key.

    Get your open weather API key by signing up or logging in [here](https://openweathermap.org/api/)
- Description.

    Example: "Useful when you need to know about weather details of a place"



### Serper Search

This gives your chatbot super power to search the web using Serper search engine. The tool will help your chatbot to respond to questions related to web search. The tool will return the top scored document(s) from the search results.

You will need to obtain Serper search API key to use this tool. The API key is free to use but you will need to have a Serper account.

You will need to fill in the following parameters:-

- Serper API Key.

    The API key to be used to access the Serper search API. The API key is obtained from [here](https://serper.dev/).
- Search Engine.
- Geo Location.
- Number of search results.
- Language.
- Description.

### Wikipedia

This gives your chatbot super power to search the web using Wikipedia search engine. The tool will help your chatbot to respond to questions related to web search. The tool will return the top scored document(s) from the search results.

What you be setting:-

- Number of search Results

    Number of the top-scored document(s) the tool should consider. Having large number costs the letancy of response. 3 search results are enough to get the right answer.

- Language.

    The language to be used to search the Wikipedia.

- Max Characters.

    The cut limit on the characters of the document to be returned. The recommended number of characters is 4000.

- Description.


### Yahoo Finance News

This is helpful tool if you want your chatbot to respond to questions about finance details of most companies.

What you will have to configure:-

- Number of search Results.

    Number of the top-scored document(s) the tool should consider. Having large number costs the letancy of response. 3 search results are enough to get the right answer.

- Description

### YouTube Search

Do you want your chatbot to provide links to YouTube videos related to person/topic? This tool will help you achieve that. All you need is a good description that will guide the LLM on how to use the tool. Then you are good to provide relevant YouTube videos to your users as support knowledge.


## Sample use cases

Lets see what the tools can do. Will show few of them here. Just log in sarufi to build cool chatbot that utilizes the power of these tools

<Tabs>
<TabItem value="duckduck-go" label="DuckDuck Go">

Lets look at how duckduck go engine can support your chatbot. The question is about State of the art object detection. With the help of duckduck go, the bot was able to provide the right answer.

![Tools: DuckDuck Go](/img/tools-example-duckduck-go.png)


</TabItem>
<TabItem value="openweathermap" label="OpenWeatherMap">

An example using openweathermap. This used a simple description as "Useful when you need to obtain current weather details". The question was asked on rainy day and the bot was able to provide the right answer.

![Tools: OpenWeatherMap](/img/tools-example-openweathermap.png)

</TabItem>
<TabItem value="Metaphor Search">

Below is an example, where the chatbot was able to repond to question about `CLIP model` using Metaphor as supporting tool.

![Tools: Metaphor Search](/img/tools-example-metaphor-search.png)


</TabItem>
<TabItem value="wikipedia" label="Wikipedia">

Below is an example of chatbot coversation as it could find clear information. The question was asked on `02th nov 2023`. The event actually took place on `30th oct 2023`. The bot did not have trouble to find the right answer.

![Tools: Wikipedia](/img/tools-example-wikipedia.png)

The uses cases of tools are endless. You can use them to build chatbot that can respond to questions about places, weather, people, events, etc. The tools will help your chatbot to provide accurate information to your users.

</TabItem>

<TabItem value="YouTube Search">

An example of YouTube Search Tool. This demonstrates how you can use the tool to provide YouTube videos as support knowledge to your users.

![Tools: YouTube Search](/img/tools-example-youtube-search.png)

The First video provided directs to Roboflow video on CVPR. The second video directs to cvprtum video on CVPR. This is cool way to provide support knowledge to your users.

</TabItem>
</Tabs>

With tools, you LLM based chatbot will be able to provide accurate information to your users. Sign up/Log in to sarufi to build cool chatbot that utilizes the power of these tools.
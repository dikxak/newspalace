# Newspalace

Newspalace is a web application where various news from different sources can be viewed by searching or selecting category for news you are interested. It will display all the related news according to your query or category you are using.

You can search for news sources like: bbc, cnn, techcrunch, timesofindia, etc. (You can only enter **bbc** in the search field to get the news from BBC source)

Also, you can search for news query like: bitcoin, crypto, russia, biden, ukraine, elon musk etc. Just search for any thing you want to get news of.

Adding to the features, you can save (or bookmark) the news for viewing later. And you too can share news among different social medias as well as copy the url for the corresponding news.

You can click on the heading of the displayed news and it will let into the original website where news was posted initially.

## Beforing starting the project and using it

You need to set up your API Key before using the project.

### Steps to set up API Key

1. Visit [NewsAPI](https://newsapi.org/) website.

2. Create account and get API Key.

3. Under `src/js` folder, you will get `config.js` file.

4. Just replace your API key with `const API_KEY` variable value. (i.e. replace '< YOUR API KEY HERE >' text with your API key).

## How to install

I have developed this web application using third party API (i.e. [NewsAPI](https://newsapi.org/)) so, I am unable to preview it after publishing it to the online. NewsAPI have restricted the use of API on actual website and is only able to perform on localhost. Therefore, you must install it on your local workspace before running it.

1. Clone the project to your local machine
   `git clone https://github.com/dikxak/newspalace`

2. Install all the dependencies
   `npm install`

3. Start the localhost
   `npm start`

After these three process, **parcel** (I have used parcel as module bundler) will start the localhost on port 1234 ([localhost](http://localhost:1234)) and you should be able to see the initial layout of the page.

**!IMPORTANT - If the layout is too big for your screen, try decreasing the zoom level on the browser 😀**

## How to use

After you have started the localhost server you should see initial layout as:

![Initial Newspalace Layout](/img_markdown/initial_layout.PNG)

Input the query you want to search for in the search field (I have entered ukraine):

![Search Query](/img_markdown/search_query.png)

After hitting enter you will get all the news related to ukraine:

![Search Results For Correspoding Query](/img_markdown/search_results.PNG)

Now you can scroll to bottom and you will get some infinite scroll animation/effect. As the results in developer plan from NewsAPI only consists of 100 results maximum. So, I have simulated the loading effect.

### What can you do with the results

1. You can click on the heading of the news to read the original news.
   <br/>
2. You can save(or bookmark) the news results by clicking on the **bookmark icon** for reading later (I have used native localstorage API from browser to store/save the bookmarked result). You can view you saved searches by clicking the **saved searches** on the menu at left hand side of the web page.
   <br />
3. You can share the original link of the news with your friends or family on different social medias by clicking the **share icon**.
   <br/>
4. You can also see for the search history for all the searches that you have searched for by clicking on the **search history** on the menu.

## What have I used

1. To get the news results, I have used [NewsAPI.org](https://newsapi.org/)
   <br/>
2. For formatting time on the search result, I have used npm package called, [JavaScriptTimeAgo](https://www.npmjs.com/package/javascript-time-ago)
   <br/>
3. For getting the local news using the country name, I have used native _geolocation_ API and for reverse geocoding, I have used [BigData Cloud API](https://www.bigdatacloud.com/).
   <br/>
4. As module bundler, I have used [Parcel](https://parceljs.org/docs/)
   <br/>
5. For transpiling and polyfilling, I have used [Core-JS](https://www.npmjs.com/package/core-js) and [Regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime)

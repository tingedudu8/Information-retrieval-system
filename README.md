# Information-retrieval-system

## 1. What is the problem you are solving?

The main problem for our project is that users can’t efficiently filter information on Yelp to find the most ideal and suitable restaurants. Users usually start with one or two vague words, but Yelp will return hundreds, even thousands of restaurants. How to retrieve these restaurants with an efficient search system, and rank them based on the comments with a recommendation system, is the problem our team aims to solve.

When people try to pick a restaurant by searching on Yelp, they usually have no idea what exactly they want. For example, they may know that they want to try Thai food, or have a Mexican taco tonight. Searching for restaurants based on these categorical key words is the first problem we want to solve, especially if we want to make it efficient and precise.

The second problem is how to find the most recommended restaurant based on comments. On Yelp, each restaurant has a list of comments from people who went there. This is perhaps the most important information. Unfortunately, they are unstructured and overwhelmingly many. So we will proceed to figure out how to rank the restaurants.

## 2. What work do you plan to do the project?

We split the whole project into several subtasks.

1. Data crawling. Crawl information about restaurants in some major cities. For each fetched web page, we will parse it and extract necessary information like restaurant name, category and its comments.

2. Configure Solr system to build index on the retrieved data, so users can search restaurants with food categories.

3. Split parsed into train and testing dataset. Train a sentiment analysis model based on the comments. Then calculate the average “sentiment score” for each restaurant.

4. Build the user interface, where users can search based on food category, then get recommended restaurants that have the highest “sentiment score”.

## 3. Which algorithms/techniques/models you plan to use

For the first step, we will use some powerful libraries in Python for crawling pages from Yelp. More specifically, we crawl the pages by scrapy, which runs efficiently and automatically once given a start URL. Then for each fetched HTML page, we parse the file and extract the useful information useful for search engine and sentiment analysis models. Then Apache Solr is used for building indexes on the documents. After that, the search engine should be able to set up. This step is mainly configuration with the Solr system, which is a powerful open source tool for building uip search engines. After Solr is set up, we can try some basic search queries with REST clients, or simply using Postman.

Sentiment analysis is used to extract people’s opinion in the comments. This is like a tiny natural language processing problem, so we start with NLTK to preprocess the unstructured comments into distinguishable tokens. Then multiple algorithms will be explored. They can be divided into two categories: lexicon based approaches and machine learning algorithms. For example, we can apply Naive Bayes sentiment analysis or Neural networks in machine learning.

Finally we will build a simple web application with Django. In Django, we can establish simple HTML pages, and configure it with a backend server. In the backend, we will deal with queries in the framework of Django. The whole list of retrieved documents will be returned by Solr, and then sorted by the sentiment score, which is predicted by the sentiment analysis models.

## 4. Evaluation, testings and measurement of success

Technically, we will measure the performance of the search engine by estimating recall and precision. Then we will seek the algorithm with the lowest testing dataset Residual Standard Error (RSE).

Then we will implement unit testing during the process of implementing the website with Django.

Finally, we will invite some students to try our system, to see if they are satisfied with recommended restaurants. They will be asked to fill in a questionnaire about their evaluation of the project.

## 5. What do you expect to submit/accomplish by the end of the semester?

Our ideal expectation is that we can build up a useful website for recommending restaurants. By the end of this semester, we hope to present a well functioning website. Even if it has only one or two pages, we hope the recommendations are welcome. People can actually trust this website to find a satisfactory restaurant.

Besides this website, we will also deliver a presentation on how this website works. And detailed report recording technical challenges we get over during these months.

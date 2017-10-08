"""
news.py:
Scrapes news sites (urls) specified in util.SOURCES for articles.
"""
import json
import newspaper
import nltk
from newsapi.articles import Articles

config = newspaper.Config()
config.memoize_articles = False
with open('api_keys.json') as keyfile:
    NEWSAPI_KEY = json.load(keyfile)['key']
news_container = Articles(API_KEY=NEWSAPI_KEY)


def get_news():
    # TODO: Generalize for an input of different sources or something
    bbc_news = news_container.get_by_top(source="bbc-news")
    wsj = news_container.get_by_top(source="the-wall-street-journal")
    natgeo = news_container.get_by_top(source="national-geographic")
    reuters = news_container.get_by_top(source="reuters")
    nyt = news_container.get_by_top(source="the-new-york-times")

    papers = [bbc_news, wsj, natgeo, reuters, nyt]
    categories = {bbc_news['source']: 'general', wsj['source']: 'business', 
        natgeo['source']: 'science', reuters['source']: 'general',
        nyt['source']:'general'}

    output = list()
    for paper in papers:
        for article in paper['articles']:
            # Save article metadata from newsapi
            art_out = dict()
            art_out['source'] = paper['source']
            art_out['title'] = article['title']
            art_out['url'] = article['url']
            art_out['top_image_url'] = article['urlToImage']
            art_out['date'] = article['publishedAt']
            art_out['description'] = article['description']
            art_out['authors'] = article['author']
            art_out['category'] = categories[paper['source']]

            # Download and Parse article using newspaper3k
            art_parsed = newspaper.Article(article['url'])
            art_parsed.download()
            art_parsed.parse()
            # art_out['date'] = art_parsed.publish_date
            art_out['text'] = art_parsed.text
            art_parsed.nlp()
            art_out['summary'] = art_parsed.summary
            output.append(art_out)
    with open('sample_articles.json', 'w') as sample:
        json.dump(output, sample)
    return output

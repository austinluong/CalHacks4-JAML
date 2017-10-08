"""
news.py:
Scrapes news sites (urls) specified in util.SOURCES for articles.
"""
import json
import newspaper
import nltk
import datetime
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

    newsweek = news_container.get_by_top(source="newsweek")
    techcrunch = news_container.get_by_top(source="techcrunch")
    espn = news_container.get_by_top(source="espn")
    independent = news_container.get_by_top(source="independent")
    polygon = news_container.get_by_top(source="polygon")    
    time_mag = news_container.get_by_top(source="time")
    huffpost = news_container.get_by_top(source="the-huffington-post")
    bbc_sport = news_container.get_by_top(source="bbc-sport")
    bus_insider = news_container.get_by_top(source="business-insider")
    recode = news_container.get_by_top(source="recode")

    papers = [bbc_news, wsj, natgeo, reuters, nyt, newsweek,
        techcrunch, espn, independent, polygon, time_mag, huffpost,
        bbc_sport, bus_insider, recode]
    categories = {bbc_news['source']: 'general', wsj['source']: 'business', 
        natgeo['source']: 'science', reuters['source']: 'general',
        nyt['source']:'general', 
        newsweek['source']: 'general', techcrunch['source']: 'technology', 
        espn['source']: 'sport', independent['source']: 'general',
        polygon['source']:'gaming', 
        time_mag['source']: 'general', huffpost['source']: 'business', 
        bbc_sport['source']: 'sport', bus_insider['source']: 'business',
        recode['source']:'technology'}
    formatted_source = {bbc_news['source']: 'BBC News', wsj['source']: 'Wall Street Journal', 
        natgeo['source']: 'science', reuters['source']: 'general',
        nyt['source']:'New York Times', 
        newsweek['source']: 'Newsweek', techcrunch['source']: 'TechCrunch', 
        espn['source']: 'ESPN', independent['source']: 'Independent',
        polygon['source']:'Polygon', 
        time_mag['source']: 'Time', huffpost['source']: 'The Huffington Post', 
        bbc_sport['source']: 'BBC Sport', bus_insider['source']: 'Business Insider',
        recode['source']:'Recode'}
    time_zone = {bbc_news['source']: datetime.timedelta(0, 36000,0), 
        wsj['source']: datetime.timedelta(0, 18000,0), 
        natgeo['source']: datetime.timedelta(0, 7200,0), 
        reuters['source']: datetime.timedelta(0, 7200,0), 
        nyt['source']: datetime.timedelta(0, 18000,0), 
        newsweek['source']: datetime.timedelta(0, 7200,0), 
        techcrunch['source']: datetime.timedelta(0, 7200,0), 
        espn['source']: datetime.timedelta(0, 7200,0),
        independent['source']: datetime.timedelta(0, 7200,0),
        polygon['source']: datetime.timedelta(0, 7200,0), 
        time_mag['source']: datetime.timedelta(0, 7200,0), 
        huffpost['source']: datetime.timedelta(0, 7200,0), 
        bbc_sport['source']: datetime.timedelta(0, 36000,0), 
        bus_insider['source']: datetime.timedelta(0, 7200,0), 
        recode['source']: datetime.timedelta(0, 7200,0)}

    output = list()
    for paper in papers:
        for article in paper['articles']:
            # Save article metadata from newsapi
            art_out = dict()
            art_out['source'] = formatted_source[paper['source']]
            art_out['title'] = article['title']
            art_out['url'] = article['url']
            art_out['top_image_url'] = article['urlToImage']
            art_out['description'] = article['description']
            art_out['authors'] = article['author']
            art_out['category'] = categories[paper['source']]
            if article['publishedAt']:
                time = datetime.datetime.strptime(article['publishedAt'], '%Y-%m-%dT%H:%M:%SZ')
                time_diff = time + time_zone[paper['source']] - datetime.datetime.now()
                if time_diff.days <= 0:
                    temp = time_diff.seconds // 3600
                    date = "%d hours ago" %temp
                else:
                    date = "%d days ago" %time_diff.days
                art_out['date'] = date
            else:
                art_out['date'] = None

            # Download and Parse article using newspaper3k
            art_parsed = newspaper.Article(article['url'])
            art_parsed.download()
            art_parsed.parse()
            # art_out['date'] = art_parsed.publish_date
            art_out['text'] = art_parsed.text
            art_parsed.nlp()
            art_out['summary'] = art_parsed.summary
            output.append(art_out)
    # with open('sample_articles.json', 'w') as sample:
    #     json.dump(output, sample)
    return output

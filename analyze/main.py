"""
main.py:
Runs news scraping and sentiment analyzing code and saves
the data to a database
"""
import analyze
import save
import news

import json
import os


def main():
    filename = '../expo/assets/articles.json'
    if os.path.isfile(filename):
        with open(filename, 'r') as file:
            articles = json.load(file)
    else:
        articles = news.get_news()
        for article in articles:
            article['score'] = analyze.analyze(article['text'])

        with open(filename, 'w') as file:
            json.dump(sorted(articles, key=lambda x: x['score']), file)
    save.save_to_database(articles)


if __name__ == '__main__':
    main()

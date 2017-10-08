"""
analyze.py:
Uses the Google Cloud Natural Language Proccesing API to get a
sentiment score for an article based on its content.
"""
import os

from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'service_account.json'


def print_result(annotations, sentence_scores=False):
    """For debugging, prints the results of running a sentiment analysis"""
    score = annotations.document_sentiment.score
    magnitude = annotations.document_sentiment.magnitude

    if sentence_scores:
        for index, sentence in enumerate(annotations.sentences):
            sentence_sentiment = sentence.sentiment.score
            print('Sentence {} has a sentiment score of {}'.format(
                index, sentence_sentiment))

    print('Overall Sentiment: score of {} with magnitude of {}'.format(
        score, magnitude))
    return 0


def analyze(article_text):
    """Run a sentiment analysis request on text within a passed filename."""
    client = language.LanguageServiceClient()

    document = types.Document(
        content=article_text,
        type=enums.Document.Type.PLAIN_TEXT)
    annotations = client.analyze_sentiment(document=document)
    score = annotations.document_sentiment.score
    magnitude = annotations.document_sentiment.magnitude

    return score * magnitude

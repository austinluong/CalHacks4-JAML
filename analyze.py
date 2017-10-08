import argparse

from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types


def print_result(annotations, sentence_scores=False):
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


def analyze(article_text, sentence_scores=False):
    """Run a sentiment analysis request on text within a passed filename."""
    client = language.LanguageServiceClient()

    document = types.Document(
        content=article_text,
        type=enums.Document.Type.PLAIN_TEXT)
    annotations = client.analyze_sentiment(document=document)

    # Print the results
    print_result(annotations, sentence_scores=sentence_scores)


if __name__ == '__main__':
    article_text = "Hello, world. I will fucking murder your guts."
    print(article_text)
    analyze(article_text, sentence_scores=True)

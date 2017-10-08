"""
save.py:
Saves the data for each processed and analyzed article to a database.
"""
import psycopg2


def open_connection():
    """Returns a connection to the positiveNews database"""
    return psycopg2.connect(database='positiveNews', host='127.0.0.1')


def save_to_database(articles):
    """Saves list of analyzed articles to the database"""
    connection = open_connection()
    try:
        for article in articles:
            with connection.cursor() as cursor:
                query = (
                    "INSERT INTO articles ("
                        "title, url, authors, source, create_date, "
                        "top_image_url, summary, description, "
                        "positivity_score, trustworthiness, likes)"
                    "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                )
                cursor.execute(
                    query,
                    (
                        article['title'], article['url'],
                        article['authors'], article['source'],
                        article['date'],
                        article['top_image_url'], article['summary'],
                        article['description'], article['score'],
                        0, 0
                    )
                )
        connection.commit()
    finally:
        connection.close()

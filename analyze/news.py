""" 
news.py:
Scrapes news sites (urls) specified in util.SOURCES for articles.
"""
import util
import newspaper
import NLKT

config = newspaper.Config()
config.memoize_articles = False

# TODO: Change it to the News API instead of newspaper
cnn = newspaper.build(util.SOURCES[cnn], config)
nbc = newspaper.build(util.SOURCES[nbc], config)
bbc = newspaper.build(util.SOURCES[bbc], config)
fox = newspaper.build(util.SOURCES[fox], config)
nyt = newspaper.build(util.SOURCES[nyt], config)

papers = {'cnn': cnn, 
	'nbc': nbc, 
	'bbc': bbc,
	'fox': fox,
	'nyt': nyt}

output = list() # list of all the accessed articles. 

# Multithreaded load balancing for article downloads
# newspaper.news_pool.set(papers, threads_per_source=2)
# newspaper.news_pool.join()

# If multithreading doesn't work use the following
for paper in papers:
	a_counter = 0
	for article in papers[paper].articles:
		if a_counter > util.ARTICLE_NUM:
			break
		article.download() # TODO: Make sure article is current or unique
		article.parse()
		art_out = dict()
		art_out['title'] = article.title
		art_out['url'] = article.url
		art_out['text'] = article.text
		# Make a default image for each paper
		art_out['top_image_url'] = article.top_image # TODO: Change to new api
		art_out['date'] = article.publish_date #TODO: Change to new api.
		article.nlp()
		art_out['summary'] = article.summary

		# art_out['description'] =  # TODO: implement with the new api

		output.append(art_out)
		a_counter += 1

return output
		










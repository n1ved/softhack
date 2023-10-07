from bs4 import BeautifulSoup as BS
import requests as req
from transformers import pipeline


def newsscrapp(name):
    url = f"https://www.businesstoday.in/topic/{name}"
    a = []
    webpage = req.get(url)
    trav = BS(webpage.content, "html.parser")
    for link in trav.find_all('a'):
        if(str(type(link.string)) == "<class 'bs4.element.NavigableString'>" and link.string != " " and len(link.string)> 30):
            a.append(link.string)
    return a



def sentiment(news_list):
    count=0
    sentiment_pipeline = pipeline("sentiment-analysis")
    analyse=sentiment_pipeline(news_list)
    print(analyse)
    for i in analyse:
        if i['label']=="POSITIVE":
            count+=1
    return count/len(analyse)

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
from transformers import GPTNeoForCausalLM, GPT2Tokenizer

model = GPTNeoForCausalLM.from_pretrained("EleutherAI/gpt-neo-1.3B")
tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-1.3B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
print(gen_text = tokenizer.batch_decode(gen_tokens)[0])
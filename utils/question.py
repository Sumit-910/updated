import os
from apikey import apikey
import streamlit as st
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from fpdf import FPDF

os.environ['OPENAI_API_KEY']=apikey

#prompts
st.title('QUESTION GENERATOR')
board=st.selectbox('Select your Board',('ICSE','CBSE','Board of Secondary Education Odisha(BSE)'))
classes=st.selectbox('Select your Board',('6','7','8','9','10'))
sub=st.selectbox('Select your Board',('Maths','Science','Social Studies','English'))
easy=st.text_input('Enter number of easy level questions')
med=st.text_input('Enter number of medium level questions')
diff=st.text_input('Enter number of difficult level questions')


message = (
    f"Create a question of {board} board for class {classes} on subject {sub} with {easy} easy questions,{med} medium questions and {diff} difficult questions"
)

llm=OpenAI(temperature=0.9) #temperature gives the degree of creativity


if st.button('submit'):
    response=llm(message)
    st.write(response)
    st.download_button('Download Question',response,file_name='Test.pdf')

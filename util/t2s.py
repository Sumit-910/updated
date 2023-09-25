import pyttsx3
import streamlit as st
from pathlib import Path
import PyPDF2

choice=st.selectbox('Select input type',('Text','Pdf'))
if choice=='Text':
    content=st.text_input("Enter text")
else:
    file = st.file_uploader("Upload a PDF file", type="pdf")
    content=[]
    if file is not None:
        reader = PyPDF2.PdfReader(file)
        content = ""
        pag=len(reader.pages)
        for page in range(pag):
            content += reader.pages[page].extract_text()

text_speech=pyttsx3.init()
if st.button('Submit'):
    
    text_speech.save_to_file(content,'./speeach.mp3')
    text_speech.runAndWait()
    audio_file = open('./speeach.mp3', 'rb')
    audio_bytes = audio_file.read()

    st.audio(audio_bytes, format='audio/wav')



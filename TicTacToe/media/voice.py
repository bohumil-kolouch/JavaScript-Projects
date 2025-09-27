from gtts import gTTS

# Text for the announcer
text = "The game is a tie!"

# Generate the audio (male radio commentator style is not supported,
# but you can use this as the base and later apply effects in Audacity or similar)
tts = gTTS(text=text, lang="en")

# Save as MP3
tts.save("tie.mp3")

print("MP3 file 'winGame.mp3' created successfully!")
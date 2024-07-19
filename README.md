# IMAGEN, AN AI-POWERED IMAGE GENERATOR

![Photo1](https://github.com/lehuykhanh41/Image-Generator/blob/master/Photos/img1.jpg)

![Photo2](https://github.com/lehuykhanh41/Image-Generator/blob/master/Photos/img2.png)

![Photo3](https://github.com/lehuykhanh41/Image-Generator/blob/master/Photos/img3.jpg)

![Photo4](https://github.com/lehuykhanh41/Image-Generator/blob/master/Photos/img4.png)

## 1. OVERVIEW:

Imagen is an AI Image Generator, with the integration of DALL-E from OpenAPI. Users enter a prompt on the left, hit Generate, and the program will return the appropriate image.

## 2. INSTALLS:

1. PREREQUISITE: You will need:
     - An OpenAI API Key.
     - A MongoDB URI Key.
     - Cloudinary Keys.
     - Your own JWT Key.
   
2. SET UP .env FILE:
```
MONGODB_URI = ...
JWT_KEY = ...
PORT = ...
```

3. Build the app:
```
npm run build
```

4. Start the app after building:
```
npm run launch
```

## 3. FEATURES:
- Account Registration, Login, Logout and Authorization.
- Purchase Credits for Image Generation.
- Image generation using DALL-E.
- (Coming Soon) History features that allow users to see their past creations.

## 4. TECHNOLOGIES:

- MERN Stack: MongoDB, Express, ReactJS, NodeJS for the base functional app.
- TailwindCSS for styling.
- DALL-E API for image generation


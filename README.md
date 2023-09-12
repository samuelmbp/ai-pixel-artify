# AI Pixel Artify

AI Pixel Artify is a full-stack web application that utilizes artificial intelligence to generate unique and creative images. With a minimalistic design, dynamic image layout, and interactive features, this application empowers users to explore and personalize AI-generated artwork.

The hover effect on each image provides a unique prompt, inviting users to generate their own AI images by incorporating their names. The app offers image downloads, search functionality, and the option to create new AI images either through a surprise button or by entering custom prompts. Sharing capabilities create a lively community where users can display and share their favorite AI-generated images with others.

## Getting Started

To get started with AI Pixel Artify, follow these steps:

1. Clone this repository to your local machine.
2. `cd /client` and run npm install to install the the client side dependencies
3. `cd /server` and run npm install to install the server side dependencies.
4. Register for free and get the api keys from the following:
   - OpenAi `https://platform.openai.com/`
   - Cloudinary `https://cloudinary.com/`
   - Mongo DB Atlas `https://www.mongodb.com/atlas/database`
5. Create a `.env` file in the `root server folder` and add the api keys
6. `cd /client ` and run `npm run dev` to start the client web server
7. `cd /server` and run `npm start` to start the server
8. Open your web browser and navigate to `http://localhost:5173/` to access AI Pixel Artify.

## Usage

`Note:` </br>
To generate an image based on a prompt, `you must enter your name`.

The backend of the application is hosted on Render, so it might take a while to load the content. I appreciate your patience and hope you enjoy using the app.

### Overview

- Minimal design
- Dynamic image layout
- Hover effect on each image that showcases a users prompt to generate each AI image with their name
- Can download any image
- Search functionality
- Create new AI images by clicking the surprise me button or by entering any prompt of your choice
- Share the posts with the community

# AI Pixel Artify

Full Stack ai image generation web application.

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

If you visit the link of the web application (hosted on netlify), you might have to wait for 10-15 seconds(only for the first time) to see all the images as the `render` cloud application server provider takes a while to receive the requests.

### Overview

- Minimal design
- Dynamic image layout 
- Hover effect on each image that showcases a users prompt to generate each AI image with their name
- Can download any image 
- Search functionality 
- Create new AI images by clicking the surprise me button or by entering any prompt of your choice 
- Share the posts with the community



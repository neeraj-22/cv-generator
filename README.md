# CV Generator
### Full Stack MERN App to quickly generate a downloadable and printable CV 

<p><i><b>Enter your details into the app</b></i></p>

![CV-Generator-App](https://user-images.githubusercontent.com/64327599/167257140-cce3ad44-5865-4fad-9551-cc03eb0331fd.png)

<p><i><b>Get a readable and professional CV generated in fractions of a minute </b></i></p>

![CV-Generator-App 2](https://user-images.githubusercontent.com/64327599/167257141-c522410a-2c56-4c0f-a66b-690be08b61c3.png)

<br/>

## Development

### Prerequisite
1. Make sure you have Node.js version >= 13.

### Install
Clone the repository into your system and open the directory and run this command to install all dependencies
```
npm install
```
### PORT Config (backend)
To customise port of webapp, create <i>.env</i> 
1. Create YOUR_PORT
2. Assign the port value of your choice in YOUR_PORT
3. Access .env parameters in app.js using dotenv.config()
4. Access Port value usign process.env.YOUR_PORT and provide it to app.listen()

### PORT Config (frontend)
To customise port of react-app, open <i>package.json</i> 
1. Find Start  under Scripts object
2. Assign the port value of your choice in set PORT //default port value is 3000

```
"scripts": {
    "start": "set PORT=8000 && react-scripts start"
  }
 ```
3. If you want to proceed with default port then skip above steps and do 
```
"scripts": {
    "start": "react-scripts start"
  }
 ```
### CORS
To access resources available in backend running on different port <i>(while developing in localhost)</i> proceed with either of following 2 steps:

1. Make sure to run command <i><b>npm i cors</b></i> before using in app.js file

```
app.use(cors())
```
2. Go to <i><b>package.json</b></i> of your frontend folder and add the following script :

```
"proxy" : "http://your.ip.address:YOUR_PORT"
```

### Start

Open Backend and Frontend directories in command prompt and run following command in both directories
```
npm start
```

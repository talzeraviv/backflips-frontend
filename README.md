<h1 align="center">
  <br>
  <a href="https://backflips.vercel.app/"><img src="https://raw.githubusercontent.com/talzeraviv/backflips-frontend/main/src/assets/backflips-logo.svg" alt="Backflips" width="500"></a>
  <br>
</h1>

<p align="center">
  Backflips is a Video Streaming Platform modeled after Netflix, created by Tal Zer-Aviv and written in React.js, Express.js and TailWind.css.
  
</p>

## Demo
![backflips-demo](https://github.com/talzeraviv/backflips-frontend/assets/106658389/5c7a451a-c555-4e51-8525-133f9d46ad95)

## Features
This React based web app incorporates Netflix's core features, such as:
  * Live Video Streaming
  * Quick Content Previews
  * Personalized Content Curation
  * Search-As-You-Type Functionality
  * Secure Token Authorization and User Authentication
  And many more features.
  <br />

## Compatibility
Minimal broswer requirement tested on BrowserStack and in accordance with caniuse.com.

| Browser | Edge | Firefox | Safari | Opera | Chrome |
|---------|------|---------|--------|-------|--------|
| Version | >=79 | >=41    | >=12.1 | >=56  | >=69   |

## 🚀 Try It Out!
The website is [live](backflips.vercel.app).

## 🛠 Getting Started
### Step 1
In order to run backflips, first we need to get the backend portion of this app.
The backend is responsible for obtaining the the content from the db using the routes.
Open a new folder, go to [backflips-backend](https://github.com/talzeraviv/backflips-backend) and clone the repo with 
<br>
`git clone https://github.com/talzeraviv/backflips-backend`
<br />
or use Code --> Download zip button to get the files.

Once we have the backend portion, open a terminal in the directory and run the following commands:
`npm i`
`touch .env`

### Step 2
We need to set up the environment variables so that our backend will know how to reach the database.
The following variables are the preset variables configured across the application:
`MONGO_DB_URI`
`JWT_PASS`

For connecting our app with MongoDb, we need to specify a `MONGO_DB_URI` 
that is equal to a database we already set up or to the localhost.
If you have MongoDb Compass installed, you can use `mongodb://localhost:27017`.

For setting up proper token authorization, we need to specify a seed to make sure our users
are authenticated throughout the use of the app and won't be asked to sign in again once they close
their browsers.
Edit the `JWT_PASS` environment variable to a seed that won't be ever replaced.
Changing this value after users have been signed up will make it so that no user will be able
to sign in again, until the `JWT_PASS` is restored to its initial value.

### Step 3
Now we can run our backend with the command `npm run dev`.
This will trigger nodemon to run the application.
Initially our database will be empty, that's why there are convenient seed routes we can use
to get some content inside our application.
Go to http://localhost:5000/api/seed in order to seed content into the database.

### Step 4
Now our backend should be up and running with content.
We can now start working on setting up the frontend.
Open a new folder, go to https://github.com/talzeraviv/backflips-frontend and clone the repo with 
<br>
`git clone https://github.com/talzeraviv/backflips-frontend`
<br />
or use Code --> Download zip button to get the files.

Once we have the frontend portion, open a terminal in the directory and run the following command:
`npm i`

### Step 5
If you set up your backend properly, Backflips should be good to go! 🔥

Note that the default route the frontend points to, to get its content from is "http://localhost:5000/api",
unless it is already in production and set up to get the backend url from VITE_BASE_URL.


## 🙋‍♂️ Contact 
If you have contributions, suggestions, or just want to get in touch with me, be sure to use the links in my GitHub bio.

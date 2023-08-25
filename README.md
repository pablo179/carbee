# Carbee


<details>
    <summary>Table of Contents</summary>
    <ul>
        <li><a href="#about">About</li>       
        <li><a href="#build-with">Built With</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#project-reflection">Project Reflection</a></li>
    </ul>
</details>

## About
    This is my code challenge for Carbee. It is a simple app that allows users to login, see his appointments and check availability of times by date.

## Built With
    - TypeScript
    - React
    - NextJS
    - Module CSS

## Installation
    1. Clone the repo
    ```sh
    git clone
    ```
    2. Install NPM packages
    ```sh
    npm install
    ```
    3. Create a .env.local file and add the following variables
    ```sh
    NEXT_PUBLIC_API_URL={your api url}
    ```
    4. Run the app
    ```sh
    npm run dev
    ```
    5. Open your browser and go to http://localhost:3000

## Project Reflection
### Did you run into any "gotchas" along the way?
something problematic was definitely the separation between process that server side can do and client side can do. I had to do some research to understand how to do some things like the local storage usage and the api calls.
### How did you handle forms? In a largely form-driven project, would you do anything differently? 
use the form tag keeps the functionallity simple enough to handle the form validation and don't need to use state to handle the inputs. In a larger project I would use the state hook to handle the inputs and the form validation since allows me to process the data "in live" and not only when the form is submitted. 
### How did you handle authorization?
I used the local storage to store the token and the user data. Because it is a simple project and I didn't need to save more data.  However I know that this could be a security problem because the local storage is not encrypted and  we don't get an expiration.
### Is there anything you’d like to share about your project prior to my evaluating it?
My prioriti was keep the project organized in way that I could easily add new features and keep the code clean and easy to read. I also tried to keep the typescript types as specific as possible to avoid errors.
### How long did you spend on this exercise? If you had unlimited time to spend on this, how would you spend it and how would you prioritize each item?
I spent arount 4 hours. Got a little stuck with 'use client', 'use server' logic. I would spend more time on the user authentication security and on the UI functionallity. I would also take care of handle possible errors.
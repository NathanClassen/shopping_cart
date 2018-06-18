# Shopping Cart App

## Setup
1. Clone this repository
2. `cd` to the downloaded directory
3. Run `npm install` from the command line to install all dependencies

## Running the app
While in the app directory, run `npm server` to start the live server. The command line will display the address you need to visit. The live server will watch for changes to files in the public directory and reload the page in the browser.

## Developing the app
The `index.html` file includes an `application.js` file located at `public/javascripts`. This is where you'll add your application code. That includes all the React components you'll build as you develop the application. To see a static version of the app, visit `/ui` in the browser. You can also read the html files inside the `public/ui` folder to see how the markup is structured and which classes/id's are used.

For the initial data, you can start with the following list of products:

```js
[
  {
    id: 1,
    title: 'Amazon Kindle E-reader',
    quantity: 5,
    price: 79.99
  },
  {
    id: 2,
    title: 'Apple 10.5-Inch iPad Pro',
    quantity: 3,
    price: 649.99
  },
  {
    id: 3,
    title: 'Yamaha Portable Keyboard',
    quantity: 2,
    price: 155.99
  },
  {
    id: 4,
    title: 'Tinker, Tailor, Soldier, Spy - A John le Carre Novel',
    quantity: 12,
    price: 13.74
  }
]
```

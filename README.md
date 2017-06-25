

# Arlo Feirman - Tic Tac Toe

[Link to game!](https://arlofeirman.github.io/AF-TicTacToe/)

First project for the Web Development Immersive at General Assembly. I built the app over a 5-day sprint.
The server may take 15 to 30 seconds to respond when you first create an account.
The back end is hosted on Heroku, which puts the API to sleep after 30 minutes of inactivity.
Fore more information [click here](https://devcenter.heroku.com/articles/free-dyno-hours)

## Wire Frames
-  [Wire Frame 1](http://i.imgur.com/UF5U5yt.jpg)
-  [Wire Frame 2](http://i.imgur.com/TTX2GgL.jpg)
-  [User Stories](https://github.com/arlofeirman/AF-TicTacToe/issues/6)

## Technologies Used

- Javascript
- Jquery
- Html
- Css
- Sass
- Bootstrap
- [Game Project Api](https://github.com/ga-wdi-boston/game-project-api)


## Planning Process

I started this project by writing user stories and making wire frames.
I created most of my html elements first and placed them in temporary places
with my minimal styling.

I took care of the authorization first. I used curl and then wrote the ajax.

I felt like it would be easier to start the game logic code if I had click events
set up. So I set up click events and wrote code to switch between X's and 0's
and put them on the tic tac toe board.

Before I wrote any of the game logic I wrote pseudo code and drew
diagrams on a [white board.](http://i.imgur.com/NhmlQ2D.jpg)
The game board is represented by an array with 9 values, starting off as null.

```javascript
let currentGame = [null, null, null, null, null, null, null, null, null]
```

When player X makes a move true is pushed into the array at the corresponding
index. False for player O.


Determining the winner of the game was the most difficult part of the project.
I did more whiteboarding, [Link,](http://i.imgur.com/2vlWCAH.jpg) [Link.](http://i.imgur.com/GHPXqrR.jpg)
I found that their are only 8 winning combinations for each player. I used an
array with 8 sub array's. Each sub array contains the indexes of a winning
combo.

```javascript
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6]
]
```
I iterate over the winCombos array passing each sub array to a function that
takes the 3 winning indexes and checks if the currentGame array is true (payer x)
or false (player o) at those indexes.

At this point my game was working, but only on the first play. Once I pressed
the play again button I would get bugs that I couldn't reproduce consistently.
Such as starting the game as player O, double turns, winning the game at
the wrong time, and the game board being out of sync with currentGame array.

I started off the debugging process by shortening my game logic functions.
I got it from 100 to 50 lines of code. I then used console logs and the chrome
debugger to isolate the problem. The play again button was adding all the click
events back to the game cells without removing them first. Any cells that
were not filled in the first game ended up with two identical click events on
the second game.

I used curl requests to interect with the game api, then I wrote the ajax.

The UI was done with JQuery's hide and show methods.


## For Future Iterations
- Style the App
- Add feature to support player 0 joining the game from a second device.
- Add win counter feature
- Show which player won the game when user requests game by ID.

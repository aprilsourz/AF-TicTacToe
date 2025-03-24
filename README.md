

# April Feirman - Tic Tac Toe

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

I planned the project with user stories and wireframes.

I took care of the authorization first. I tested the API end points with curl and used AJAX to make HTTP requests from the front end.

Before I wrote any of the game logic, I wrote pseudo code and drew
diagrams on a [white board.](http://i.imgur.com/NhmlQ2D.jpg)
The game board is represented by an array with 9 values, starting off as null.

```javascript
let currentGame = [null, null, null, null, null, null, null, null, null]
```

When player X makes a move a true value is inserted into the array at the corresponding
index. False for player O.


Determining the winner of the game was the most difficult part of the project.
More whiteoarding helped to come up with a solution.

[Diagram](http://i.imgur.com/2vlWCAH.jpg)
[Diagram](http://i.imgur.com/GHPXqrR.jpg)

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

Refactoring and the chrome dev tools helped to start the debugging process. 
The play again button was adding all the click events back to the game board without removing them first.
Any squares that were not clicked in the first game ended up with two identical click events on
the second game. Removing all of the click events before adding them again solved the problem.

## For Future Iterations
- Style the App.
- Add feature to support player 0 joining the game from a second device.
- Add a win counter.


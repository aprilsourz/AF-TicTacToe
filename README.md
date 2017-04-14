

# Arlo Feirman - Tic Tac Toe

[Link to game!](https://arlofeirman.github.io/AF-TicTacToe/)

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

I started this project by writing user stories and making wire frames. I
I created most of my html elements first and placed them in temporary places
with my minimal styling.

I took care of the authorization first. I used curl and then wrote the ajax.

I felt like it would easier for tackle game logic code if I had click events
set up. So I set up click events and wrote code to switch between X's and 0's
and put them on the tic tac toe board.

Before I wrote any of the game logic I wrote pseudo code and drew
diagrams on a [white board.](http://i.imgur.com/NhmlQ2D.jpg)
The game board is represented by an array with 9 values, starting off as null.

```javascript
let currentGame = [null, null, null, null, null, null, null, null, null]
```

When player X makes a move true is pushed into the  array at the corresponding
index. False for player O.


Determining the winner of the game was the most difficult part of the project.
I did more whiteboarding, [Link](http://i.imgur.com/2vlWCAH.jpg) [Link.](http://i.imgur.com/GHPXqrR.jpg)
If found that their are only 8 winning combinations for each playerI used an
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
takes the 3 winning indexes and checks if the currentGame array is true(payer x)
or false(player o) at those indexes.

At this point my game was working, but only on the first play. Once I pressed
the play again button I would get bugs that I couldn't reproduce consistently.
Such as starting the game as player O, double turns, winning the game at
the wrong time, and game board being out of sync with currentGame array.

I started off the debugging process by shortening my game logic functions.
I got it from 100 to 50 lines of code. I then used console logs and the chrome
debugger to isolate the problem. The play again button was adding all the click
events back to the game cells without removing them first. Any cells that
were not filled in the first game ended up with two identical click events on
the second game.

I used curl requests to interect with the game api, then I wrote the ajax.

The UI was done with JQuery's hide and show methods.


## For Future Iterations
- Add visual notifications for invalid sign in or sign up
- Style the App
- Use routing instead of .hide() and .show()
- Add feature to support player 0 joining the game from a second device.
- Add win counter feature
- Show which player won the game when user requests game by ID.


-   **Command Line**: Interacting with the computer and navigating the
    filesystem from the command line.
-   **Source Control**: Managing and interacting with a git repository to store
    changes to code.
-   **Programming Fundamentals**: Working with objects, constructors, and
    events, while learning how to strategically solve problems and resolve
    errors.
-   **Web Fundamentals**:  Structuring, styling, and animating documents within
    a browser; responding to actions your users take and the data they input
    into the browser.
-   **Browser Applications**: Using AJAX to connect to a back-end application.
-   **Server Applications**:  We haven't covered a ton of server-side
    technologies yet (that's up next), but we learned a bit about how API
    endpoints work, and how to get data from them.
-   **Security**: With JavaScript closures, scratching the surface of why
    security matters.
-   **Deployment**: Host a static web site in a managed hosting environment
    (GitHub Pages)
-   **Products and Teams**: Document your code and your code repository so
    others understand what you've built.

## Goals

At a high level, here are our goals for you in this project:

-   **Build a web application from scratch**, without a starter codebase
-   Use your programming skills to **map out the game logic for a simple game
    like Tic Tac Toe**
-   **Separate HTML, CSS, and JavaScript files** in your application
-   Build an application **to a spec that someone else gives you**
-   **Build a dynamic game that allows two players to compete** (bonus: compete
    from separate devices)
-   **Craft a ``readme.md`` file that explains your app** to the world
-   **Communicate with a back-end** (which we'll provide for you) to store the
    state of your game.

You will be working individually for this project, but we'll be guiding you
along the process and helping as you go. Everyone will get a chance to **be
creative**, and work through some really **tough programming challenges** to get
your feet wet in the world of web development. Those who dare will have the
tools to make it **multi-player, and multi-device** – so you can say to someone,
"hand me your phone," load up the game, and play a quick round!

## Additional Resources

-   [MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [jQuery Docs](http://api.jquery.com)
-   [Writing Good User Stories](http://www.mariaemerson.com/user-stories/)
-   [Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

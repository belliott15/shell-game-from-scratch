## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**

1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
  -body: header (templated), main- h2, section1- div(img1, button), div(img2, button), div(img3, button), section2 -div(wins, losses, total), section3 - any other stretch goals as needed.
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
    body- header(templated);
    main- 
      -h2 to give context of what the user is supposed to do
      -section 1 to separate the interactive section away from informational
        -div1 for image1 and button1 to live in separate from the other two containers
        -div2 see above
        -div3 see above
      -section2 to track wins, losses, and total 
      -section3 for any stretch goals that i am able to get to.
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
  -
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


User should be able to . . .	
Visit the deployed pages on GitHub pages, with link in the About section of the Github repo	2
See three cups, with a button beneath each of them.	2
Events . . .	
On clicking a cup button, the total number of guesses increment	2
On clicking the correct cup button, the total number of correct guesses increment	2
On clicking the incorrect cup button, the number of incorrect guesses increments	2
On click, see the correct cup's image change, clearing out the previous correct guess style	2
Functions	
IMPURE: resetStyles()	2
IMPURE: getRandomItem(arr) : returns random item from given array	2
IMPURE: handleGuess(userGuess, correctSpot)	4

Stretch Goals:
Add a hard reset button that clears all wins, losses, and total
Add a 'try again' button users must press to clear styles instead of just resetting automatically between rounds. Disable buttons between turns
Let the user choose how many cups they have to choose from
Set up animations so the cups lift up to reveal whether or not they contain the ball
Set it up so that more than one cup (or even no cups) might contain a ball
Add a dropdown to let the user choose different domains for the game: cup game, which piñata contains the candy, which card is the queen of spades
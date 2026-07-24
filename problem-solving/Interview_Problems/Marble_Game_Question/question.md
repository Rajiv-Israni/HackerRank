Description
There is a game played using a bag of colored marbles.  The objective of the game is to achieve the lowest possible total score.   
To that end, the rules of the game are as follows:
 
Marbles
The bag initially contains 10 red, 10 yellow and 10 green marbles with the following values:
Red marbles → value 5
Yellow marbles → value 3
Green marbles → value 1
 
Rules
- All marbles are placed into the bag.
- Score starts at 0.
 
Each Round:
- Draw 3 marbles from the bag at random.
- If 2 or more marbles are the same color:
     - Remove all marbles of that color from the drawn set
     - Score 0 points for the round
- Otherwise (all three marbles are different colors):
     - Remove the marble with the lowest value from the drawn set
      - Add that marble’s value to the score
     - Put the remaining marbles back into the bag.
 
- Repeat drawing and scoring until all marbles are removed from the bag.
- The final score is the sum of all scoring rounds.
 
Your task is to simulate this game over 1,000 iterations and keep a count of all the possible scores. (i.e. How many times did someone score 5?, How many times did they score 2?). The output should look something like below.
 
    Number of iterations were 1000.
    Total simulation took 127 milliseconds.
 
    Score 0 occurs with a probability of 0.5% (ie: 5 out of 1000 times)
    Score 1 occurs with a probability of 2.5% (ie: 25 out of 1000 times)
    Score 2 occurs with a probability of 9.9% (ie: 99 out of 1000 times)
    Score 3 occurs with a probability of 6.5% (ie: 65 out of 1000 times)
    Score 4 occurs with a probability of 17.4% (ie: 174 out of 1000 times)
    Score 5 occurs with a probability of 11.1% (ie: 111 out of 1000 times)
    Score 6 occurs with a probability of 17.6% (ie: 176 out of 1000 times)
    Score 7 occurs with a probability of 9.8% (ie: 98 out of 1000 times)
    Score 8 occurs with a probability of 7.7% (ie: 77 out of 1000 times)
    ...
... (and so on, for all obtained scores)
 
Good luck!
# Dice Game

This is a simple dice game project where users can roll a dice, select a number, and earn points based on their guess.

### Live - https://dice-game-alpha-ruddy.vercel.app/

## Components

### App

The `App` component is the main component of the application. It toggles between displaying the game interface (`GamePlay`) and the start screen (`StartGame`).

### StartGame

The `StartGame` component displays the start screen of the game with a title and a button to start the game.

### GamePlay

The `GamePlay` component contains the gameplay logic. It includes the total score display, number selector, dice rolling functionality, and a button to reset the score. It also includes a section to display game rules.

### NumberSelector

The `NumberSelector` component allows users to select a number for their guess. It displays numbers 1 through 6, and the selected number is highlighted.

### RollDice

The `RollDice` component displays the dice image and handles the dice rolling functionality.

### TotalScore

The `TotalScore` component displays the total score earned by the player.

### Rules

The `Rules` component displays the rules of the dice game.

## Usage

To use this project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using npm or yarn.
3. Start the development server.
4. Open your browser and navigate to the specified URL.

## Technologies Used

- React.js
- Styled Components

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/dice-game.git

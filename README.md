# AI-powered Cooking Helper

This is originaly a project from Scrimba course [Learn React](https://scrimba.com/learn-react-c0e). I took the idea and coded website on my own, adding extra design elements. The AI part (getRecipe.js) was made with help of ChatGPT. All of the other code is original work.

## Description
Do you need help with inspiration for your cooking? Add ingredients that you have in yout kitchen and this kitchenHelper will give you suggestion for a recipe based on the ingredients you have. It might throw in a few extras if it's needed. 

## Stack
- Frontend: React (Vite)
- Styling: Tailwind CSS
- Markdown Rendering: react-markdown
- AI: Claude 3 Sonnet (via @anthropic-ai/sdk)
- Backend: Netlify serverless function

## Link
[Site](https://cookinghelper13.netlify.app/)

## Design
### Original design from Scrimba
![Figma design of Chef Claud webside]('src/assets/Design.png')

### My take
![Print screen of website Chef Claude]('src/assets/cookingHelper.png)

## Installation
npm install
For use of AI you need your own API key
ANTHROPIC_API_KEY=your-claude-api-key

## Future ideas
- Delete unwanted ingredients

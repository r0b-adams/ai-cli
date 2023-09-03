# ai-study-buddy

A CLI that interfaces with ChatGPT. 

ChatGPT behaves as an expert in TypeScript and JavaScript.

## Installation

clone:

```
git clone git@github.com:r0b4dams/ai-cli.git
```

install dependencies:

```
yarn
```


## Usage
start the app:

```
yarn start
```

After asking a question, the response will be printed to stdout. The app will also save the question and answer to a markdown file like in this [example](./history/question_2023_09_02-20_22_4242.md) .



The basic prompt reads:

```
You are a TypeScript and JavaScript expert and will answer the user's coding questions as thoroughly as possible.
```
# AcmeApp - small part of a banking system
Front-end Developer Assessment (ABSA)

## Running the project
Ensure you are in the acmeApp directory.
Run `npm start` or `ng serve -o` from your terminal. This will open the application on your default web browser.

Alternatively

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Data source
This project is dependent on having the api server running on : http://localhost:8080/api/accounts.
Download API Server from : https://github.com/cibfrontend/mock-api-server

## Languages
  - Angular 11
  - Typescript
  - Bootstrap 4
  - HTML5
  - CSS
  - IDE used: Visual Studio Code

## TASK
You are writing a small part of a banking system for Acme Bank:
  - Acme bank runs only 2 types of accounts, a Savings and Current account.
  - Most of the behaviour in these 2 types of accounts is very similar
  - For the purpose of this exercise, we will not look at all the functionality, we will only implement the “withdraw” and “balance”.

## Savings Account:
A savings account must have a minimum balance of greater than 0 to
perform a withdraw

## Current Account:
A current account can have an overdraft limit (the maximum overdraft
limit allowed on a current account by Acme bank is R500.00
This means that a current account can have both positive and negative for
withdraw.

## Implementation guidelines:
Your job is to write a basic front-end implementation of withdraw and
balance. The code needs to work correct at a basic level. It does not
have to be 100% perfect in terms of catering for live environment.
Please feel free to comment areas that you may implement in more detail
in a live environment.

## Business Rules
  - One cannot withdraw more than the balance on savings accounts
  - The maximum overdraft limit allowed on current account is R500
  - Display alert(‘Success’) on withdraw button click
  - Display inactive withdraw button e.g. saving account equals -R20.00
  - Calculate the balance for all accounts

## Working Output
![Sample Output](https://github.com/sluchacha/acmeApp/Sample%20Output.PNG)


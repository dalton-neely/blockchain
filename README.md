# Blockchain
This repository is to mess around with blockchain.

## Table of Contents
1. [Features](#features)
1. [Prerequisites](#prerequisites)
1. [How to Install](#how-to-install)
1. [Blockchain Application](#blockchain-application)
    1. [How to Run the Application](#how-to-run-the-application)
1. [Blockchain CLI](#blockchain-cli)
    1. [How to Run CLI](#how-to-run-cli)
1. [Blockchain API](#blockchain-api)
    1. [How to Run API](#how-to-run-api)
1. [Blockchain Server](#blockchain-server)
    1. [How to Run the Server](#how-to-run-the-server)
    
## Features
* Save/Restore blockchain locally for later use.
* Lookup balance of account.
* Create transactions and add to blockchain.
* Mine transactions and add blocks to chain.

## Prerequisites
The following programs must be installed on your computer before you can install and run the programs.
* [Node.js](https://nodejs.org/en/)

## How to Install
Run the following command to install the program to your machine.
```shell script
npm install
```

## Blockchain Application
This is the cumulative blockchain application that contains a front-end and back-end server along with a UI.

### How to Run the Application
Run the following command to run the application.
```shell script
npm start
```

## Blockchain CLI
This is a program that uses the blockchian via a Command Line Interface (CLI).

### How to Run CLI
Run the following command in your prompt/shell.
```shell script
npm run start:cli
```

## Blockchain API
This is a REST API to manipulate the blockchain on the backend.

### How to Run API
Run the following command to run the API
```shell script
npm run start:api
```

## Blockchain Server
This is the front-end server that serves up the User Interface (UI).

### How to Run the Server
Run the following command to run the front-end server.
```shell script
npm run start:server
```

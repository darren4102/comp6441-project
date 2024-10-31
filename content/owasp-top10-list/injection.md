+++
title = '03. injection'
date = 2024-10-17T00:27:48+11:00
draft = true
+++

## what is it?

injection is when an attacker tries to send some text to an application’s input field and the application interprets it as code it will execute. the code that is injected into systems typically involves sql, system commands and xml. injection attacks commonly target web applications, databases, operating systems, software applications and web servers. once executed, attackers can gain access to sensitive database data or system files and even take control of the application or system

## how it occurs

- **_lack of validation:_** this means that the application does not properly check or clean user input that may potentially be harmful. for example, unsafe characters inputted such as “--” in sql can be used to comment out code

- **_dynamic queries without context-aware escaping:_** dynamic queries are non-static code that are altered at an application’s runtime depending on user input. when used, applications cannot differentiate regular text inputs from commands. special characters such as quotes (‘ or “) that are not escaped to be treated as regular text results in them being used directly and altering the query

- **_hostile data is directly used:_** user inputs are directly used and concatenated to dynamic queries or commands without the applications separating between what is regular text and code. this allows malicious inputs to manipulate the intended logic of a query or command

## how it is prevented

to prevent injection, it is essential that any data inputted by the user is separate from queries and commands the application uses. this can be achieved with the following:

- **_using object relational mapping (orm) tools:_** rather than writing sql queries itself, we can use orm tools that interact with the database for us safely. it allows us to run queries without writing out the exact query in sql

- **_server-side validation:_** ensuring the data sent to the server meets specific rules by comparing it to a list of safe inputs or characters. any invalid inputs are rejected by the server

- **_escaping special characters:_** any special characters (like ; or ‘) used are inputs must be escaped so they are treated as regular text rather than characters that are interpreted as part of the query or command

- **_limiting output:_** limiting the amount of data that can be shown at once minimises the damage an attacker can do by preventing large amounts of data from being disclosed. for example, ‘limit’ in sql restricts the number of records that can be returned

## real-life example

in 2021 it was found that woocommerce, who are popular for offering the wordpress cms plugin that helps manage websites, was vulnerable to sql injections. it allowed unauthorised attackers to access the database of those websites involved. this unpatched flaw exposed the data of 5 million websites to theft

## example attack

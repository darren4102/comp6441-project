+++
title = '10. server-side request forgery'
date = 2024-10-31T21:06:45+11:00
draft = true
+++

## what is it?

server-side request forgery (ssrf) is when attackers trick a server into making a request on their behalf. this allows attackers to control the requests a server makes and as a result can lead to the application sending sensitive data to unexpected locations such as the attacker’s own server. this is common with applications that use an external api and do not verify whether they are really making requests to the api’s server. as modern applications tend to have lots of features and rely on such apis, ssrf is becoming a more common scenario

## how it occurs

- **_constructing urls with user input:_** web applications can sometimes allow user entered urls as input which they use to construct a request. if these inputs are not checked, attackers can input malicious urls that trick the server into sending sensitive data

- **_exposing apis:_** applications can expose the api server they are using in the url. attackers could replace the exposed server with their own malicious url such as their own machine

## how it is prevented

- **_separating networks:_** having the part of the application that accesses external resources such as urls in a separate network than sensitive internal services such as databases. with this, if an ssrf attack does occur, it will be limited to only that network

- **_denying by default:_** a firewall or access control list can be set up to only accept approved destinations such as trust apis. anything else that is not listed should be denied by default

- **_sanitising and validating user input:_** always check whether user supplied urls are safe and clean them if necessary. cleaning can involve removing any malicious parts of the url such as redirects to different servers or ensuring they use safe protocols such as https instead of http

- **_using an allow list:_** an allow list that states the approved protocols, ports and destination ips should be used that should only accept urls that meet its criteria. this prevents attackers from providing malicious urls. it is important to note that a “deny list” should not be used as some unapproved aspects of a url may be missed and result in a malicious url getting through

- **_not sending raw responses:_** when retrieving data from external sources such as apis, do not send the raw response back to users. these raw responses could contain sensitive information such as server configurations or ip addresses that attackers can misuse. before sending any data back to users, ensure that it is sanitised such that any sensitive data is stripped

- **_disabling http redirections:_** when a request is made to an external url, a response could be received that redirects the server to another destination. attackers can exploit redirects by creating urls that can initially point to a safe destination but then redirect to a malicious server. disabling http redirects blocks attackers from using this technique

## real-life example

capital one, an us bank experienced a data breach in 2019 due to their ssrf vulnerability which attackers exploited to gain access to sensitive data. their web application firewall which was hosted on amazon web services (aws) was vulnerable to ssrf which allowed attackers to trick it into making http requests to its internal services. this allowed attackers to access aws credentials and subsequently access stored customer data

## example attack

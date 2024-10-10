+++
title = 'broken-access-control'
date = 2024-10-10T11:16:31+11:00
draft = true
+++

# 01. broken access control

## what is it?

before we talk about what “broken” access control is, we need to understand what access control is itself. access control is the restrictions put upon a user that determines what actions they can do and resources they can access

for web applications, action control involves:

- **authentication**: checking if the user is who they say they are
- **session management**: retaining the user's authenticated state across their multiple interactions with a website
- **access control**: verifying whether users can and are allowed do what they are trying to do

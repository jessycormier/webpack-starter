# Introduction

This is a starter kit for a webpack config geared towards .NET MVC web projects.
The idea is to have a system in place that can be copy pasted into any project and get started quickly with creating bundles, using typescript and any modern advanced front-end tech.

# How to use this starter

Review the readme (you're here! good job), go over the contents and ask questions.
Copy this setup into your project and remove the extra non required functionality.

# Dependencies Explained

mini-css-extract-plugin
src: https://github.com/webpack-contrib/mini-css-extract-plugin

This plugin in short, allows us to take rendered out css and turn it into a css file
rather than a bundle. That difference will allow us to create a "site css" file without needing to wait for things to load in the browser for hte main css. (aka remove flashes).
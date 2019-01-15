# Map Site

A React single page app which provides a user interface for the JSON feeds from with Victoria Traffic Api.

https://victraffic-api.wd.com.au/api/v3/incidents

## Technology

This project is built with Create React App, React, Mobx, Emotion and Material Ui.

## Install

`yarn`

## Local Development

For local development, first pull the `Map Site Express` code from here: https://github.com/t49tran/map-site-express. It is an express app served mainly as a proxy for the `Map Site` to access https://victraffic-api.wd.com.au/api/v3/incidents as the Vic Traffic is implemented without CORS.

Once the `Map Site Express` run, start the `Map Site` app by running:

`yarn start`

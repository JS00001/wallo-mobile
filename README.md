## Introduction

Wallo is a financial education platform that allows users to learn about personal finance, investing, and other financial topics. This repository contains the code for the Wallo mobile app. The frontend is responsible for displaying the course content to the user, while the [backend](https://github.com/JS00001/wallo-api) is responsible for managing the course data and serving all the necessary information to the frontend.

## Documentation Sections

- [Introduction](#introduction)
- [Setting up the environment](#setting-up-the-environment)
- [Running the application](#running-the-application)
- [Architecture](#architecture)
  - [Managing Server State](#managing-server-state)
- [Debugging](#debugging)

## Setting up the environment

1. Install the required packages by running the following command:

```bash
yarn install
```

## Running the application

Run the following command to start the application in development mode:

```bash
yarn dev
```

## Architecture

| Folder       | Description                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `@types`     | Common data types used across the entire application.                                                                          |
| `api`        | All methods to call the backend API exist here.                                                                                |
| `app`        | Expo router root folder.                                                                                                       |
| `components` | Larger components made up of smaller components from the `ui` folder, such as Widgets, Bottom Sheets, etc.                     |
| `constants`  | Constant values used across the entire application.                                                                            |
| `hooks`      | Common hooks across the application. Includes an `api` folder with hooks for every API query and mutation using Tanstack Query |
| `lib`        | Utility functions and external library setup.                                                                                  |
| `providers`  | Context providers for the application.                                                                                         |
| `store`      | Client-side stores using Zustand. _Preferred over using React Context_                                                         |
| `styles`     | Global styles, mainly for setting up Nativewind.                                                                               |
| `ui`         | Small blocks of UI components such as Buttons, Inputs, etc.                                                                    |

### Managing Server State

All async state should be handled via Tanstack Query. Every API query and mutation has an associated hook in the `hooks/api` folder. The hooks should be used in the components to fetch and mutate data. The hooks are responsible for managing the state and fetching the data from the backend.

Relevant optimistic updates or cache updates (when mutating data) should be handled in the hooks.

Every component using a query should validate `isLoading`, `isError`, and `data` states to handle the UI accordingly.

## Debugging

To help with debugging, we've added debugging tools to the application when running in development mode.

- **Network Requests**: To view network requests, press three fingers on the screen to open the network inspector.

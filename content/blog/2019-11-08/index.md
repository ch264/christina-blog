---
title: "How to run GitHub Actions manually"
date: "2019-11-08"
thumbnail: "./image2.jpeg"
description: "This is a tutorial to show you how I set up GitHub Actions for Markdown linting with David Ansons’s Markdownlint library."
tags: [JavaScript, GithubActions, Linter]

---

This is a tutorial to show you how I setup a manual trigger for a GitHub actions workflow with Postman.


Github recently published a UI button to re-run a GitHub Actions workflow file when tests fails. In order to run a GitHub Actions workflow manually I used the GitHub API repository_dispatch event to trigger a workflow rerun via Postman.

## GitHub Action workflow file

First, I had to setup a new workflow file in myGitHub Action Workflow, which listens for the repository dispatch event:

```
name: manually re-running actions
on: repository_dispatch
jobs:
  manual_deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout master
      uses: actions/checkout@v1
      with:
        ref: master
 ...
 ```

## GitHub Access Token

If you have 2FA setup for your GitHub Account, like me, you have to generate a personal access token in GitHub in order to send an event to the GitHub API for Authentication. You can do so in your profile settings / Developer Settings / Personal Access Token. If you would like to authenticate yourself differently, here is a link to the GitHub docs for authentication.
I will continue this tutorial with a personal access token.
Create a repository dispatch event in Postman
Now that we have created our personal access token, we can open our Postman account and save our token in our environment variables.

Give your environment a name and add the Variable name and Value (your GitHub Access Token).

Save it and now you can call your variable in your Post Request, which we are going to setup in the steps below.

## Testing your GitHub API Connection
You can test your Github API Connections by running a Get request in Postman hitting this endpoint:
https://api.github.com/zen
It will bring back a random quote.

## Setting up the real deal
Now we can set the environment variables and include the access token as a variable in order to authorize ourselves.

We then have to include an Accept header with the value:
application/vnd.github.everest-preview+json
You can find more information on the header in the GitHub API docs.

The last step is to include the actual body you are sending to the API. In this case we are sending the event: repository_dispatch like so:

## Et voilà!
Hit send and you will see your GitHub Action kicking off in your repo.


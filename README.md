# URL shortener

## TODO
- Incorporate non-200 headers into handler lib

## Project outline

This project will aim to create a serverless url- shortener service. 

## Project Requirements
- The project should be as serverless as realistically possible, specifically:
    - The backend should use aws lambda, api gateway, and dynamodb
    - The frontend should be a react app stored in S3 and be distributed via cloudfront

- Users should be able to create and save shortened urls which, when visited, redirect to the original site

- Users should be able to perform CRUD operations on their urls

- Users should be able to login to see their urls

- Users should be able to keep track of how many times a shortened url is used


## Project structure

### Backend

The backend of the project is a basic CRUD api for urls to shorten. In additon to this, a redirect endpoint is also provided. This endpoint is the one that users will be able to enter to get redirected to the desired site.

All of the crud operations makee use of the handler-lib and dynamo-lib to standardize handler logic and database operations across the app. As of 28/12/2020, the redirect method, unlike the other api endpoints, does not implement the handler-lib. This is due to the redireect method returning a 302 header, which currently is not supported by the handler-lib.


## Recommended sprints

### Sprint 1 (Done)
- Create dynamodb table to store urls
- Create GET (at least) api endpoint to redirect to the desired site

## Sprint 2 (Done)
- Create remaining CRUD operations for urls

## Sprint 3
- Create basic frontend
- Deploy to cloudfront

## Sprint 4
- Integrate login functionality

## Sprint 5

- Update dynamodb so that only the user who created the link can edit

## Sprint 6

- Refine frontend

## Suggested Technology
For the backend, I suggest using the [serverless framework](https://www.serverless.com/) to manage the necessary resources.

For the frontend deployment as well as other various aws resources, I suggest using [terraform](https://www.terraform.io/).
# URL shortener

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


## Recommended sprints

### Sprint 1
- Create dynamodb table to store urls
- Create GET (at least) api endpoint to redirect to the desired site

## Sprint 2
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
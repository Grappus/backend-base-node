> **Authors:**

> - nikhil@grappus.com (**Nikhil Gurnani**)

# backend-base-node
This repository contains a basic NodeJs initialised project with Mongo DB and ExpressJs to be used as a boiler plate for the new backend API development. This repository will be actively maintained by @nikhilgurnani. 


###Coding Conventions
----------
 [1]. Use camelCase
 
 [2]. Every module name in package must start with package name
  > ex - While writing a module for *User* in package *models* then module file name must be **modelsUser** and if the package name is *controller* then module file name must be **controllerUser**
  
[3]. Run ```npm run test``` to check test case status.  

[4]. Declare and use constants as much as possible.

[5]. Create atomic functions for each task and call functions to do your tasks.

[6]. Ensure you write test cases for every API endpoint you create.

###HTTP Status Code convention
----------

Status          | Condition
----------------| ---
200             | request is OK and fulfilled, Get and Put requests mostly
201             | new record created, post request mostly
204             | no content, delete calls mostly
206, 302        | api change and redirect
400             | Bad Request. The data is not valid in request. We prefer 400 over 206 (partial content)
401             | If auth_token is invalid. Once API return 401 ask client apps to logout and re-login
403             | Invalid auth. Use auth header, to protect resources. Also used for Invalid Permissions in                   some cases


### Project Setup
----------
[1]. First create "logs" directory in src folder

[2].  Then create .env file in parent directory and copy keys from sample.env into it and change values appropriately

[3]. Ensure you have MongoDB installed and a service running for the DB.

[3]. Run "npm install" to install packages and dependencies listed in the package.json

[4]. After that just run "npm run start".

> **Tech Stack:** We are using NodeJs with ExpressJs framework, MongoDB as primary database, Redis for caching and AWS as main cloud service. Mocha and chai with chai-http for TDD

### API Structure
----------
> **Note:** Return 401 in case invalid authToken and ask application developer to clean all data from local storage of that user

[1]. Error response structure
```
{
      **error**: "It could be string or object or list or object. Frontend need not to worry about this.",
      **message**: "It must be a string. Frontend will show this to user.",
      **errorCode**: "Our unique codes. Depends on user input and db response. These must be set in controller/controllerConstants.js"
}
```
[2]. Success result, a list, we are using offset to paginate result
```
{
      result: [
        {
          This will be object here
        },
        {
          ...
        }
      ],
      count: "This will be an integer",
      next: boolean # Will tell about whether to make next call or not?
      nextOffset: Integer # Will tell about next offset value.
}
```
[3]. Success result, Single object, a valid object
```
{
  result: {
    Object will come here.
  }
}
```
[4]. Success result, no data to return
```
{
  success: true
}
### Project Structure
----------
  we are using [dotenv][1] package.
  Check sample.env to refer sample env file.

> For services, we use:
> - AWS SES (Simple Email Service) ------> Emails
> - FCM (Firebase Cloud Messaging) ------> Push Notifications
> - Cloud File Storage (AWS BOTO) -------> File Storage

In src folder you will get 7 main folders, named:

**cache**
:   contains cache-models and object

**controllers**
: contains all functions related to business logic. All module
      name must start with *controller*
      
**middleware**
: contains middleware modules. All module name must start with
      *middleware*
      
**models**
: contains all functions and related to DB and also the DB related
      methods. All module name must start with *model*

**routes**
: contains routes related modules and bind endpoints to
      controllers. All module name must start with *route*

**scripts**
: ontain random scripts, non JS files, use for random tasks

**utils**
: contains common util modules. All module name must start with
      *util*

> **Note:**
> - If a project requires usage of Notifications, you can find a (**utils > utilNotifications.js**), that contains an independent function that can send Push, Email or SMS Notification by accepting some paramters. 
> - In test folder you will get all the test cases file. Ensure you write test cases for each and every API endpoint
> - Apart from that there is a main file called "server.js". It is the entry point of this project. Please first read that file


  [1]: https://github.com/motdotla/dotenv
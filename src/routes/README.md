#Routes
> - Each file in this folder will represent a set of routes for each API.
> - For each model, there would be a routes file containing all methods for the Model.
> - Each route in a router file will contain simply middlewares and the controllers in the order in which they must be invoked.
> - There would be a **routesBase.js** that will *use* the other routes files.
> - **routeBase.js** will be included in the **index.js**
#Models
> - Each controller file must be named in the following convention: **modelName.js**
> - This folder will contain the models that represent a collection in MongoDB. Each model must contain a description along with the details of all its attributes. In case of references, the developer must mention the **ref** keyword of an attribute. 
> - It is the responsibility of the developer to describe each attribute thoroughly along with all accepted values for the attribute and specific constraints on the attributes.
> - Indexing is important and **recommended**.
> - A Single Model file must represent a Single Mongo Collection. **No matter how small it is.**
> - Each model must contain the functions that perform queries. For queries on the model, use **statics**. For queries on model objects, use **methods**
> - Each model must consist of setters and getters in the following format:
```
schema.set('toObject', {
   getters: true,
   transform: function (doc, ret) {
     ret.id = ret._id;
     delete ret.__v;
   }
 });
 schema.set('toString', {
   getters: true,
   transform: function (doc, ret) {
     ret.id = ret._id;
     delete ret.__v;
   }
 });
 schema.set('toJSON', {
   getters: true,
   transform: function (doc, ret) {
     ret.id = ret._id;
     delete ret.__v;
   }
 });
```
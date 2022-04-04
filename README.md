# mern-ecommerce-server

### A backend and a server for ecommerce app from [mern-ecommerce-app](https://github.com/fajrianwarf/mern-ecommerce-app)

You can see this repository deployed in heroku :

> [mern-ecommerce-server-fajri](https://mern-ecommerce-server-fajri.herokuapp.com/)

This repository currently using mongoDB Atlas.\
If you want to use it MongoDB locally, then you can setting it in `.env` and `database/index.js`.\
And then, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### APIs ROUTING

| Entity               | Method   | Route                      | Description                                         |
| -------------------- | -------- | -------------------------- | --------------------------------------------------- |
| **Product**          | `GET`    | api/products               | _Getting list of the products_                      |
|                      | `POST`   | api/products               | _Adding new product_                                |
|                      | `PUT`    | api/products/:id           | _Update an existing product by the id_              |
|                      | `DELETE` | api/products/:id           | _Deleting an existing product by the id_            |
| **Category**         | `GET`    | api/categories             | _Getting list of the categories_                    |
|                      | `POST`   | api/categories             | _Adding new category_                               |
|                      | `PUT`    | api/categories/:id         | _Update an existing category by the id_             |
|                      | `DELETE` | api/categories/:id         | _Deleting an existing category by the id_           |
| **Tag**              | `GET`    | api/tags                   | _Getting list of the tags_                          |
|                      | `POST`   | api/tags                   | _Adding new tag_                                    |
|                      | `PUT`    | api/tags/:id               | _Update an existing tag by the id_                  |
|                      | `DELETE` | api/tags/:id               | _Deleting an existing tag by the id_                |
| **Delivery Address** | `GET`    | api/delivery-addresses     | _Getting list of the delivery addresses_            |
|                      | `POST`   | api/delivery-addresses     | _Adding new delivery address_                       |
|                      | `PUT`    | api/delivery-addresses/:id | _Update an existing delivery address by the id_     |
|                      | `DELETE` | api/delivery-addresses/:id | _Deleting an existing delivery address by the id_   |
| **Order**            | `GET`    | api/orders                 | _Getting list of the orders owned by user_          |
|                      | `POST`   | api/orders                 | _Adding new order_                                  |
| **Cart**             | `GET`    | api/carts                  | _Getting list of the orders owned by user_          |
|                      | `PUT`    | api/carts                  | _Adding new order_                                  |
| -------------------- | -------- | -----------------------    | -------------------------------------------------   |
| **Images**           | `GET`    | api/images/:image.url      | _Viewing static images from public/images/products_ |
| -------------------- | -------- | -----------------------    | -------------------------------------------------   |
| **Auth**             | `POST`   | auth/register              | _Registering a new user (user or admin)_            |
|                      | `POST`   | auth/login                 | _Login using email_                                 |
|                      | `POST`   | auth/logout                | _Logout user using token_                           |
|                      | `GET`    | auth/me                    | _Checking user login and profile using token _      |

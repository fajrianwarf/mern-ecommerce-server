# mern-ecommerce-server

## A backend and a server for ecommerce app :

> [https://github.com/fajrianwarf/mern-ecommerce-app](https://github.com/fajrianwarf/mern-ecommerce-app)

You can see this repository deployed in heroku :

> [https://mern-ecommerce-server-fajri.herokuapp.com/](https://mern-ecommerce-server-fajri.herokuapp.com/)

This repository currently using mongoDB Atlas.
If you want to use it MongoDB locally, then you can setting it in `.env` and `database/index.js`

> Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## APIs ROUTING

| Entity               | Method   | Route                   | Description                                       |
| -------------------- | -------- | ----------------------- | ------------------------------------------------- |
| **Product**          | `GET`    | /products               | _Getting list of the products_                    |
|                      | `POST`   | /products               | _Adding new product_                              |
|                      | `PUT`    | /products/:id           | _Update an existing product by the id_            |
|                      | `DELETE` | /products/:id           | _Deleting an existing product by the id_          |
| **Category**         | `GET`    | /categories             | _Getting list of the categories_                  |
|                      | `POST`   | /categories             | _Adding new category_                             |
|                      | `PUT`    | /categories/:id         | _Update an existing category by the id_           |
|                      | `DELETE` | /categories/:id         | _Deleting an existing category by the id_         |
| **Tag**              | `GET`    | /tags                   | _Getting list of the tags_                        |
|                      | `POST`   | /tags                   | _Adding new tag_                                  |
|                      | `PUT`    | /tags/:id               | _Update an existing tag by the id_                |
|                      | `DELETE` | /tags/:id               | _Deleting an existing tag by the id_              |
| **Delivery Address** | `GET`    | /delivery-addresses     | _Getting list of the delivery addresses_          |
|                      | `POST`   | /delivery-addresses     | _Adding new delivery address_                     |
|                      | `PUT`    | /delivery-addresses/:id | _Update an existing delivery address by the id_   |
|                      | `DELETE` | /delivery-addresses/:id | _Deleting an existing delivery address by the id_ |
| **Order**            | `GET`    | /orders                 | _Getting list of the orders owned by user_        |
|                      | `POST`   | /orders                 | _Adding new order_                                |
| **Cart**             | `GET`    | /carts                  | _Getting list of the orders owned by user_        |
|                      | `PUT`    | /carts                  | _Adding new order_                                |

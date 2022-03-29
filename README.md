# mern-ecommerce-server

a backend and a server for ecommerce app

| Entity               | Method   | Route                   | Description                                       |
| -------------------- | -------- | ----------------------- | ------------------------------------------------- |
| **Product**          | `GET`    | /products               | _Getting list of the products_                    |
| **Product**          | `POST`   | /products               | _Adding new product_                              |
| **Product**          | `PUT`    | /products/:id           | _Update an existing product by the id_            |
| **Product**          | `DELETE` | /products/:id           | _Deleting an existing product by the id_          |
| **Category**         | `GET`    | /categories             | _Getting list of the categories_                  |
| **Category**         | `POST`   | /categories             | _Adding new category_                             |
| **Category**         | `PUT`    | /categories/:id         | _Update an existing category by the id_           |
| **Category**         | `DELETE` | /categories/:id         | _Deleting an existing category by the id_         |
| **Tag**              | `GET`    | /tags                   | _Getting list of the tags_                        |
| **Tag**              | `POST`   | /tags                   | _Adding new tag_                                  |
| **Tag**              | `PUT`    | /tags/:id               | _Update an existing tag by the id_                |
| **Tag**              | `DELETE` | /tags/:id               | _Deleting an existing tag by the id_              |
| **Delivery Address** | `GET`    | /delivery-addresses     | _Getting list of the delivery addresses_          |
| **Delivery Address** | `POST`   | /delivery-addresses     | _Adding new delivery address_                     |
| **Delivery Address** | `PUT`    | /delivery-addresses/:id | _Update an existing delivery address by the id_   |
| **Delivery Address** | `DELETE` | /delivery-addresses/:id | _Deleting an existing delivery address by the id_ |
| **Order**            | `GET`    | /orders                 | _Getting list of the orders owned by user_        |
| **Order**            | `POST`   | /orders                 | _Adding new order_                                |
| **Cart**             | `GET`    | /carts                  | _Getting list of the orders owned by user_        |
| **Cart**             | `PUT`    | /carts                  | _Adding new order_                                |

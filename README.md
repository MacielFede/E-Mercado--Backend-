
# E-MERCADO backend

This simple project has been developed to learn a little bit about 
node.js and express. Consists of an API service that simulates the one
used in my finished project https://github.com/MacielFede/E-MERCADO.
## API Reference

#### EndPoint

```http
  http://localhost:3000/
```

#### Get category

Returns the list of categories.

```http
  GET - cats/cat.json
```

#### Get product

Returns the list of products contained in the selected category.

```http
  GET  - cats_products/[CATEGORY_ID].json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `CATEGORY_ID`      | `string` | **Required**. Id of the category to fetch |

#### Get product information

Returns the details of the selected product.

```http
  GET  - products/[PRODUCT_ID].json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `PRODUCT_ID`      | `string` | **Required**. Id of the product to fetch |

#### Get product comments

Returns the comments of the selected product.

```http
  GET  - products_comments/[PRODUCT_ID].json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `PRODUCT_ID`      | `string` | **Required**. Id of the product to fetch |

#### Get user cart

Returns the shopping cart of the user.

```http
  GET  - user_cart/[USER_ID].json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `USER_ID`      | `string` | **Required**. Id of the user to fetch |

#### Post user purchase information

Writes a file with the data sent in the request body (form URL-encoded) and
 returns a congratulations message.

```http
  POST  - /user_cart/buy
```

#### Post user item published information

Writes a file with the data sent in the request body (form URL-encoded) and
 returns a congratulations message.

```http
  POST  - /sell
```


## Feedback

If you have any feedback, or comments please reach out to me at federicomaciel.dev@gmail.com or via GitHub.


## Authors

- [My GitHub profile](https://github.com/MacielFede)
- [My LinkedIn profile](https://uy.linkedin.com/in/federico-maciel?trk=people-guest_people_search-card)

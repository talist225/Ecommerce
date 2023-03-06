# Ecommerce - HackerU final project

Welcome to my E-Commerce Hacker-U project. This is a fullstack project built from scratch with frontend and backend.

### Website demo:

[https://ty-ecommerce.onrender.com/](url)

### Install node_modules:
`npm i`

### In order to run server side:
`npm run server`

### In order to run client side:
`npm start`

### On server side I used:
* Node.js
* mongoose
* dotend
* bcryptjs
* multer
* morgan
* express.js

### On client side I used:
* React
* Bootstrap
* CSS
* joi-browser
* axios
* React-Bootstrap
* toastify

### Login as admin example:
- Email: admin@example.com
- Password: 12345678

### Login as user example:
- Email: user@example.com
- Password: 12345678

There are two types of users - admin and normal user.
#### As normal user:
A normal user can edit its own profile (name, email and password), a table with 'My orders' that includes paid status (X/V) and a status of delivered order(X/V).
A user can easily add products to their cart by clicking the "Add to Cart" button next to the item they want to purchase.

#### As admin user:
An admin has the ability to manage by creating new products, editing existing products, managing user accounts by changing user information(name and email only), change user type (to admin), delete users, and viewing all orders placed on the site.

#### Store page
The store page allows users to browse and view all available products, making it easy for them to find what they are looking for and make a purchase.

#### Search bar
Search bar allows users to search for specific products by typing in relevant keywords, and displays a list of products that match the query along with the corresponding URL.

#### Add new product
Using the admin panel, an admin can create a new product by providing details such as the product name, image, price, brand, available stock, category, and description, ensuring that customers have all the necessary information before making a purchase.

#### Register
The registration process involves the user entering their personal details, which are then validated by joi-browser system to ensure that the information provided is accurate and meets the website's requirements for creating an account. A new user cannot be created if email is already in use.

#### Login
When logging into website, users are required to provide their login credentials, which are then validated by joi-browser to ensure that the information entered is accurate and matches the user's account details.

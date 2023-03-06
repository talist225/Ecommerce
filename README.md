# Ecommerce - HackerU final project

Welcome to my E-Commerce Hacker-U project. This is a fullstack project built from scratch with frontend and backend, fully responsive to all mobiles and PC.

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

### Paypal sandbox user for payment:
- Email: ty-paypal@example.com
- Password: 12345678

There are two types of users - admin and normal user.
#### As normal user:
A normal user can edit its own profile (name, email and password), a table with 'My orders' that includes paid status (X/V) and a status of delivered order(X/V).
A user can easily add products to their cart by clicking the "Add to Cart" button next to the item they want to purchase.

#### As admin user:
An admin has the ability to manage by creating new products, editing existing products, managing user accounts by changing user information(name and email only), change user type (to admin), delete users, and viewing all orders placed on the site.


#### Header
The header section includes all the links and options necessary for users to navigate the website easily, such as search bar, login and registration, and a cart icon that displays the total number of products currently in the user's cart, making it easy for them to keep track of their selections throughout their shopping experience.

#### Add new product
Using the admin panel, an admin can create a new product by providing details such as the product name, image, price, brand, available stock, category, and description, ensuring that customers have all the necessary information before making a purchase.

#### Edit/delete users as admin
Admin panel provides the ability to view a list of all registered users, including their personal information(name and email only), order history, and account status, with the option to edit or delete user accounts as needed for efficient management of the website.

#### View all orders as admin
Admin panel allows admin to not only view all orders placed on the site, but also provides the ability to accept and process orders, enabling the efficient fulfillment of customer purchases and ensuring a positive experience for all users.

#### Register
The registration process involves the user entering their personal details, which are then validated by joi-browser system to ensure that the information provided is accurate and meets the website's requirements for creating an account. A new user cannot be created if email is already in use.

#### Login
When logging into website, users are required to provide their login credentials, which are then validated by joi-browser to ensure that the information entered is accurate and matches the user's account details.

#### Store page
The store page allows users to browse and view all available products, making it easy for them to find what they are looking for and make a purchase.

#### Search bar
Search bar allows users to search for specific products by typing in relevant keywords, and displays a list of products that match the query along with the corresponding URL.

#### Place an order
Once a user has provided their address information and selected their preferred payment method, such as PayPal or Visa, they can easily place an order and complete the transaction, allowing them to receive their desired products in a timely and efficient manner.

#### Reviews system
Review and rating system is designed to provide users with helpful feedback from other customers, but can only be accessed when the user is logged into their account to ensure that the system is accurate and reliable.

#### Payment system
Payment system based on trusted and widely-used methods such as PayPal and Visa, making it easy for customers to complete their transactions securely and efficiently.

#### Cart
The cart feature displays a list of all products that have been added by the user, along with their corresponding prices, and calculates the total cost of the purchase, providing a comprehensive summary of the items selected before proceeding to checkout.
Continue to payment page requires login.

#### Product card
A product card displays all relevant information about a particular item, including product details, images, price, and availability, while also featuring an "Add to Cart" button for easy purchasing, as well as a review system that allows users to provide valuable feedback about their experience with the product.

#### Footer
The footer section contains all the important information that customers may need, such as contact details, links to social media pages, terms and conditions, privacy policy, shipping and returns policy, and any other relevant information that can help customers make informed decisions before making a purchase.

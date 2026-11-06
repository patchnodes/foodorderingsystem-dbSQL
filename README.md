WELCOME! Please read the following instructions on how to run this application.

Intro: This is a Project - Database Integration by Patty Bactad aka @patchnodes
Project Description: Food Orderning System Prototype

Overview:
This prototype is a dynamic web application designed to replicate the ordering experience at a fast food chain shops. Users can seamlessly browse the menu, select items, specify quantities, and modify their orders as needed. This project serves as a practical exploration of integrating a database into a web application, focusing on implementing CRUD (Create, Read, Update, Delete) operations to manage menu items effectively.

Key Features:

Menu Selection: Users can browse through the McDonald's menu, selecting their desired items with ease.
Quantity Selection: For each chosen item, users have the flexibility to specify the desired quantity for their order.
Order Management: The application allows users to update their orders dynamically, enabling them to modify quantities or remove items as necessary.
Database Integration: Leveraging SQLite, the application seamlessly stores and retrieves order data, ensuring smooth interaction and data persistence.
User-Friendly Interface: The user interface is designed for simplicity and intuitiveness, providing a seamless ordering experience akin to the McDonald's ordering process.

---------------------------------------------------------------

**Instructions: Setting Up the McDonald's Menu App**

**Before proceeding, please make sure that you have SQLiteStudio database installed in your computer. Kindly visit: https://sqlitestudio.pl/ and download the app if you haven't already**

1. **Initialize Node.js:**
   - Create a new directory for the project.
   - Open your terminal and navigate to the project directory.
   - Run the command `npm init` and provide the necessary information prompted by the terminal (e.g., description, test command, git repository, keywords, author).

2. **Install SQLite Package:**
   - In your terminal, run `npm install sqlite3` to install the SQLite package for Node.js.

3. **Install Dependencies:**
   - After installing SQLite, run `npm install` in the terminal to install all required dependencies specified in your `package.json` file.

4. **Test the Server:**
   - To ensure proper functionality, run `node server.js` in the terminal.
   - If the server starts successfully, you should see a message indicating "Server started on port 3000. Connected to the mydb.sqlite3 database".

5. **View the App & Test:**
   - Once the server is running, open your web browser and visit http://localhost:3000/ to access the McDonald's Menu App.
   - Test the app first by selecting items in the form, and checking if all functions of CRUD operations were working

6. **Open SQLite Database:**
   - After adding an item in the ordered items table, open the `mydb.sqlite3` file from the folder you downloaded this whole project from
   - Once the database is open, you will get a pop-up window where it asks you to setup your database
   - Under Database Type select SQLite 3, then under File, click the folder icon and find the `mydb.sqlite3`, then click "OK"
   - Next thing is, hover your mouse to the "Connect to the database" to connect
   - Once connection is successful, click "Data" inside the database and you should see the items added inside the database
   - You can also click the "Refresh table data" whenever you add, remove, update functions in this proect

Following these steps will set up the development environment for the McDonald's Menu App, allowing you to seamlessly integrate the SQLite database and begin building the application features.
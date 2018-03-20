# Rating_List_Node
Node JS Assignment - Sends the rating value if the User requested with the Products URL.


Project Setup
-------------
1. npm install
2. Install MongoDB on your pc
3. Start your mongodb with the following command 'sudo mongod --dbpath={{/data/db path}}'
4. Host the mongo with the following command 'mongo --host 127.0.0.1:27017'
5. Add products using the below command 

            db.products.save({productId:1, rating:5})
            db.products.save({productId:2, rating:4})
            db.products.save({productId:3, rating:3})
            db.products.save({productId:4, rating:2})
            db.products.save({productId:5, rating:5})

6. Host the Node project using the following Command
    -----> 'npm start'

    if nodemon installed on your pc then you can use 
    -----> 'nodemon start'
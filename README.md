# Invoice.bg
Web Applications with Node.js Team Project

**Application description:**

Invoice.bg application is developed in order to prepare and print invoices very quickly even without any registration. 
You just need to fill a form and clink on Print and a PDF file will be generated for you. 
If you like it, and decide to register you will be able to fill your Company Details, to select your Company Logo which will be print on the invoice and to keep information for Clients and Products you have already used in Invoices. On next invoice fill, you can use the autocomplete functionality to fill in a quicker way the Client Company data and the products. Your company data is filled automatically as well. The history of all your invoices is also available for you, you can edit and reprint old invoices. 
The application also provides a wide list of Reports
 
-	List of invoices for selected period
-	List of invoices for a specific client company
-	List of invoices containing specific product
-	List of invoices issued in a specific city

You can create a new user, using our registration form or login directly using your facebook credentials.

**Brief documentation of the project and the project architecture:**

The application is developed using Node.js, Express and MongoDB. 

*Public part*

The public part shows the Home page, the information for a project, demo and a possibility to fill and print an invoice. No data are saved in database. 

Web pages: carousel.pug, about.pug, login.pug, register.pug, invoice.pug

Routes: /home, /about, /login, /register, /invoice

*Private part*

The private part gives the possibility to save User Company Details, Client Company Details, Products and Invoices. There is a possibility saved information to be edited and invoices deleted. A huge number of reports are produced as well. 

Web pages: company-details.pug, invoice-list.pug, invoice-listplace.pug, products.pug, profile.pug, reference.pug, user-invoice.pug.

Routes: /company, /company/create, /company/settings, /invoice/all, /invoice/:id, /invoice/remove/:id,
/reference, /user/profile, /logout

Data is stored in a MongoDB in 5 collections: Users, CompanySettings, Clients, Products and Invoices. Mongoose is used for schema creation and data access.

We use the MVC architecture. 

A validation is provided on Data and Controller layer (using Express Validator). 

The views are developed using PUG. They are stylized using Bootstrap.

We use Passport technology for registration and login. The passport local and passport facebook strategies. 

Some additional technologies used: jQuery autocomplete, jsPDF, Ajax, Connect-flash, Multer.

We use Mocha, Chai, Sinon, Node-mocks-http and ESLint to provide the high quality of our code, and to fully test our application.

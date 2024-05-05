const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())  
app.use(cors())


/* Ushan Mihiranga (Supplier Management) */
const supplierRouter = require("./routes/suppliers")
const userRouter = require("./routes/Users")
const newUserRouter = require("./routes/NewUsers")
const oldSupplierRouter = require("./routes/OldSupplier")

/* Lashini Jayasooriya (Order Management) */
const orderRouter = require("./routes/orders")

/* Rashmika Nimesh (Product Management) */
const productRouter = require("./routes/products")

/* Rashini Weerawardane (Customer Management) */
const customerRouter = require("./routes/customers")

/* Samadhi Jayasooriya (Transaction History) */
const historyRouter = require("./routes/history")
const historySumRouter = require("./routes/historySummary")

/* Haritha Lidapitiya (Report Genaration) */
const discountRouter = require("./routes/discount")
const ComplainRouter = require("./routes/complains")

/* Dulaj Indula (Payment Management) */
const paymentRouter = require("./routes/payments")

/* Ridmi Ranashinha (Delivery Management) */
const deliveryRouter = require("./routes/delivery")


/* Ushan Mihiranga (Supplier Management) */
app.use(supplierRouter)
app.use("/api/user", userRouter);
app.use("/api/user",newUserRouter)
app.use(oldSupplierRouter)

/* Lashini Jayasooriya (Order Management) */
app.use(orderRouter)

/* Rashmika Nimesh (Inventory Management) */
app.use(productRouter)
app.use('/uploads', express.static('uploads'));

/* Rashini Weerawardane (Customer Management) */
app.use(customerRouter)

/* Samadhi Jayasooriya (Transaction History) */
app.use(historyRouter)
app.use(historySumRouter)

/* Haritha Lidapitiya (Report Genaration) */
app.use(discountRouter)
app.use(ComplainRouter)

/* Dulaj Indula (Payment Management) */
app.use(paymentRouter)

/* Ridmi Ranashinha (Delivery Management) */
app.use(deliveryRouter)


const PORT = process.env.PORT || 8070;

mongoose
.connect(process.env.URL,{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false  })
.then(() =>{
    console.log("BuySell Nexus Database Connected 😌")
})
.catch((err) =>console.log("DB Connection Error", err))

app.listen(PORT, () =>{
    console.log("BuySell Nexus is running on -->  ",PORT)  
})
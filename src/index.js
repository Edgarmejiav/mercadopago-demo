
import express from 'express';
const app = express();
import payment from "./routes/payment.js";
const port = process.env.PORT || 3005;

app.use(payment);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
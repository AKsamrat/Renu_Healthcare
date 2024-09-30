// index.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDb from './config/connectdb.js';
import routes from './routes/index.js';
import Razorpay from 'razorpay';
import bodyParser from 'body-parser';
import crypto from 'crypto';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// Load Routes
app.use('/api', routes);

connectDb();
const PORT = process.env.PORT || 5000;
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

async function run() {
  // Start the server after successful connection
  app.post('/order', async (req, res) => {
    try {
      if (!req.body) {
        return res.status(400).send('Bad Request');
      }

      const { amounts, currency, receipt } = req.body;

      const options = {
        amount: amounts * 100, // amount in smallest currency unit
        currency,
        receipt,
      };
      const order = await razorpay.orders.create(options);
      console.log(order);
      // if (!order) {
      //   return res.status(400).send('Bad Request');
      // }

      res.json(order);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }

    app.post('/validate', (req, res) => {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

      const sign = razorpay_order_id + '|' + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(sign.toString())
        .digest('hex');

      if (expectedSignature === razorpay_signature) {
        res.json({ status: 'success' });
      } else {
        res.status(400).json({ status: 'failure' });
      }
    });
  });
}
run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('YOUR server is live');
});
app.listen(PORT, () => {
  console.log(`App running in port:  ${PORT}`);
});
// Call the connectDb function

//MONGODB_URI=mongodb+srv://anshul:anshul112@clusterdatabase.24furrx.mongodb.net/renuapp?retryWrites=true&w=majority&appName=ClusterDatabase

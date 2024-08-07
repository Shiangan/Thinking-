// pages/api/obituary.js
import dbConnect from '../../utils/dbConnect';
import Obituary from '../../models/Obituary';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const obituary = await Obituary.create(req.body);
        res.status(201).json({ success: true, data: obituary });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

// pages/api/obituaries.js
import dbConnect from '../../utils/dbConnect';
import Obituary from '../../models/Obituary';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const obituaries = await Obituary.find({});
        res.status(200).json({ success: true, data: obituaries });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

// pages/api/order-flowers.js
import dbConnect from '../../utils/dbConnect';
import Order from '../../models/Order';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const order = await Order.create(req.body);
        res.status(201).json({ success: true, data: order });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

// pages/api/orders.js
import dbConnect from '../../utils/dbConnect';
import Order from '../../models/Order';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const orders = await Order.find({});
        res.status(200).json({ success: true, data: orders });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

// models/Obituary.js
import mongoose from 'mongoose';

const ObituarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '請填寫  姓名'],
  },
  birthDate: {
    type: Date,
    required: [true, '請填寫出生日期'],
  },
  deathDate: {
    type: Date,
    required: [true, '請填寫死亡日期'],
  },
  age: {
    type: Number,
    required: [true, '請填寫年齡'],
  },
  content: {
    type: String,
    required: [true, '請填寫訃聞內容'],
  },
  photos: [
    {
      type: String,
      required: [true, '請提供照片URL'],
    },
  ],
  memorialPlaquePlacement: {
    type: Date,
    required: [true, '請填寫牌位擺放日期'],
  },
  funeralDate: {
    type: Date,
    required: [true, '請填寫葬禮日期'],
  },
  funeralLocation: {
    type: String,
    required: [true, '請填寫葬禮地點'],
  },
}, { timestamps: true });

export default mongoose.models.Obituary || mongoose.model('Obituary', ObituarySchema);

// models/Order.js
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  recipient: {
    type: String,
    required: [true, '請填寫收花人姓名'],
  },
  deliveryDate: {
    type: Date,
    required: [true, '請填寫送花日期'],
  },
  address: {
    type: String,
    required: [true, '請填寫送花地址'],
  },
  message: {
    type: String,
    required: [true, '請填寫留言'],
  },
  flowers: [
    {
      type: String,
      required: [true, '請選擇花籃'],
    },
  ],
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);

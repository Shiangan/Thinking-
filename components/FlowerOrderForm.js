import { useState } from 'react';

export default function FlowerOrderForm() {
  const [form, setForm] = useState({
    recipient: '',
    deliveryDate: '',
    address: '',
    message: '',
    flowers: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/order-flowers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    alert('訂單已提交');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      {/* 表單內容 */}
      <label htmlFor="recipient">收花人</label>
      <input
        id="recipient"
        type="text"
        value={form.recipient}
        onChange={(e) => setForm({ ...form, recipient: e.target.value })}
        required
      />
      {/* 添加其他表單字段 */}
      <button type="submit" className="btn btn-primary">提交訂單</button>
    </form>

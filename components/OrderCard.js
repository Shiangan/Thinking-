export default function OrderCard({ order }) {
  return (
    <div className="card bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-2xl font-bold">訂單 ID: {order._id}</h2>
      <p className="text-gray-600">收花人: {order.recipient}</p>
      <p className="text-gray-600">送花日期: {new Date(order.deliveryDate).toLocaleDateString()}</p>
      <p className="text-gray-600">地址: {order.address}</p>
      <p>留言: {order.message}</p>
      <p>花籃種類: {order.flowers.join(', ')}</p>
    </div>
  );
}

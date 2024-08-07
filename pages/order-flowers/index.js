import Layout from '../../components/Layout';
import FlowerOrderForm from '../../components/FlowerOrderForm';

export default function OrderFlowers() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">訂購花籃</h1>
      <FlowerOrderForm />
    </Layout>
  );
}

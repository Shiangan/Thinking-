import Layout from '../../components/Layout';
import ObituaryForm from '../../components/ObituaryForm';

export default function SubmitObituary() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">提交訃聞</h1>
      <ObituaryForm />
    </Layout>
  );
}

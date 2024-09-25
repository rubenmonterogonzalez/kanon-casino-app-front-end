import Jumbotron from "../components/Jumbotron/Jumbotron";
import Layout from "../layouts/Layout"; // Fix the casing of the import statement

export default function Home() {
  return (
    <Layout>
      <Jumbotron
        title="Welcome to Casino App"
        subtitle="Where other casinos come to play"
      />
    </Layout>
  );
};
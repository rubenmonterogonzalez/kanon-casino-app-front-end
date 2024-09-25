import Layout from "../layouts/Layout";
import GameList from "../components/Lists/GameList";

export default function Games() {
  return (
    <Layout>
      <section className="mx-8 w-full flex flex-col">
        <h2 className="text-2xl font-bold bg-gray-100 my-6 p-2 rounded-md">
          Games
        </h2>
        <GameList />
      </section>
    </Layout>
  );
};

import SlotMachine from "../components/SlotMachine/SlotMachine";
import Layout from "../layouts/Layout";

export default function Slots() {
  return (
    <Layout>
      <section className="mx-8 w-full flex flex-col">
        <h1 className="text-2xl font-bold bg-gray-100 my-6 p-2 rounded-md">Slots</h1>
        <SlotMachine />
      </section>
    </Layout>
  )
}
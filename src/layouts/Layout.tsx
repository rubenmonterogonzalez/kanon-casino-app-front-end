import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }: {children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex bg-black">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
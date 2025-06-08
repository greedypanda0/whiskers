import Footer from "./Footer";
import Top from "./Top";

export default function Main({ children }) {
  return (
    <main className="fixed flex flex-col md:flex-row w-full h-full">
      <div className="flex flex-col w-full h-full items-center">
        <Top />
        {children}
      </div>
      <Footer />
    </main>
  );
}

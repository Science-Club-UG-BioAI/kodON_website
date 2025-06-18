import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-r from-lazuli-900 to-lazuli-800 font-fira">
      <Header />
      <Main />
      {children}
      <Footer/>
    </div>
  );
}

// more features can be added later

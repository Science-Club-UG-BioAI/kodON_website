import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-fira">
      <Header />
      <Main />
      {children}
      <Footer/>
    </div>
  );
}

// more features can be added later

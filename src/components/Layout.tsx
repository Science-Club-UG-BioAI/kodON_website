import Header from "./Header";
import Main from "./Main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto font-fira">
      <Header />
      <Main />
      {children}
    </div>
  );
}

// more features can be added later

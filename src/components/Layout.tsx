import Main from "./Main";
import Nav from "./Nav";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Nav/>
      </div>
      <Main/>
      {children}
    </div>
  )
}

// more features can be added later 
// layout already has a padding to content !!!!
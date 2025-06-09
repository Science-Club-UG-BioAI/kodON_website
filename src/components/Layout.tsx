import Nav from "./Nav";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="max-w-[2000px] w-full mx-auto px-4">
      <Nav/>
      {children}
    </div>
  )
}

// more features can be added later 
// layout already has a padding to content !!!!
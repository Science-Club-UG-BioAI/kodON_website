export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="max-w-[2000px] w-full mx-auto">
      {children}
    </div>
  )
}

// more features can be added later 
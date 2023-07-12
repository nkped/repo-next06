import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Velkommen til 👋&nbsp;
        <span className="font-bold">Kristian's</span> blog        
      </p>
      <Posts />
    </main>
  )
}

import Advertisement from "../components/Advertisement"
import Filter from "../components/Filter"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"

const Home = () => {
  return (
    <div className="px-60 ">
      <Hero />
      <div className="flex items-start gap-4 my-12">
        <Filter />
        <Jobs />
        <Advertisement />
      </div>
    </div>
  )
}
export default Home
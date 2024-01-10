import { CustomFilter, Hero, SearchBar } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold"> Motos disponibles</h1>
          <p>
            Explora las motos que podrian gustarte 
          </p>
        </div>

        <div className='home__filter'>
          <SearchBar/>

          <div className='home__filter-container'>
            <CustomFilter title="Motor"/>
            <CustomFilter title="Ano"/>

          </div>
        </div>
      </div>
 
    </main>
  )
}

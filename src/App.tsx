import Filter from "./components/Filter-card";
import Header from "./components/Header";
import Listing from "./components/Listing-card";


export default function ListinBody() {


  return (

    <>
      <Header />
      <main>
        <section className="container section-filter">
          <Filter />
          <div className="card-listing-main mt20">
            <Listing />
          </div>
        </section>
      </main>
    </>

  )
}



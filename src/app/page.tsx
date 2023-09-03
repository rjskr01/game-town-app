import MainNavigation from "./component/main-navigation"

export default function Home() {
    return (
      <main className="container">
        <div className="flex flex-row">
          <section className="flex-[60%] ml-[50px]">
            <MainNavigation/>
          </section>
          <section className="flex-[40%] mt-[20px]">

          </section>
        </div>
      </main>
    )
  }
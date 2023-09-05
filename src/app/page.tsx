import Login from "./component/login"
import MainNavigation from "./component/main-navigation"

export default function Home() {
    return (
      <main className="">
        <div className="flex flex-row">
          <section className="flex-[60%] ml-[50px]">
            <MainNavigation/>
            <Login/>
          </section>
          <section className="flex-[40%] mt-[20px]">

          </section>
        </div>
      </main>
    )
  }
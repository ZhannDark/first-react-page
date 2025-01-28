import Header from "./components/Header"
import Entry from "./components/Entry";
import Data from "./data"

export default function App() {
  const dataArr = Data.map(eachData =>
      <Entry key={eachData.id}
             {...eachData}
      />
  )
  return (
      <>
          <Header/>
          <main className="container">
              {dataArr}
          </main>
      </>
  )
}

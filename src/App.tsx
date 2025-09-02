/*
Since this is a single page we are writing everything here which is generally not recomended for multi-page applications
 */

import Comparison from "./components/Comparison"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ParentTeacherHub from "./components/ParentTeacherHub"
import Plans from "./components/Plans"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import SeperatorLine from "./components/SeperatorLine"

const App = () => {
  return (
    <>
      <Header />
      <SeperatorLine />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Comparison />
      <Plans />
      <ParentTeacherHub />
      <Section5 />
      <Footer />
    </>
  )
}

export default App

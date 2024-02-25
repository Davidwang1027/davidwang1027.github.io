import React from 'react'
import Header from './components/Header/Header'
import Experience from './components/Experience/Experience'
// import Projects from './components/Projects'
// import CourseNotes from './components/CourseNotes'
// import Personal from './components/Personal'
// import Contact from './components/Contact'
// import Footer from './components/Footer';
import { Layout, Flex } from 'antd'

const { Footer, Content } = Layout

const App = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout className="layoutStyle">
        <Header></Header>
        <Content>
          <Experience />
          {/* <Projects />
          <CourseNotes />
          <Personal />
          <Contact /> */}
        </Content>
        <Footer></Footer>
      </Layout>
    </Flex>
  )
}

export default App

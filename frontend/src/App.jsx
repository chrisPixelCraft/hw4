// import './App.css'
// import Header from './components/Header'
// import Content from './components/Content'

// function App() {
//     return (
//         <>
//             {/* <div> Hello World </div> */}
//             <Header />
//             <Content />
//         </>
//     )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/about" element={<About />} />
                {/* ... other routes ... */}
            </Routes>
            <Footer />
        </Router>
    )
}

export default App

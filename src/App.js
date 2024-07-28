import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Graphs from "./components/Realtimegraphs/Realtimegraphs";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/Contact/Contact";
import AppContext from "./utils/context";
import Blog from "./components/Header/Blog/Blog";
import BlogPost1 from "./components/Header/Blog/blogpost1";
import BlogPost2 from "./components/Header/Blog/blogpost2";
import BlogPost3 from "./components/Header/Blog/blogpost3";
import BlogPost4 from "./components/Header/Blog/blogpost4";
import BlogPost5 from "./components/Header/Blog/blogpost5";
import BlogPost6 from "./components/Header/Blog/blogpost6";
import Products from "./components/Products/Products";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/realtimegraphs" element={<Graphs />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blogpost1" element={<BlogPost1 />} />
                    <Route path="/blogpost2" element={<BlogPost2 />} />
                    <Route path="/blogpost3" element={<BlogPost3 />} />
                    <Route path="/blogpost4" element={<BlogPost4 />} />
                    <Route path="/blogpost5" element={<BlogPost5 />} />
                    <Route path="/blogpost6" element={<BlogPost6 />} />
                </Routes>
                <NewsLetter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;

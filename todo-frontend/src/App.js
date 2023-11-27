import { 
  Routes, Route, Link, NavLink, useResolvedPath, useMatch, Outlet
} from "react-router-dom";
import About from "./routes/about";
import Contact from "./routes/contact";
import Home from "./routes/home";
import NoMatch from "./routes/nomatch";
import Post from "./routes/post";
import Posts from "./routes/posts";
import PostIndex from "./routes/postindex";


function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <NavLink style={({ isActive }) => (isActive ? { color: "blue" } : undefined)} to="/">
            Home
          </NavLink>        
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}
           to={{
            pathname: '/contact',
            search: '?api_key=eimieU9',
            stare: 'test',
           }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={({  isActive }) => (isActive ? 'active' : undefined)} to="/posts">
            Posts
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostIndex />} />
            <Route path=":postId" element={<Post />} />
          </Route>
        </Route>
        <Route path="/contact" element={<Contact message="Hello Contact" />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

// function CustomLink({ children, to, ...props }) {  //...props は、Reactコンポーネントのプロップス (props) をまとめて取得するためのJavaScriptの構文
//   let resolved = useResolvedPath(to);
//   let match = useMatch({
//     path: resolved.pathname,
//     end: true,
//   });

//   return (
//     <div>
//       <Link style={{ color: match ? 'blue' : '' }} to={to} {...props}>
//         {children}
//       </Link>
//     </div>
//   );
// }

const Layout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}><Outlet /></div>
  );
}

// const Layout2 = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'end' }}><Outlet /></div>
//   );
// }


export default App;
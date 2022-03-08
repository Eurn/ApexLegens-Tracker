import {BrowserRouter as Router, Link, Routes} from "react-router-dom";
import React from 'react';
import { LogoSVG } from '../assets/logo';
// import App from "../pages/App";
// import Home from "../pages/Home";

const Header = () => {
    return (
        <Router>
            <nav className="h-20 w-screen flex bg-black">
                <div className="min-w-[1282px] px-4 flex justify-between m-auto text-white items-center">
                    <Link to="/">
                        <LogoSVG/>
                    </Link>
                    <Link to="/favorite">Favorite</Link>
                    <Routes>
		 					{/* <Route exact path='/' element={<App/>}/>
		 					<Route exact path='/favorite' element={< Home/>}/> */}
					</Routes>

			    </div>
		    </nav>
        </Router>
	);
};

export default React.memo(Header);

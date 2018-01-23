import React from 'react';
import {Link} from "react-router/es";
import Translate from "react-translate-component";

var image = require("assets/404.png");

const NotFound = () =>

	<div className="grid-block main-content wrap regular-padding">
		<div className="grid-content small-12" style={{marginTop:"200px"}}>
			<div style={{ textAlign:"center"}}>
				<img style={{marginBottom:"1.2rem"}} src={image} />
				<h3>404 page not found</h3>
				<p>This page does not exist.</p>
				<Link className="button" to={"/dashboard"}>
				    <Translate style={{color:"#fff"}} content="account.home" />
				</Link>
			</div>
		</div>
	</div>

export default NotFound;
import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
require('../../../styles/navi.style.css');
class NavigationComponent extends React.Component{

	constructor(){

		super();
		this.state = { username : cookie.load('username'), userId : cookie.load('userId'), userImage : '' };
		console.log(this.state, "state")
	}

	render(){
		return (
			<div className="topbar">
			<div className="mdl-layout__header">
			<div className="mdl-layout__header-row" >
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.goHomePage}>隆华</button>
			<div className="mdl-layout-spacer"></div>

			{(() => {
				if(!this.state.username || !this.state.userId){
					return (
						<div>
						<Link className='navi-signup' to={`/`}>Sign Up</Link>
						</div>
						);
				}else{
					return (
						<div className="mdl-list__item">
						<div className="mdl-layout-spacer"></div>

						<button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
						onClick={this.logout.bind(this)}>
						退出
						</button>

						</div>
						);
				}
			})()}

			</div>
			</div>
			</div>
			)
	}

	goHomePage() {
		console.log('go home');
		hashHistory.push('/home');
	}

	logout() {
		console.log("log out")
		cookie.remove('username', { path: '/' });
		cookie.remove('userId', { path: '/' });
		this.setState({username : undefined, userId : undefined});
		hashHistory.push('/');

	}
}
export default NavigationComponent
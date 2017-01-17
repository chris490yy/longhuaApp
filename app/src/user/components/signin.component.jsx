import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import { userSignup } from '../actions/user.action';
require('../../../styles/index.style.css');
const URL = "https://longhua.herokuapp.com/";


class SigninComponent extends React.Component{

  constructor() {
    super();
    this.state = { username : '', password: '' };
  }

  componentDidMount(){
      componentHandler.upgradeDom();
  }

  render() {

    return (
              <div className="backcontent mdl-layout mdl-js-layout">

                  <div className='content'>
                    <br></br>

                    <div className='form'>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="addr1" value={this.state.username} required onChange={this.updateUsername.bind(this)}/>
                        <label className="mdl-textfield__label" htmlFor="addr1">Username</label>
                      </div>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="password" id="addr2" value={this.state.password} required onChange={this.updatePassword.bind(this)}/>
                        <label className="mdl-textfield__label" htmlFor="addr2">Password</label>
                      </div>
                      <div className='errMsg'>
                        {(() => {
                              if(this.state.errMsg){
                                return (

                                          <i>{this.state.errMsg}</i>

                                        );
                              }
                        })()}
                      </div>
                    </div>
                    <div className='control'>
                      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.handleSubmit.bind(this)}>
                        登录
                      </button>
                    </div>
                    <div className='info'>
                    </div>

                  </div>

              </div>
          )
  }

  //<Link to='/' onClick={this.props.userSignup}>No account? Sign Up</Link>
  updateUsername(e){
    this.setState({username : e.target.value});

  }
  updatePassword(e){
    this.setState({password : e.target.value});
    //console.log(this.state);
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.username.length > 6 && this.state.password.length > 6){
      this.submitForm(this.state.username, this.state.password);
    }else{
      this.setState({errMsg : '用户名或密码至少为6位'});
    }
  }
  submitForm(username, password) {
        axios({
          method: 'POST',
          url: URL + 'users/login',
          data: {
            username : username,
            password : password
          },       
        }).then(data => {
          console.log(data, "success login!!!!!!!!!!!!!");
          cookie.save('username', data.username, { path: '/' });
          cookie.save('userId', data._id, { path: '/' });
          hashHistory.push('/home');
        })
        .catch(err => {
              this.setState({errMsg : '用户名或密码错误'});
              console.error(err, "wrong!!!!!!!!!!!!!!!!!!");
        });
   }
}
export default SigninComponent;

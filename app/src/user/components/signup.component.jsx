import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import { userSignin } from '../actions/user.action';
require('../../../styles/index.style.css');
const URL = "https://longhua.herokuapp.com/";

class SingupComponent extends React.Component{


  constructor() {
    super();
    this.state = { username : '', password: '', confirmPassword : ''};
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
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="password" id="addr3" value={this.state.confirmPassword} required onChange={this.updateConfirmPassword.bind(this)}/>
                        <label className="mdl-textfield__label" htmlFor="addr3">Confirm Password</label>
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
                        Sign Up
                      </button>
                      <Link to='/' onClick={this.props.userSignin}>Have Account? Sign In</Link>
                    </div>
                    <div className='info'>
                      <br></br>
                      <b>Information for Employees</b>
                      <br></br>
                      <br></br>
                    </div>

                  </div>

              </div>
          )
  }
  updateUsername(e){
    this.setState({username : e.target.value});
    //console.log(this.state);
  }
  updatePassword(e){
    this.setState({password : e.target.value});
    //console.log(this.state);
  }
  updateConfirmPassword(e){
    this.setState({confirmPassword : e.target.value});
    //console.log(this.state);
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.password != this.state.confirmPassword){
      this.setState({errMsg : "密码错误!"});
      return;
    }
    if(this.state.username.length > 6 && this.state.password.length > 6){
      this.submitForm(this.state.username, this.state.password);
    }else{
      this.setState({errMsg : '用户名或密码不能少于6位！'});
    }
  }
  submitForm(username, password) {

        axios({
          method: 'POST',
          url: URL + 'users/register',
          data: {
            username : username,
            password : password
          },       
        }).then(data => {

          if(data.data.code && data.data.code == 11000){
            this.setState({errMsg : '用户名重复!'});
            console.log("dupilicate!!!");
          }else{
            console.log("in jump home");

            cookie.save('username', data.username, { path: '/' });
            cookie.save('userId', data._id, { path: '/' });
            hashHistory.push('/home');
          }
        })
        .catch(err => {
              this.setState({errMsg : '注册失败， 请重试'});
              console.error(err, "wrong!!!!!!!!!!!!!!!!!!");
        });
   }
}

export default SingupComponent;

import React, { Component } from 'react';

class SignIn extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    
    onSubmitSignIn = () => {
        fetch('https://facereg-smart-brain-api.herokuapp.com/signin', {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
          })
        })
            .then(response => response.json())
          .then(user => {
            if (user.user_id) {
              this.props.loadUser(user)
              this.props.onRouteChange('home');
            }
          })
      }
    render(){
        return(
            <article className="br2 ba black b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5 grow">
                <main className="pa4 black-80">
                    
                    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                        <input 
                        required 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email"  
                        id="email"
                        onChange={this.onEmailChange}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                        required 
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordChange}/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                    </div>
                </main>
            </article>
        );
    }
        
}

export default SignIn;
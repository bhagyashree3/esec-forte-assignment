import React from 'react'
import './login.css'
import history from './history';

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state={
            user:'',
            password:''
        }
    }
    

    componentDidMount(){
        localStorage.setItem('user','test');
        localStorage.setItem('password','test');
        const listOfFood =[
            {id:'1',
             category:'Vegetable',
             name: 'carrot',
             expiryTime: '5',
             priority:'1'},
             {id:'1',
             category:'Vegetable',
             name: 'spinach',
             expiryTime: '2',
             priority:'2'}
        ]
        localStorage.setItem('list',JSON.stringify(listOfFood))

    }

    authenticateUser = (event)=>{
        const user = localStorage.getItem('user');
        const password= localStorage.getItem('password');
        const {user :userState, password: passwordState} =this.state;
        if(user===userState && password===passwordState){
            history.push('/home')
        }else{
            alert('login failed !')
        }
        this.setState({
            user:'',
            password:''
        })

    }

    handleOnChange =(event)=>{
        const {target : { name = '', value=''}}= event;
        this.setState({
            [name]:value
        })

    }

    render() {
        const {user , password} =this.state;
        return (
            <div class="container">
            <form class="form-signin">
                    <h2 class="form-signin-heading">Please sign in</h2>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" class="form-control"
                    value={user} name="user" onChange={this.handleOnChange}
                     placeholder="Email address" required autofocus/>
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control"
                        name="password" value={password}
                        value={password} onChange={this.handleOnChange}
                         placeholder="Password" required/>
                        <button class="btn btn-lg btn-primary btn-block" type="submit"
                        onClick={this.authenticateUser}
                        >Sign in</button>
             </form>

            </div> 
        )
    }
}

export default Login
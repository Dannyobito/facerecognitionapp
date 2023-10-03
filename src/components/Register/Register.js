import React from "react";


class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    onNameChange = (event) => {
        this.setState({username: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }
    onSubmitRegister = () => {
        fetch('http://localhost:3999/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user=> {
            console.log(user);
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home')
            }
        })
        
    }
    render(){
        const {onRouteChange} = this.props;
        return(
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="bg-transparent bg-opacity-95 shadow shadow-black max-w-xl container mx-auto ">
                    <div className="w-4/5 mx-auto">
                        <p className="mt-10 text-center text-white text-base font-semibold">Login into your account</p>
                        <div className="mt-10">
                            <div className="p-10">
                                <div className="mt-2 ">
                                    <label htmlFor="username" className="text-white text-base font-normal">Username:</label>
                                    <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg ">
                                        <input 
                                            type="text" 
                                            name="username"
                                            id="username"
                                            value={this.state.username}
                                            onChange={(e)=>{this.onNameChange(e)}}
                                            placeholder="Chris Jericho" 
                                            className="w-full text-black placeholder:text-black px-4 py-3 bg-transparent outline-none p-4"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 ">
                                    <label htmlFor="email" className="text-white text-base font-normal">Email :</label>
                                    <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg">
                                        <input 
                                            type="email" 
                                            name="email"
                                            id="email"
                                            value={this.state.email}
                                            onChange={(e)=>{this.onEmailChange(e)}}
                                            placeholder="chrisjericho@mail.com" 
                                            className="w-full text-black placeholder:text-black px-4 py-3 bg-transparent outline-none p-4 rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 ">
                                    <label htmlFor="password" className="text-white text-base font-normal">Password :</label>
                                    <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg">
                                        <input 
                                            type="password" 
                                            name="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={(e)=>{this.onPasswordChange(e)}}
                                            placeholder="*******" 
                                            className="w-full text-black placeholder:text-black px-4 py-3 bg-transparent outline-none p-4 rounded-lg"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={this.onSubmitRegister}
                                    className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">
                                    Register
                                </button>
    
                                <div className="relative flex items-center mt-8">
                                    <div className="border h-0 w-2/4 border-stone-300"></div>
                                    <div className=" text-stone-300 px-4 text-sm font-normal">OR</div>
                                    <div className=" border h-0 w-2/4 border-stone-300"></div>
                                </div>
                                <button
                                    onClick={()=>onRouteChange('signin')}
                                    className="border border-indigo-900 rounded-lg  text-center  text-indigo-900 bg-white text-base font-semibold w-full py-3 mt-9">
                                    Login
                                </button>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;
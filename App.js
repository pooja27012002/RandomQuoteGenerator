import React from 'react'
import axios from 'axios';
import './App.css';


class App extends React.Component{

    //state--global object that conatins all imp components
   
   state = {advice: ''};

   //lifecycle method
   componentDidMount(){
        this.fetchAdvice();
   }
   //funct that belongs to class
   fetchAdvice =()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response) =>{
            const {advice} = response.data.slip;
            //console.log(advice);
            this.setState({advice :advice});
                            //prop:val
        }).catch((error)=>{
            console.log(error);
        });
   }
   
    render(){
        return(

            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{this.state.advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>GIVE ME AN ADVICE</span>
                    </button>
                </div>
            </div>

            //<h1>{this.state.advice}</h1>
        );
    }
}
export default App;
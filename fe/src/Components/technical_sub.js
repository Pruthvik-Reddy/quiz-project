import React,{Component} from 'react';
import axios from 'axios';
import './exam.css';


export default class technical_sub extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
            

        };
        console.log("Inside Sub");
    }


    componentDidMount() {
        axios.get("http://localhost:5000/users/tech").then(res => {
          this.setState({
            data: res.data ,
             
          });
        });
      }
      


    render(){
        console.log("out out out");
        var correctAnswers=0;
        var wrongAnswers=0;
        console.log(this.state.data[0]._id);
        var render_method=<div><h1>Hello</h1></div>;
        return (<div>
            <h1>Hello</h1>
        </div>);

        /*
            if(this.state.data!==[]){
                console.log("In")
                render_method=()=>{
                    return <div>
                    <div className="container cd9">           
                          
                          {this.state.endQuiz === false ? <form onSubmit={this.onSubmit}>
                              
                          <div>
                            
                            
                              
                               
                               <React.Fragment>
                          
                                 <p> 
                                   {}
                                   <b>Quiz</b> :   <b> {this.state.data[this.props.index].questiontext}</b>
                           {}
                                 </p>
                                 <p> 
                                   <input type="radio" name={this.statedata[this.props.index]._id} value={this.state.data[this.props.index].answerlist[0]} id="0" onChange={(e)=>this.handlecheck(e, this.state.data)}/>&nbsp;
                                   <label for="0">{this.state.data[this.props.index].answerlist[0]} </label>
                                 </p>
                                 <p> 
                                 <input type="radio" name={this.state.data[this.props.index]._id} value={this.state.data[this.props.index].answerlist[1]} id="1" onChange={(e)=>this.handlecheck(e, this.state.data)}/>&nbsp;
                                 <label for="1">{this.state.data[this.props.index].answerlist[1]} </label>
                                 </p>
                                 <p> 
                                 <input type="radio" name={this.state.data[this.props.index]._id} value={this.state.data[this.props.index].answerlist[2]} id="2" onChange={(e)=>this.handlecheck (e, this.state.data)} />&nbsp;
                                 <label for="2">{this.state.data[this.props.index].answerlist[2]} </label>
                                 </p>
                                 <p> 
                                 <input type="radio" name={this.state.data[this.props.index]._id} value={this.state.data[this.props.index].answerlist[3]} id="3" onChange={(e)=>this.handlecheck (e,this.state.data)} />&nbsp;
                                 <label for="3">{this.state.data[this.props.index].answerlist[3]} </label> 
                                 </p>
                                 {}
                               <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                               </React.Fragment>
                                   
                              
                          </div> 
                                        
                          <div className="form-group">
                            <input type="submit" value="Submit" onClick={this.submitQuiz} className="btn btn-primary btn-lg" />
                           </div>
                         </form> : <div style={{position:"absolute",top:"200px",left:"550px"}}>
                              <h3>No.of CorrectAnswers : {Number(correctAnswers) < 0 ? 0 : correctAnswers}</h3>
                              <h3>No.of WrongAnswers : {wrongAnswers}</h3>
                              <h3>Total Score : {Number(correctAnswers) < 0 ? 0 : correctAnswers}</h3>
                           </div>}
                         </div>
                         
                    </div>
                }


                
            }
            else{
                render_method=()=>{
                    return <div></div>

                }
            }
            return (
                {render_method}
            );

            
            
          */
       
    }



}

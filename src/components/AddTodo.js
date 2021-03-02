import React, { Component } from 'react'
import PropTypes from 'prop-types';


 class AddTodo extends Component {
    constructor(){
        super();

    this.state = {
        tittle: ''
    };
}
     
        onSubmit = (e) =>{
            e.preventDefault();
            this.props.addTodo(this.state.tittle);
            this.setState({tittle:''})
        }
        onChange =(e) => this.setState({tittle: e.target.value});

    
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                 type="text"
                  name="title"
                   placeholder="Add Todo..."
                   style={{flex: '10', padding: '5px'}}
                   value={this.state.tittle}
                   onChange={this.onChange}
                   />
                   <input
                   type="submit"
                   value="submit"
                   className="btn"
                   style={{flex:' 1'}}
                   />
            </form>
        )
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }
export default AddTodo;

import React from 'react'
import './login.css'

class AddItem extends React.Component {

   
    constructor(props) {
        super(props)
        this.state= {
        id:'',
        category:'',
        name: '',
        expiryTime: '',
        priority:''}

    }

    handleOnChange =(event)=>{
        const {target : { name = '', value=''}}= event;
        this.setState({
            [name]:value
        })

    }

    handleSubmit = ()=>{
        const item= this.state;
        let currenctList = JSON.parse(localStorage.getItem('list'))
        currenctList=[...currenctList, item]
        localStorage.setItem('list',JSON.stringify(currenctList))
        


    }

    render(){
        const { id,category, name, expiryTime, priority} = this.state;
        return(
            <div class="container border border-primary mt-3">
            <form class="form-signin">
              <h2 class="form-signin-heading">Add Food Item</h2>
              <label for="inputEmail" class="sr-only">Id</label>
              <input type="text" id="inputEmail" class="form-control" 
                name='id' onChange={this.handleOnChange} value={id}
               placeholder="Id" required autofocus/>
              <label for="inputPassword" class="sr-only">Category</label>
              <input type="text" id="inputPassword" class="form-control" name='category'
              onChange={this.handleOnChange} value={category}
               placeholder="Category" required/>
               <label for="inputPassword" class="sr-only">Name</label>
              <input type="text" id="inputPassword" class="form-control" name='name'
              onChange={this.handleOnChange} value={name}
               placeholder="Name" required/>
               <label for="inputPassword" class="sr-only">Expiry time</label>
              <input type="text" id="inputPassword" class="form-control" name='expiryTime'
              onChange={this.handleOnChange} value={expiryTime}
               placeholder="Expiry time" required/>
               <label for="inputPassword" class="sr-only">Priority</label>
              <input type="text" id="inputPassword" class="form-control" name='priority'
              onChange={this.handleOnChange} value={priority}
               placeholder="Priority" required/>
              <button class="btn btn-lg btn-primary btn-block" type="submit"
              onClick={this.handleSubmit}
              >Add</button>
            </form>
      
          </div> 
        )
    }
}

export default AddItem
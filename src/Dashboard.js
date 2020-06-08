import React from 'react'
import './dashboard.css'
import AddItem from './AddItem'
import spinach from './spinach.JPG'
import carrot from './carrot.JPG'
import fruits from './fruits.JPG'
import chilli from './chilli.JPG'

class Dashboard extends React.Component {

    componentDidMount(){
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

    renderList = ()=>{
        const list = JSON.parse(localStorage.getItem('list'));
        return list.map( item =>{
            return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.category}</td>
                  <td>{item.name}</td>
                  <td>{item.expiryTime}</td>
                  <td>{item.priority}</td>
                </tr>
            )
        })
    }

    render(){
        return(
        <div class='container border border-primary' >
            <div class='row'>
    <div class="col-md-8">
      <div class="row">
        
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Dashboard</h1>

          <div class="row placeholders">
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src={spinach} 
              width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Vegetable</h4>
              <span class="text-muted">green leaves</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src={fruits} 
              width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Fruits</h4>
              <span class="text-muted">sweet fruits</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src={carrot}
               width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Processed foods</h4>
              <span class="text-muted">packed foods</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src={chilli} 
              width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Chineese</h4>
              <span class="text-muted">Something Chineese</span>
            </div>
          </div>

          <h2 class="sub-header">Items available</h2>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Expiry Time</th>
                  <th>Priory</th>
                </tr>
              </thead>
              <tbody>
                {this.renderList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class='col-md-4'>
        <AddItem/>
    </div>
    </div>
    </div>
        )
    }
}

export default Dashboard

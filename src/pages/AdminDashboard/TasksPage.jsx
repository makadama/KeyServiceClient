import React, {Component} from 'react';
import { connect } from "react-redux";
import {fetchTasks, deleteTask} from '../../actions/taskActions';
import ReactPaginate from 'react-paginate';

class TasksPage extends Component{
	constructor(props){
		super(props)
		this.state={
			nb_task: 0, 
		    nb_line: 0,
		    currentPage: 1,
		    taskPerPage: 10
		}
	}

	componentDidMount(){
		this.props.fetchTasks();
	}

	renderNumberOfTask(){
    	this.state.nb_task = this.props.task.tasks.length;
    	return this.state.nb_task;
    }

    paginate(pageNumber){
  	this.setState({
  		currentPage: pageNumber
  	},() => {
        this.props.fetchTasks();
      });
  }


	render(){
		const {tasks} = this.props.task;
		console.log(tasks);
		const indexOfLastTask = this.state.currentPage * this.state.taskPerPage;
		const indexOfFirstTask = indexOfLastTask - this.state.taskPerPage;
		const currentTask = tasks.slice(indexOfFirstTask, indexOfLastTask);

		const renderTasks =currentTask.map(task => {
      this.state.nb_line= this.props.task.tasks.indexOf(task)+1;
      return ( <tr key={task.id}>
              <td> {this.state.nb_line} </td>
              <td> {task.id} </td>
              <td> {task.libelle} </td>
              <td> {new Date(task.date_tache).toLocaleDateString()} </td>
              <td> {task.heure_tache} </td>
              <td> {task.adresse} </td>
              <td> <a href={`/taches/tache/${task.id}`} className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });

		return(
			<div style={{marginTop:'4em'}}>
				
				<div className="bg-light p-3">
				    <div className="row  d-flex justify-content-start">
				       <div className="col-md-4">
				         <a href={`/tache/ajouter-une-tache`} className="btn btn-success d-block font-weight-bold rounded-0">
				          <i className="fas fa-plus"></i> &nbsp;Ajouter une tâche</a>
				       </div>   
				  </div>
 				</div> 

 				<div className="container-fluid">
				    <div className="row"> 
				      <div className="col-md-4 mt-4">
				          <div className="card">
				            <div className="text-white p-4" style={{backgroundColor:'#00cccb'}}>
				              <i className="fas fa-home fa-6x"></i>
				              <h2 className="float-right font-weight-bold" style={{fontSize: '50px', textAlign: 'center'}}>{this.renderNumberOfTask()}<span className="d-block">Tâche(s)</span></h2>
				            </div>
				            
				          </div>
				          <div className="card mt-5">
				            <div className=" text-white p-4 " style={{backgroundColor:'#ed7e24'}}>
				              <i className="fas fa-list-ul fa-6x"></i>
				              <h2 className="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}>04 <span className="d-block">Categories</span></h2>
				            </div>
				            
				          </div>
				          
				      </div> 
				      <div className="col-8 ">
				        <h2 style={{backgroundColor: '#ed7e24'}} className="text-white p-2 ">Les tâches</h2>
				        <div className="container d-flex justify-content-center">
				        
				        <table className="table mt-3">
				          <thead className="table-dark">
				            <tr>
				              <th>#</th>
				              <th>id</th>
				              <th>libelle</th>
				              <th>date</th>
				              <th>heure</th>
				              <th>adresse</th>
				              <th>Action</th>
				            </tr>
				          </thead>
				          <tbody>
				           {renderTasks}
				          </tbody>
				        </table>
				      </div>
				    </div>
				      
				    </div>
				</div>
				
				{tasks.length > this.state.taskPerPage ? <ReactPaginate pageCount={Math.ceil(tasks.length/this.state.taskPerPage)} pageRangeDisplayed={2}  marginPagesDisplayed={2} onPageChange={(data) =>this.paginate(data.selected+1)} containerClassName={"pagination"} previousLabel={"précédent"} nextLabel={"suivant"}/> : ''}
			</div>
			)
	}
}
const mapStateToProps = state =>({
	auth: state.auth,
	task: state.task
})
export default connect(mapStateToProps, {fetchTasks}) (TasksPage); 
import React, {Component} from 'react';
import { connect } from "react-redux";
import { getTaskDetails, deleteTask } from "../../actions/taskActions";
import { withRouter } from 'react-router-dom';



class TaskDetailsPage extends Component{
	componentDidMount(){
		this.props.getTaskDetails(this.props.match.params.id)
	}

	onDelete(val, e){
		e.preventDefault();
		this.props.deleteTask(val, this.props.history)
		 
	}

	
	renderVilleName(ville){
     if(ville===1){
          return "Paris et île de France"
      }
      else if(ville===2){
          return "Lyon"
      }
      else if(ville===3){
          return "Bordeau"
      }
      else if(ville===4){
          return "Marseille"
      }
  }

	render(){
		const {task} = this.props.task;
		console.log(task);
		const mutableTask = Date.now()<=(new Date(task.date_tache)) ? (
			 <>
			 	<a href={`/taches/tache/${task.id}/modification`} className="btn btn-primary">Modifier</a>
                <button className="btn btn-danger ml-2"  onClick={this.onDelete.bind(this,task.id)}>Supprimer</button>           
			</>
			): (<button className="btn btn-danger ml-2"  onClick={this.onDelete.bind(this,task.id)}>Supprimer</button> );


		return(
			<div style={{marginTop:'5em'}}> 
					<div className="container">
<div className="row d-flex justify-content-center" >
        <div className="col-lg-8">
           <div className="card z-depth-3">
            <div className="card-body">
            
            <div className="tab-content p-3">
                <div className="tab-pane active show" id="profile">
                    <h5 className="mb-3">Détails de la tâche</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Date:</h6>
                            <p>
                                {task.date_tache}
                            </p>
                            
                            <h6>Heure:</h6>
                            <p>
                                {new Date(task.date_tache).toLocaleDateString()}
                            </p>
                            <h6>Motif:</h6>
                            <p>
                                {task.libelle}
                            </p>
                            
                           
                            
                        </div>
                        <div className="col-md-6">
                             <h6>Adresse:</h6>
                            <p>
                                {task.adresse}
                            </p>
                             <h6>Complement:</h6>
                            <p>
                                {task.Complement}
                            </p>
                            <h6>Code postal:</h6>
                            <p>
                                {task.code_postal}
                            </p>
                            <h6>Ville:</h6>
                            <p>
                                {this.renderVilleName(task.fk_ville)}
                            </p>
                             
                        </div>
                        <div className="col-md-12 mt-5">
                        	{mutableTask}
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
      </div>
      </div>
        
    </div>
</div>
			</div>
			)
	}
}
const mapStateToProps = state =>({
	auth: state.auth,
	task: state.task
})

export default connect(mapStateToProps, {getTaskDetails, deleteTask})(withRouter(TaskDetailsPage));
import React, {Component} from 'react';
import { connect } from "react-redux";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { addMonths, addWeeks } from 'date-fns';
import classnames from "classnames";
import { getOnlyTask, updateTask } from "../../actions/taskActions";

class UpdateTasksPage extends Component{
	constructor(props){
		super(props)
		this.state={
			libelle: '',
			date_tache: Date.now(),
			heure_tache: '',
			fk_logement: '',
			errors: {},
			success: false
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeTime = this.handleChangeTime.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.onChange=this.onChange.bind(this);

	}

  componentDidMount(){
		this.props.getOnlyTask(this.props.match.params.id)
	}




  onChange (e){
    	this.setState({[e.target.name]:e.target.value})
  }

  componentWillReceiveProps(nextProps) {
		    if (nextProps.errors) {
		      this.setState({
		        errors: nextProps.errors
		      });
		    }  	
		     this.setState({
		     	libelle: nextProps.task.task.libelle,
				fk_logement: nextProps.task.task.fk_logement,
      			success:  nextProps.success
    });
		    
  }

	handleChange(dateName, dateValue) {
	    let { date_tache} = this.state;
	    if (dateName === 'date_tache') {
      date_tache = dateValue;
    }
	    this.setState({
	     date_tache
	    });
  	}


  	handleChangeTime(date) {
    this.setState({
      heure_tache: date
    });
  };

	handleSubmit(e) {
	    e.preventDefault();
	    const taskData ={
	    	libelle: this.state.libelle,
	    	date_tache:  this.state.date_tache,
	    	heure_tache: this.state.heure_tache,
	    	fk_logement: this.state.fk_logement

	    }

	    this.props.updateTask(this.props.match.params.id, taskData)
	    
	  }

	render(){
		const {errors} = this.state;
		const {success} = this.state;
		const {task} = this.props.task;
		console.log(task)
		return(
			<div style={{marginTop:'4em'}}>
				<div className="container" data-test="availabilityComponent">
        		<div className="row">
        			<p className="text-center col-lg-12 col-md-12 col-xs-12">
                        {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                           <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                         </span>:''}
                       </p>
                       <p className="text-center col-lg-12 col-md-12 col-xs-12">
                    		{success ? <span className="alert alert-success alert-dismissible fade show" style={{width:'auto'}}> bien ajouté avec succès!
                             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
               			</p>
          			<div className="col-md-6 mt-5 mx-auto">

                      <form noValidate onSubmit={this.handleSubmit}>
                      	<h1 className="h3 mb-3 font-weight-normal">Modifier une tâche</h1>

                            <div className="form-group">
                              <label htmlFor="libelle">Tâche*</label>
                              <select className={classnames("form-control",{
                                invalid: errors.libelle
                                })}
                                value={this.state.libelle}
                                onChange={this.onChange}  to="libelle" name="libelle">
                              <option value=""></option>
                                <option value="menage">ménage</option>
                                <option value="etat des lieux"> état des lieux</option>
                              </select>
                               <span className="red-text" style={{color:'red'}}>
                                {errors.libelle}  
                            </span>
                            </div>
                            
                          <div className="row">
                            <div className="col-md-6 col col-xs-12">
                                <div className="form-group">
                                    <label>Date* </label>
                                    <DatePicker
                                      className="form-control"
                                      selected={ this.state.date_tache }
                                      onChange={ date=>this.handleChange('date_tache', date) }
                                      name="date_tache"
                                      dateFormat="dd-MM-yyyy"
                                      value={this.state.date_tache}
                                      minDate=""
                                      maxDate={addWeeks(new Date(), 1)}
                                      border-color="Red"
                                      
                                    />
                                  </div>
                            </div>
                            <div className="col-md-6 col col-xs-12">
                                  <div className="form-group">
                                    <label>Heure* </label>
									<DatePicker
                                      className={classnames("form-control",{
	                                  invalid: errors.heure_tache
	                                     })}
                                      selected={this.state.heure_tache}
                                      onChange={ date=>this.handleChangeTime(date)}
                                      name="heure_tache"
                                      showTimeSelect
    								  showTimeSelectOnly
    								  timeIntervals={30}
     								  timeCaption="Horaire"
     								  dateFormat="HH:mm"
     								  timeFormat="HH:mm"
     								  value={this.state.heure_tache}
   								     minDate={new Date("10:30")}
										maxDate={new Date("19:30")}
     								/>
                            </div>
                          </div>
                          </div>
                           <button   type="submit"  className="btn btn-lg btn-primary btn-block">Modifier</button>
                                
                      </form>
                  </div>
            </div>
          </div> 
			</div>
			)
	}
}const mapStateToProps = state => ({
	auth: state.auth,
	task: state.task,
	errors: state.errors,
	success: state.success
})
export default connect(mapStateToProps, { getOnlyTask, updateTask })(UpdateTasksPage);
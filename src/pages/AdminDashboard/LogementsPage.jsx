import React , {Component} from 'react';
import { connect } from 'react-redux';
import { getLogements } from "../../actions/logementActions";
import LogementsPagination from '../../component/Paginations/LogementsPagination';
import ReactPaginate from 'react-paginate';
import './logementsPageStyle.css';



class LogementsPage extends Component{
	constructor(){
    super()
    this.state={
      val:"",
      nb_bien: 0, 
      nb_line: 0,
      loading: false,
      currentPage: 1,
      logementPerPage: 10
     
    } 
    }
	componentDidMount(){
			this.props.getLogements();	
	}

	renderNumberOfBien(){
    	this.state.nb_bien = this.props.logement.logements.length;
    	return this.state.nb_bien;
    }

   

    /*renderLogements(){
    return this.props.logement.logements.map(logement => {

      if(logement.fk_ville===1){
          this.state.val="Paris et île de France"
      }
      else if(logement.fk_ville===2){
          this.state.val="Lyon"
      }
      else if(logement.fk_ville===3){
          this.state.val="Bordeau"
      }
      else if(logement.fk_ville===4){
          this.state.val="Marseille"
      }
     this.state.nb_line= this.props.logement.logements.indexOf(logement)+1;
      return ( <tr key={logement.id}>
              <td> {this.state.nb_line} </td>
              <td> {logement.type} </td>
              <td> {logement.adresse} </td>
              <td> {logement.code_postal} </td>
              <td> {this.state.val} </td>
              <td> <a href={`/logements/logement/${logement.id}`} className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });
  }*/
  
  paginate(pageNumber){
  	this.setState({
  		currentPage: pageNumber
  	},() => {
        this.props.getLogements();
      });
  }



	render(){

		const {user} = this.props.auth;
		const { logements } = this.props.logement;
		const { logement } = this.props.logement;
		const indexOfLastLogement = this.state.currentPage * this.state.logementPerPage;
		const indexOfFirstLogement = indexOfLastLogement - this.state.logementPerPage;
		const currentLogement = logements.slice(indexOfFirstLogement, indexOfLastLogement);
		console.log(currentLogement);
		const renderLogements =currentLogement.map(logement => {

			      if(logement.fk_ville===1){
			          this.state.val="Paris et île de France"
			      }
			      else if(logement.fk_ville===2){
			          this.state.val="Lyon"
			      }
			      else if(logement.fk_ville===3){
			          this.state.val="Bordeau"
			      }
			      else if(logement.fk_ville===4){
			          this.state.val="Marseille"
			      }
			     this.state.nb_line= this.props.logement.logements.indexOf(logement)+1;
			      return ( <tr key={logement.id}>
			      		  <td> {this.state.nb_line} </td>
			              <td> {logement.id} </td>
			              <td> {logement.type} </td>
			              <td> {logement.adresse} </td>
			              <td> {logement.code_postal} </td>
			              <td> {this.state.val} </td>
			              <td> <a href={`/logements/logement/${logement.id}`} className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
			              
			            </tr>

			        );
    	});
		
		return(
			<div style={{marginTop:'4em'}}>
				
				<div className="bg-light p-3">
				    <div className="row  d-flex justify-content-start">
				       <div className="col-md-4">
				         <a href={`/logements/ajouter-un-bien`} className="btn btn-success d-block font-weight-bold rounded-0">
				          <i className="fas fa-plus"></i> &nbsp;Ajouter un bien</a>
				       </div>   
				  </div>
 				</div> 

 				<div className="container-fluid">
				    <div className="row"> 
				      <div className="col-md-4 mt-4">
				          <div className="card">
				            <div className="text-white p-4" style={{backgroundColor:'#00cccb'}}>
				              <i className="fas fa-home fa-6x"></i>
				              <h2 className="float-right font-weight-bold" style={{fontSize: '50px', textAlign: 'center'}}>{this.renderNumberOfBien()}<span className="d-block">biens</span></h2>
				            </div>
				            
				          </div>
				          <div className="card mt-5">
				            <div className=" text-white p-4 " style={{backgroundColor:'#ed7e24'}}>
	                      <i className="fas fa-list-ul fa-6x"></i>
	                      <h2 className="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}>xx <span className="d-block">xxxxxxxxxx</span></h2>
	                    </div>
				            
				          </div>
				          
				      </div> 
				      <div className="col-8 ">
				        <h2 style={{backgroundColor: '#ed7e24'}} className="text-white p-2 ">Mes biens</h2>
				        <div className="container d-flex justify-content-center">
				        
				        <table className="table mt-3">
				          <thead className="table-dark">
				            <tr>
				              <th>#</th>
				              <th>id</th>
				              <th>Type</th>
				              <th>Adresse</th>
				              <th>Code Postal</th>
				              <th>Ville</th>
				              <th>Action</th>
				            </tr>
				          </thead>
				          <tbody>
				           {renderLogements}
				          </tbody>
				        </table>
				      </div>
				    </div>
				      
				    </div>
				</div>
				
				{logements.length > this.state.logementPerPage ? <ReactPaginate pageCount={Math.ceil(logements.length/this.state.logementPerPage)} pageRangeDisplayed={2}  marginPagesDisplayed={2} onPageChange={(data) =>this.paginate(data.selected+1)} containerClassName={"pagination"} previousLabel={"précédent"} nextLabel={"suivant"}/> : ''}
				</div>
			)
	}
}
const mapStateToProps = state => ({
  logement: state.logement,
  auth: state.auth
});
export default connect(mapStateToProps, { getLogements })(LogementsPage);
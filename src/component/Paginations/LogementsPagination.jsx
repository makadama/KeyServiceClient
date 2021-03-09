import React from 'react';

const LogementsPagination = ({logementPerPage, totalLogement, paginate}) =>{
	const pageNumbers = [];
	for(let i=1; i<=Math.ceil(totalLogement/logementPerPage); i++){
		pageNumbers.push(i)
}
return(
	
		<nav style={{position:'relative'}}>
			<ul className="pagination" style={{justifyContent:'center'}}>
				{pageNumbers.map(number=>(
					<li key={number} className="page-item">
						<a onClick={()=>paginate(number)} href="#" className="page-link">
							{number}
						</a>
					</li>
					))}
			</ul>
		</nav>
	)
}
export default LogementsPagination;
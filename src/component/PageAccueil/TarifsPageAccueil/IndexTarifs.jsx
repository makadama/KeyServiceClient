import React, { Component } from 'react'
import styled from  'styled-components';


const Styles = styled.div`
.work {
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #F4F6F6;
  

}

.work-title {
    margin-top: 0;
    font-size: 60px; 
    text-align: center;
}

.span {
    font-weight: normal;
}

.part {
    margin-top: 20px;
    float: left;
    height: auto;
    padding: 100px 0;
    padding-left: auto;
    
    
    text-align: center;
    width: 100%;
     &:hover{
    color: #eb5424;
  }
   
   
}

.comp1{
     background:  #0097A7 ;
}

.comp2{
     background:  #5B2C6F ;
}

.apartir{
    font-size: 20px;
}

.vingt{
    font-size: 50px;
}

.tva{
     font-size: 20px;
}
}


.icon {
    color: #888;
    margin-bottom: 20px
}

.part-title {
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
}

.line {
    width: 60%;
    margin: auto;
    margin-bottom: 20px
}

.part-desc {
    font-size: 14px;
    color: #888;
    padding: 20px
}



`
class IndexTarifs extends Component {
  render() {
    return (
        <Styles>
          <div className="work">
            <div className="container-fluid bo">
                <h2 className="work-title"><span>Nos</span> Offres</h2>
                <hr className="line"/>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 comp1 ">
                            <div className="part first">
                                <div>
                                    <p className="apartir"> A partir de </p>
                                    <p className="vingt"> 10 % </p>
                                    <p className="tva"> + TVA </p>

                                </div>
                                <p className="part-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className=" col-xs-12 col-sm-6 col-md-6 comp2 ">
                            <div className="part ">
                                <div>
                                    <p className="apartir"> A partir de  </p>
                                    <p className="vingt"> 20 % </p>
                                    <p className="tva"> + TVA </p>

                                </div>
                                <p className="part-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>

                       
                </div>
                
            </div>
        </div>
       </Styles>    );
  }
}

export default IndexTarifs;
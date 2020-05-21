import React, { Component } from 'react'
import styled from  'styled-components';


const Styles = styled.div`
.work {
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff;
  

}

.work-title {
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
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
     &:hover{
    color: #eb5424;
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


class IndexServices extends Component {
  render() {
    return (
    	<Styles>
          <div className="work">
            <div className="container-fluid bo">
                <h2 className="work-title"><span>Nos</span> Services</h2>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3  ">
                            <div className="part first">
                                <i className="icon fa fa-bolt fa-2x"></i>
                                <h4 className="part-title">Service 1 </h4>
                                <hr className="line"/>
                                <p className="part-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className=" col-xs-12 col-sm-6 col-md-3  ">
                            <div className="part ">
                                <i className="icon fa fa-bolt fa-2x "></i>
                                <h4 className="part-title">Service 2</h4>
                                <hr className="line"/>
                                <p className="part-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>

                        <div className=" col-xs-12 col-sm-6 col-md-3  ">
                            <div className="part ">
                                <i className="icon fa fa-bolt fa-2x "></i>
                                <h4 className="part-title">Service 3</h4>
                                <hr className="line"/>
                                <p className="part-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>

                        <div className=" col-xs-12 col-sm-6 col-md-3   ">
                            <div className="part ">
                                <i className="icon fa fa-bolt fa-2x "></i>
                                <h4 className="part-title">Service 4</h4>
                                <hr className="line"/>
                                <p className="part-desc">
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

export default IndexServices;
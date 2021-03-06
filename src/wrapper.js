/**
 * Copyright (c) 2020 Intelligent Software Research Center of ISCAS
 * Summer 2020 Homepage is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */
import React from 'react';
// 同级找不到，会从npm包里找react
import Header from './components/header';
import Footer from './components/footer';
import { connect } from 'react-redux';

class Wrapper extends React.Component{
    constructor(props){
        super(props)
        this.timer = null
       
     }
    
    componentDidMount(){
        !this.timer && this.getStunum()
        this.timer = setInterval(()=>{
            this.getStunum()
        },1000*60*60*6)
    }

    getStunum(){
        fetch('https://portal.summer-ospp.ac.cn/programAndStudentNum?activityId=1&pageSize=1000',{
            method:'GET'
        }).then(res=>res.json()).then(rsp=>{
            rsp.status == 0 && this.props.setStuData(rsp.data)
        })
        .catch(err => console.log(err))
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    
    render(){
        return (
           <div className={["container",this.props.chiFlag].join(" ")}>
               <div className="wrapper">
                   <Header />
                   <div className="content">
                        {this.props.children}    
                   </div>
                  <Footer/>
               </div>
           </div> 
        )
    }
}

const mapStateToProps = (state)=>{
     return state
}

const mapDispatchToProps = dispatch => {
    return {
        setStuData:(data)=>{
            dispatch({
                type:'setStuData',
                payload:data
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Wrapper)
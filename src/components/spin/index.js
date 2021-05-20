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

 import React from 'react'
 import { Spin, Space } from 'antd';
 import "./index.less"
 class SpinLoading extends React.Component{
    
 

     render(){
        
         return(         
            <Space size="large">
                <Spin size="large" />
            </Space>
          )
        
         
         
     }
 }
 

  
  export default SpinLoading
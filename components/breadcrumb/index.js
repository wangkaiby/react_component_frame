import React from 'react';
import { Breadcrumb } from 'antd';
import hoistStatics from "hoist-non-react-statics";

function targetComponent(props) { 
    let { className='' } = props
    return <Breadcrumb 
                {...props} className = {className}
                                         
            />     
}
export default hoistStatics(targetComponent, Breadcrumb);
//export default targetComponent

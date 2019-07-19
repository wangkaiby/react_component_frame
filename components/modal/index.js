import React from 'react';
import { Modal ,Button } from 'antd';
import hoistStatics from "hoist-non-react-statics";


function targetComponent(props) { 
    let { wrapClassName='', size='normal',} = props
    return <Modal 
                {...props} 
                wrapClassName = {`coral-${size} ${wrapClassName}  `}                     
            />     
}
 export default hoistStatics(targetComponent, Modal);


import { Spin } from 'antd';

export default (props) => {
    const { className = '' } = props
    return <Spin {...props }
    className = { `coral-pagination ${className}` }
    />

}
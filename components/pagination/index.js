import { Pagination } from 'antd';
export default (props) => 
    {   
        const { className='', showItems } = props
        const obj = {...props}
        obj.showItems && (obj.showTotal = total => `共 ${total} 条`); 
        return <Pagination {...obj} className = {`coral-pagination ${className}`}    />
    }
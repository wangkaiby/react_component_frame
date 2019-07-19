import  { Table } from 'antd'

 export  default function TableEx(props) {
	const property = {...props};
	const size = {
		small	:	'coral-table-small',
		middle	:	'coral-table-middle',
		large	:	'coral-table-large',
	}
	const striped = {
		odd 	:	'odd',
		even	:	'even'
	}
	// 尺寸类型
	const sizeStyle = size[property.size || 'middle'] ;
	
	const noBorder  = property.noBorder ? 'no-border' : '';
	// 网格支持
	const gridStyle = striped[property.striped || 'even'] ;
	
	property.className = `coral-table  ${sizeStyle}  ${noBorder} ${gridStyle} ${props.className || "" }`;
    return <Table   {...property} />  
}

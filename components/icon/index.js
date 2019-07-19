import { Icon as I } from 'antd'


export  default function Icon(props){
	let {className='', width=16, height=16, family, type} = props;
	if(family){
		return <i className={`coral-icon ${className} ${type} ${family}`} style={{width, height}}/>
	}
	return <I {...props} className={`coral-icon ${className}`} />
}
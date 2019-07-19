import {Alert as Tip,Checkbox} from 'antd'

export default function Alert(props) {
	const {className='',type,message,remind} = props;
	const  tipsDic = {
		success	:	<Tip {...props} className={`coral-alert ${className}`}/>,
		info	:	<Tip {...props} className={`coral-alert ${className}`}/>,
		warning	:	<Tip {...props} className={`coral-alert ${className}`}/>,
		error	:	<Tip {...props} className={`coral-alert ${className}`}/>,
		guide	:	<Tip {...props} message={extendMessage(message,remind)} showIcon={false} className={`coral-alert guide ${className} `}/>
	}
	const node = tipsDic[type]
	return node
}
function extendMessage(message,remind){
	// TO_DO 换成bimicon
	const icon = <i className='longicon long-xiaoxi font-6 pull-left mr-2'></i>;
	return <span>
			{icon}
			<span>{message}</span>
			<span className='pull-right mr-5'>{remind}</span>
		</span>
}


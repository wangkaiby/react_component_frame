
export default function(props){
	const {title,className=''} = props;
	return <div className={` label-item ${className}`}>
		{
			title ? 
			<div className='title'>{title}</div>
			:
			null
		}
		<div className={'item'}>{props.children}</div>
	</div>
}

import { Alert ,Checkbox}  from 'coral-components'

export const title = 'alert';
const remind = <span><Checkbox  >已知，不再展现</Checkbox></span>;
export const contents  = [
	{
		content: <Alert message={"message"} type="guide"  remind={remind}/>,
		code: `<Alert message={tips} type="guide" onClose={this.closeTips.bind(this)} remind={remind}/>`
	},
];



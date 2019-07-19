
import { Spin }  from 'coral-components'

export const title = 'spin';
export const description = <p className={'inline-block'}>加载中---<span className={'warn'}>使用方法参考antd-design的api</span></p>;

export const contents  = [
	{
		content: <Spin tip= 'loding...' size= 'large' />,
		code: ` <Spin tip= 'loding...' size= 'large'/>`
	},
	
];




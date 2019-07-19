import { Button }  from 'coral-components'

export const title = 'buttons';
export const description = '以下为本应用在antd基础上新增，用法与其一致，其余按钮采用均antd默认的';


export const contents  = [
	{
		content: <Button type={'success'}>成功</Button>,
		code: `<Button type={'success'}>成功</Button>`
	},
	{
		content: <Button type={'caution'}>警告</Button>,
		code: `<Button type={'caution'}>警告</Button>`
	},
	{
		content: <Button type="primary" icon="download" size={'large'}><span>Download</span></Button>,
		code: `<Button type="primary" icon="download" size={'large'}>Download</Button>`
	},
	{
		content: <Button type="primary" icon="long-shenkaichuangkou" size={'large'} family={'longicon'}><span>你好</span></Button>,
		code: `<Button type="primary" icon="long-shenkaichuangkou" size={'large'} family={'longicon'}><span>Download</span></Button>`
	},
	{
		content: <Button type={'text'} onClick={()=>{alert(1)}}>可操作文字</Button>,
		code: `<Button type={'text'} onClick={()=>{alert(1)}}>可操作文字</Button>`
	},
	{
		content: <Button type={'text'} disabled onClick={()=>{alert(1)}}>可操作文字(禁用状态)</Button>,
		code: `<Button type={'text'} disabled onClick={()=>{alert(1)}}>可操作文字(禁用状态)</Button>`
	},
];



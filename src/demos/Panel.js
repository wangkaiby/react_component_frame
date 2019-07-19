import { Panel }  from 'coral-components'

export const title = 'panels';
export const description = <p className={'inline-block'}>面板---<span className={'warn'}>用以外层包裹，设置常用的margin， padding, border， 设置的是级别</span></p>;


export const contents  = [
	{
		content: <Panel margin={'0 2 3 4'} padding={'3 4 5 6'} border >面板--->使用字符串设置属性，遵循上右下左的实现，设置的值为level,共4档，基数为8</Panel>,
		code: `<Panel margin={'0 2 3 4'} padding={'3 4 5 6'} border >面板</Panel>`
	},
	{
		content: <Panel margin={{mt:2, mb:3}} padding={{pl:2, pr:2, pt:2, pb:2}} border >面板---->使用对象设置属性，设置的值为level,共4档，基数为8</Panel>,
		code: `<Panel margin={{mt:2, mb:3}} padding={{pl:2, pr:2, pt:2, pb:2}} border >面板</Panel>`
	},
	{
		content: <Panel margin={[1,2]} padding={[3,4,5,6]} border >面板---->使用数组设置属性，遵循上右下左的实现，设置的值为level,共4档，基数为8</Panel>,
		code: `<Panel margin=[1,2,3,4]} padding=[3,4,5,6] border >面板</Panel>`
	},
	{
		content: <Panel mt={2} pt={3} mb={2} pb={2} border >面板---->使用单个属性设置样式，设置的值为level,共4档，基数为8</Panel>,
		code: `<Panel mt={2} pt={3} mb={2} pb={2} border >面板</Panel>`
	},
	{
		content: <Panel horizontal={{margin:4, padding:2}} vitical={{margin:4, padding:2}} border  >面板---->使用horizontal（水平）、vitical（竖直）设置样式，设置的值为level,共4档，基数为8</Panel>,
		code: `<Panel horizontal={{margin:4, padding:2}} vitical={{margin:4, padding:2}} border >面板</Panel>`
	},
];



import { Collapse  } from 'coral-components' 
import * as _ from 'loadsh'
import styles from './bases.css';
import demos from '../demos'
import Codemirror from '../utils/codemirror'

const Panel = Collapse.Panel;
const reverse = _.reverse(demos);
const content = ()=>{
	let node = [];
	// console.log(demos)
	for(const item of reverse){
		const contents = item.contents;
		if(!Array.isArray(contents)) continue;
		const panel = contents.map((con, idx)=>{
				return (
					<div key={idx}>
						<div className={'mt-1 mb-1'}>{con.content}</div>
						<Codemirror value={con.code} />
					</div>
				);
			});
		node.push(
			<Collapse accordion className={'mt-2'} defaultActiveKey={item.title} key={`${item.title}`} >
				<Panel 
					header={<div><span>{item.title}</span>({item.description})</div>} 
					key={`${item.title}`} 
					id={`${item.title}`}
				>
					{panel}
				</Panel>
			</Collapse>
		);
	}
	return node
};
export default function() {
  return (
    <div className={styles.normal}>
		{content()}
    </div>
  );
}

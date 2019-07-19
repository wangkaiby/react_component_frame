import Code from '@uiw/react-codemirror';  
import 'codemirror/lib/codemirror.css'; 
import 'codemirror/keymap/sublime';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/theme/ambiance.css';
import'codemirror/mode/javascript/javascript';
import 'codemirror/theme/monokai.css';


const options = {
	theme: 'monokai',
    tabSize: 2,
    keyMap: 'sublime',
	mode: 'jsx',
	smartIndent : true, 
	styleActiveLine: true,
	lineNumbers:true,
	lint:true,
	autoFocus:true 
};
export default function CodeMirror (props){
	return (
		<Code {...props} value={props.value} options={options}/>
	);
}


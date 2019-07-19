export default {
	namespace: 'global',
	state: {},
	reducers: {
		'resize'(state) {
			const winHeight = document.body.offsetHeight;
			return {...state, winHeight};
		},
	},
};
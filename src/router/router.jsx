import App from '../App';
import pages from '../Pages';
import { createBrowserRouter } from 'react-router-dom';

const routes = Object.keys(pages).map(page => {
	const Component = pages[page];
	const path = page.toLowerCase().replace(/page/, '');
	return {
		path: `/${path !== 'home' ? path : ''}`,
		element: <Component />,
	};
});

export default createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: routes,
	},
]);
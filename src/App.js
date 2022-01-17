import React, {Suspense} from 'react';
import Article from './Components/Article';

function App() {
	return (
		<Suspense fallback={<h3>Loading...</h3>}>
			<Article/>
		</Suspense>
	);
}

export default App;

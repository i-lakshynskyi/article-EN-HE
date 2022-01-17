import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import './article.scss';
import axios from 'axios';

function Article() {
	const [currList, setCurrList] = React.useState('');
	const cl = ['USD','EUR','UAH','RUB'];

	React.useEffect(async () => {
		await axios.get('https://v6.exchangerate-api.com/v6/fb267a01a39c56bf7667b3a0/latest/ILS')
			.then(res => Object.entries(res.data.conversion_rates))
			.then(arr => {
				return arr.filter(el => cl.includes(el[0]));
			})
			.then(data => JSON.stringify(Object.fromEntries(data)))
			.then(str => setCurrList(str.slice(1,-1).replace(/,/g, ' , ')))
			.catch((e) => {
				console.log(e);
			});
	}, []);



	return (
		<div className='wrapper'>
			<Header/>
			<Content currencyList={currList && currList}/>
		</div>
	);
}

export default Article;
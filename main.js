import axios from 'axios';

const body = document.getElementsByClassName('body')
console.log(body);

const fetchQuotes = async () => {
	const config = {
		headers: {
			'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
			'x-rapidapi-key': API_KEY
		}
	};
	const res = await axios.get(
		`https://famous-quotes4.p.rapidapi.com/random`,
		config
	);
	return res.data;
};
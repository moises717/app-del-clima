const axios = require("axios");

const getClima = async (lat, lng) => {
	const res = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=47677f8594c3a17aa4dee3cf329d6ef1&units=metric`
	);

	return res.data.main.temp;
};

module.exports = {
	getClima,
};

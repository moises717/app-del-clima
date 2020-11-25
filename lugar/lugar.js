const axios = require("axios");

const getLugar = async (dir) => {
	const encodeUrl = encodeURI(dir);

	const instance = axios.create({
		baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=47677f8594c3a17aa4dee3cf329d6ef1`,
	});

	const res = await instance.get();

	if (res.data.length === 0) {
		throw new Error("No hay resultados" + dir);
	}

	const data = res.data;
	const direccion = data.name;
	const lat = data.coord.lat;
	const lng = data.coord.lon;

	return {
		direccion,
		lat,
		lng,
	};
};

module.exports = {
	getLugar,
};

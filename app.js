const { getLugar } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");
const clima = require("./clima/clima");

const argv = require("yargs").options({
	direccion: {
		alias: "d",
		desc: "direccion de la ciudad para obtener el clima",
		demand: true,
	},
}).argv;

const getInfo = async (dirrecion) => {
	try {
		const coords = await getLugar(argv.direccion);
		const temp = await getClima(coords.lat, coords.lng);
		return `El clima de ${coords.direccion} es de ${temp}.`;
	} catch (error) {
		return `No se pudo determinar el clima de ${dirrecion}`;
	}
};

getInfo(argv.dirrecion)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

import ChatBot from 'react-chatbotify';
import { styles } from './styles'
import { settings } from './settings'

const MyChatBot = () => {
	const helpOptions = [
		"¿Qué tipos de prendas se pueden lavar en el servicio de lavandería?",
		"¿Cuánto tiempo tarda en completarse el servicio de lavandería?",
		"¿Cómo se determinan los precios del servicio de lavandería?",
	];
	const exitOptions = ["Si", "No"]

	const flow = {
		start: {
			message: "Hola! Bienvenido a Easylav " +
				"chatbot !",
			transition: { duration: 1000 },
			path: "show_question_options",
			chatDisabled: true,
		},
		show_question_options: {
			message: "A continuación te mostraré las preguntan más frecuentes:",
			options: helpOptions,
			path: "process_options",
			chatDisabled: true,
		},
		prompt_again: {
			message: "¿Tiene otra duda?",
			options: exitOptions,
			path: "process_exit",
			chatDisabled: true,

		},
		process_options: {
			transition: { duration: 0 },
			chatDisabled: true,
			path: async (params) => {
				let link = "";
				switch (params.userInput) {
					case "¿Qué tipos de prendas se pueden lavar en el servicio de lavandería?":
						await params.injectMessage("Puedes lavar prendas de ropa, como camisas, pantalones, etc.");
						break;
					case "¿Cuánto tiempo tarda en completarse el servicio de lavandería?":
						await params.injectMessage("El tiempo de procesamiento puede variar según la carga de trabajo y el tipo de prendas.");
						await params.injectMessage("Generalmente, podemos completar el lavado y secado estándar en un plazo de 24 a 48 horas.");
						break;
					case "¿Cómo se determinan los precios del servicio de lavandería?":
						await params.injectMessage("Los precios se basan principalmente en el peso total de la ropa a lavar. Ofrecemos tarifas competitivas por libra/kilo y también tenemos opciones especiales para prendas delicadas o que requieren un tratamiento especial.");
						break;
				}
				if (link !== "") {
					await params.injectMessage("Sit tight! I'll send you right there!");
					setTimeout(() => {
						window.open(link);
					}, 1000)
				}
				return "repeat"
			},
		},
		process_exit: {
			transition: { duration: 0 },
			chatDisabled: true,
			path: async (params) => {
				switch (params.userInput) {
					case "Si":
						return "process_options";
						break;
					case "No":
						return "exit";
						break;
				}
			},
		},
		exit: {
			message: 'Muchas gracias por utilizar nuestro chatbot.',
			chatDisabled: true,
		},
		repeat: {
			transition: { duration: 5000 },
			path: "prompt_again"
		},
	}
	return (
		<ChatBot settings={settings} styles={styles} flow={flow} />
	);
}
export default MyChatBot
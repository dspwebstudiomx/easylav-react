import { useState } from 'react';
import ChatBot from 'react-chatbotify';
import icon from '../assets/images/logos/horizontal/logo-blanco.png'
const MyChatBot = () => {


	// settings
	const settings = {
		isOpen: false,

		emoji: {
			disabled: 'false'
		},
		general: {
			primaryColor: '#42b0c5',
			secondaryColor: '#491d8d',
			fontFamily: 'Arial, sans-serif',
			embedded: false,
		},
		header: {
			title: 'Easylav ChatBot'
		},
		audio: {
			disabled: true,
		},
		chatHistory: {
			disabled: true,
			storageKey: 'concepts_settings'
		},
		chatButton: {
			icon: icon
		},
		tooltip: {
			text: '¿Tienes dudas?',
		},
		chatInput: {
			enabledPlaceholderText: 'Escribe tu mensaje...'
		},
		botBubble: {
			showAvatar: true
		},
		fileAttachment: {
			disabled: true
		},
		footer: {
			text: 'Lavanderías EASYLAV'
		}
	}
	// styles here
	const styles = {
		headerStyle: {
			background: '#55C3B9',
			color: '#ffffff',
			letterSpacing: '1px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'between',
			fontSize: '21px'
		},
		chatWindowStyle: {
			backgroundColor: '#f2f2f2',
		},
		chatButtonStyle: {
			backgroundColor: '#622a77',
			fontSize: '14px'
		},
		icon: {
			width: '32px'
		},
		tooltipStyle: {
			backgroundColor: '#55C3B9',
			border: '1px solid #f2f2f2'
		},
		botBubbleStyle: {
			backgroundColor: '#622a77',
			fontSize: '18px'
		},
		userBubbleStyle: {
			backgroundColor: '#55C3B9'
		},
		bodyStyle: {
			padding: '1.1em'
		}
	}
	const [form, setForm] = useState({});
	const formStyle = {
		marginTop: 10,
		marginLeft: 20,
		border: '1px solid #491d8d',
		padding: 10,
		borderRadius: 5,
		maxWidth: 300
	}


	const flow = {
		start: {
			message: 'Hola, Bienvenido! 😎 ¿Cuál es tu nombre?',
			function: (params) => setForm({ ...form, name: params.userInput }),
			path: 'preguntar_opciones'
		},
		preguntar_duda: {
			message: (params) => `Mucho gusto ${params.userInput}, en que puedo ayudarte?`,
			function: (params) => setForm({ ...form, name: params.preguntar_opciones }),
			path: 'preguntar_opciones'
		},
		ask_pet: {
			message: 'Do you own any pets?',
			options: ['Yes', 'No'],
			chatDisabled: true,
			function: (params) => setForm({ ...form, pet_ownership: params.userInput }),
			path: 'ask_choice'
		},
		preguntar_opciones: {
			message: (params) => `Mucho gusto ${params.userInput}, en que puedo ayudarte?`,
			options: [
				{ value: 1, label: 'Number 1', path: '1' },
				{ value: 2, label: 'Number 2', path: '2' },
				{ value: 3, label: 'Number 3', path: '3' },
			],
			chatDisabled: true,
			function: (params) => setForm({ ...form, pet_choices: params.userInput }),
			path: 'ask_work_days'
		},
		ask_work_days: {
			message: 'How many days can you work per week?',
			function: (params) => setForm({ ...form, num_work_days: params.userInput }),
			path: 'end'
		},
		end: {
			message: 'Thank you for your interest, we will get back to you shortly!',
			component: (
				<div style={formStyle}>
					<p>Name: {form.name}</p>
					<p>Age: {form.age}</p>
					<p>Pet Ownership: {form.pet_ownership}</p>
					<p>Pet Choices: {form.pet_choices}</p>
					<p>Num Work Days: {form.num_work_days}</p>
				</div>
			),
			options: ['New Application'],
			chatDisabled: true,
			path: 'start'
		},
	}
	return (
		<div className='fixed bottom-24 right-20 z-50'>
			<ChatBot
				styles={styles}
				settings={settings}
				flow={flow}
			/>
		</div>
	);
};
export default MyChatBot
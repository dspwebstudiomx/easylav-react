import { useState } from 'react';
import ChatBot from 'react-chatbotify';

const MyChatBot = () => {


	// settings
	const settings = {
		isOpen: false,
		emoji: true,
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
			disabled: false,
		},
		chatHistory: {
			disabled: false,
			storageKey: 'concepts_settings'
		},
		// chatButton: {
		// 	icon: '🤖'
		// },
		tooltip: {
			text: '¿Tienes dudas?',
		},
		enabledPlaceholderText: 'Escribe tu mensaje...'
	}

	// styles here
	const styles = {
		headerStyle: {
			background: '#55C3B9',
			color: '#ffffff',
			fontWeight: 'bold',
			letterSpacing: '1px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'between'
		},
		chatWindowStyle: {
			backgroundColor: '#f2f2f2',
		},
		chatButtonStyle: {
			backgroundColor: '#622a77',
		},
		tooltipStyle: {
			backgroundColor: '#55C3B9',
			border: '1px solid #f2f2f2'
		},
		botBubbleStyle: {
			backgroundColor: '#622a77'
		},
		userBubbleStyle: {
			backgroundColor: '#975CDA'
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
			message: 'Hola! Como estás?',
			function: (params) => setForm({ ...form, name: params.userInput }),
			path: 'ask_age'
		},
		ask_age: {
			message: (params) => `Nice to meet you ${params.userInput}, what is your age?`,
			function: (params) => setForm({ ...form, age: params.userInput }),
			path: 'ask_pet'
		},
		ask_pet: {
			message: 'Do you own any pets?',
			options: ['Yes', 'No'],
			chatDisabled: true,
			function: (params) => setForm({ ...form, pet_ownership: params.userInput }),
			path: 'ask_choice'
		},
		ask_choice: {
			message: 'Select at least 2 pets that you are comfortable to work with:',
			checkboxes: { items: ['Dog', 'Cat', 'Rabbit', 'Hamster'], min: 2 },
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
		<div className='fixed bottom-24 right-20'>
			<ChatBot
				styles={styles}
				settings={settings}
				flow={flow}

			/>
		</div>
	);
};
export default MyChatBot
import ChatBot from 'react-chatbotify';
import { settings, styles } from './js/config';
import useChatForm from './js/useChatForm';

const MyChatBot = () => {
	const { form, flow } = useChatForm();

	return (
		<ChatBot
			settings={settings}
			styles={styles}
			flow={flow}
			form={form}
		/>
	);
}
export default MyChatBot
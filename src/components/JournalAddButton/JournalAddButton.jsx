import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {

	return (
		<CardButton className={'journal-add-button'}>
			<img src="../../../public/add remember.svg" alt="+" />	Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;
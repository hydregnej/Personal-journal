import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm() {
	const [inputData, setInputData] = useState('');
	const inputChange = (e) => setInputData(e.target.value);

	const submitForm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (

		<form action="" onSubmit={submitForm} className='journal-form'>

			<div className="journal-form__block">
				<label htmlFor="title">Заголовок</label>
				<input id='title' name='title' type='text' className='journal-form__item journal-form__title'/>
			</div>

			<div className="journal-form__block">
				<label htmlFor="date">Дата</label>
				<input id='date' name='date' type="date" className='journal-form__item' />
			</div>

			<div className="journal-form__block">
				<label htmlFor="tag">Метка</label>
				<input id='tag' name='tag' type="text" className='journal-form__item' />
			</div>

			<div className="journal-form__block">
				<label htmlFor="main-text">Заметка</label>
				<textarea id='main-text' name='main-text' type="text" className='journal-form__item' value={inputData} onChange={inputChange}></textarea>
			</div>
      
			<Button text="Сохранить"/>
		</form>

	);
}
 
export default JournalForm;
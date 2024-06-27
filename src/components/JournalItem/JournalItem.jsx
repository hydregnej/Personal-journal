import './JournalItem.css';

function JournalItem({title, date, text}) {

	return (
		<div className='personal-item'>
			<h2 className="personal-item__title">{title}</h2>
			<div className="personal-item__date-and-text">
				<p className="personal-item__date">{date}</p>
				<p className="personal-item__text">{text}</p>
			</div>
		</div>
	);
}

export default JournalItem;
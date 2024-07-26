import './JournalItem.css';

function JournalItem({title, date, text}) {
	const formatDate = new Intl.DateTimeFormat('ru-Ru').format(date);

	return (
		<>
			<h2 className="journal-item__title">{title}</h2>
			<div className="journal-item__date-and-text">
				<p className="journal-item__date">{formatDate}</p>
				<p className="journal-item__text">{text}</p>
			</div>
		</>
	);
}

export default JournalItem;
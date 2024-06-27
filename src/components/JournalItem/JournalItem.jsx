import './JournalItem.css';

function JournalItem({title, date, text}) {
  const formatDate = new Intl.DateTimeFormat('ru-Ru').format(date)

	return (
		<div className='personal-item'>
			<h2 className="personal-item__title">{title}</h2>
			<div className="personal-item__date-and-text">
				<p className="personal-item__date">{formatDate}</p>
				<p className="personal-item__text">{text}</p>
			</div>
		</div>
	);
}

export default JournalItem;
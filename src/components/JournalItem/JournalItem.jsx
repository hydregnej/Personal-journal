import './JournalItem.css';

function JournalItem() {
	const title = 'Подготовка к обновлению курсов';
	const date = '21.06.2024';
	const text = 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.';

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
import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			date : new Date,
			text : 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.'
		},
		{
			title: 'Поход в годы',
			date : new Date,
			text : 'Большое значение в горном туризме придается бытовому обустройству в походе, ведь все необходимое для жизнеобеспечения группы нужно нести с собой в рюкзаке и вес каждого килограмма ноши на высоте ощущается особенно сильно. Существует множество способов существенно облегчить вес рюкзака и тем самым высвободить силы для перехода.'
		}
	];

	return (
		<div>
			<h1>Залоговок</h1>
			<p>Текст</p>
			<Button/>
			<JournalItem
        title={data[0].title}
        date={data[0].date}
        text={data[0].text}
      />
			<JournalItem
        title={data[1].title}
        date={data[1].date}
        text={data[1].text}
      />
		</div>
	);
}

export default App;

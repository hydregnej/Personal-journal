import './App.css';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';

import SideBar from './layouts/SideBar/SideBar';
import Body from './layouts/Body/Body';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Header from './components/Header/Header';
import JournalForm from './components/JournalForm/JournalForm';

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
		<div className='app'>
			<SideBar>
				<Header/>

				<JournalAddButton/>

				<JournalList>

					<CardButton>
						<JournalItem
							title={data[0].title}
							date={data[0].date}
							text={data[0].text}
						/>
					</CardButton>

					<CardButton>
						<JournalItem
							title={data[1].title}
							date={data[1].date}
							text={data[1].text}
						/>
					</CardButton>

				</JournalList>
			</SideBar>

			<Body>
				<JournalForm/>
			</Body>


		</div>
    
	);
}

export default App;

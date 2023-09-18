import './App.css';
import Avatar from './components/avatar/avatar.component';
import Intro from './components/intro/intro.component';
import SkillList from './components/skill-list/skill-list.component';

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;

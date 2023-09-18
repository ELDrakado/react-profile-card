import Skill from '../skill/skill.component';
import SkillInterface from '../../interfaces/skill.interface';

const skills: Array<SkillInterface> = [
  {
    id: 1,
    name: 'HTML+CSS',
    emoji: '💪🏼',
    color: 'blue',
  },
  {
    id: 2,
    name: 'JavaScript',
    emoji: '🤣',
    color: 'yellow',
  },
  {
    id: 3,
    name: 'Web Design',
    emoji: '😁',
    color: 'green',
  },
  {
    id: 4,
    name: 'Git and Github',
    emoji: '🤩',
    color: 'red',
  },
  {
    id: 5,
    name: 'VTEX IO',
    emoji: '👏',
    color: 'magenta',
  },
];

const SkillList = () => {
  return (
    <div className='skill-list'>
      {skills.map((skill: SkillInterface) => {
        const { id, name, emoji, color } = skill;
        return <Skill key={id} name={name} emoji={emoji} color={color} />;
      })}
    </div>
  );
};

export default SkillList;

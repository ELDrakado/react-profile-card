import SkillInterface from '../../interfaces/skill.interface';

const Skill = (props: SkillInterface) => {
  const { name, emoji, color } = props;
  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <p>{name}</p>
      <span>{emoji}</span>
    </div>
  );
};

export default Skill;

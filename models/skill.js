const skills = [
  { id: 437261, skill: 'HTML', learned: true },
  { id: 198743, skill: 'CSS', learned: true },
  { id: 107498, skill: 'Javascript', learned: true },
  { id: 637982, skill: 'Node.js', learned: true },
  { id: 109826, skill: 'Python', learned: false },
];

function getAll() {
  return skills;
};

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
};


module.exports = {
  getAll,
  getOne,
};
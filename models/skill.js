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

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.learned = null;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((todo) => todo.id === parseInt(id));
  skills.splice(idx, 1);
}

module.exports = {
  getAll,
  getOne,
  create, 
  deleteOne,
};
const skills = [
  {skill: 'Javascript', level: 'Intermediate'},
  {skill: 'HTML', level: 'Intermediate'},
  {skill: 'CSS', level: 'Intermediate'},
  {skill: 'Express', level: 'Beginner'},
  {skill: 'Node', level: 'Beginner'},

];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

function create(skill){
  skills.push(skill);
}

function deleteOne(id){
  skills.splice(id, 1);
}

function update(id, skill){
  skills[id] = skill;
}
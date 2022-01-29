function whoLikes(list) {
  const NumberPersons = list.length
  let response = '';
  if (NumberPersons === 0) {
    response = 'No one like this';
  } else if (NumberPersons === 1) {
    response = `${list[0]} likes this`;
  } else if (NumberPersons === 2) {
    response = `${list[0]} and ${list[1]} likes this`;
  } else if (NumberPersons === 3) {
    response = `${list[0]}, ${list[1]} and ${list[2]} likes this`;
  } else if (NumberPersons > 3) {

    response += `${list[0]}, ${list[1]} and ${NumberPersons - 2} others likes this`

  }
  return response
}
module.exports = whoLikes;

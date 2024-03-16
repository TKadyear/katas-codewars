export function whoLikes(names) {
  const NumberOfNames = names.length;
  let reply = '';
  if (NumberOfNames === 1) {
    reply = `${names[0]} likes this`;
  } else if (NumberOfNames === 2) {
    reply = `${names.slice(0, 2).join(' and ')} like this`;
  } else if (NumberOfNames >= 3) {
    const whoElse = NumberOfNames > 3
      ? `${NumberOfNames - 2} others like this`
      : `${names[NumberOfNames - 1]} like this`;
    reply = `${[...names].slice(0, 2).join(', ')} and ${whoElse}`;
  } else {
    reply = 'no one likes this';
  }
  return reply;
}

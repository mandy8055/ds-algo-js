import colors from 'colors';
export default function logger(output) {
  console.log(colors.magenta.bold(`Output:\n${output}`).trim());
}

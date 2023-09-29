import colors from 'colors';
export default function logger(output, color = 'magenta') {
  console.log(colors[color].bold(output).trim());
}

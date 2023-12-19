import colors from 'colors';

/**
Logs a message to the console with optional color and type.
@param {string} output - The message to be logged.
@param {Object} [options] - Optional settings for the log message.
@param {string} [options.color='magenta'] - The color of the message (default: 'magenta' for 'log', 'red' for 'error' and 'yellow' for 'warn').
@param {string} [options.type='log'] - The type of the message, either 'log', 'warn' or 'error' (default: 'log').
 */
export default function logger(output, options = {}) {
  const { type = 'log', color } = options;
  const defaultColor =
    type === 'error' ? 'red' : type === 'warn' ? 'yellow' : 'magenta';
  const chosenColor = color ?? defaultColor;
  console[type](colors[chosenColor].bold(output).trim());
}

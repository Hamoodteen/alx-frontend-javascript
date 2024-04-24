export default function guardrail(mathFunction) {
  // eslint-disable-next-line prefer-const
  let queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}

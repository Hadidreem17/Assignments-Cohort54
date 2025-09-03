const eurosFormatter = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
});

/**
 * @param {Array<{duration:number}>} tasks
 * @param {number} hourlyRate
 * @returns {string}
 */
function computeEarnings(tasks, hourlyRate) {
  const totalMinutes = Array.isArray(tasks)
    ? tasks.reduce((sum, t) => sum + (Number(t?.duration) || 0), 0)
    : 0;

  const totalHours = totalMinutes / 60;
  const earnings = totalHours * Number(hourlyRate || 0);

  return eurosFormatter.format(earnings);
}

module.exports = computeEarnings;


export function getMonthesNames() {
    const MONTH_COUNT = 12;
    let result = [];
    for (let i = 0; i < MONTH_COUNT; i++)
    {
        result.push(getMonthNameByDate(new Date(2021, i)))
    }
    return result;
}

function getMonthNameByDate(date) {
    return  new Date(date).toLocaleString('default', { month: 'long' });
}

export function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
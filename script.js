function processQueue(q) {
  let queue = [];
  let worriedCount = 0;

  for (let i = 0; i < q.length; i++) {
    const operation = q[i].split(' ');

    switch (operation[0]) {
      case 'WORRY':
        queue[operation[1]] = true;
        worriedCount++;
        break;
      case 'QUIET':
        queue[operation[1]] = false;
        worriedCount--;
        break;
      case 'COME':
        const num = parseInt(operation[1]);

        if (num > 0) {
          for (let j = 0; j < num; j++) {
            queue.push(false);
          }
        } else {
          queue.splice(num);
          worriedCount -= Math.abs(num);
        }
        break;
      case 'WORRY_COUNT':
        console.log(worriedCount);
        break;
    }
  }
}

const n = 5;
const queries = [
  'COME 5',
  'WORRY 1',
  'WORRY 4',
  'COME -2',
  'WORRY_COUNT',
];

processQueue(queries);

const arrayLength = process.argv[3]
const array = Array.from({ length: arrayLength }, (_, index) => arrayLength - index + 1);

function bubble_sort() {
  let swaping = true;

  while (swaping) {
    swaping = false;

    for (let i = 0; i < array.length - 1; ++i) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swaping = true;
      }
    }
  }
}

const execute = {
  iterative: bubble_sort
}

execute[process.argv[2]]()

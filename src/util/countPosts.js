function countPosts(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let { CategoryId } = arr[i];

    if (CategoryId == value) {
      count++;
    }
  }

  return count;
}

export default countPosts;

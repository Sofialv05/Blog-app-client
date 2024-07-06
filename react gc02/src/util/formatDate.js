function formatDate(value) {
  const date = new Date(value);
  return date.toLocaleDateString("id-ID");
}

export default formatDate;

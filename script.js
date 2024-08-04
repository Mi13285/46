function reverseWords(str) {
  return str
    .split(" ")
    .map((str) => str.split("").reverse("").join(""))
    .join(" ");
}
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

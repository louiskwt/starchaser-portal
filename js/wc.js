function generateWordCount() {
  const target_name = "samples";

  if (window.location.pathname.includes(target_name)) {
    const article_section = document.querySelector("article");
    const headers = document.querySelectorAll("h2");
    const ps = document.querySelectorAll("p");

    if (!article_section || !ps) return;

    const w_arr = [];

    headers.forEach((h) => {
      w_arr.push(h.textContent.trim().replace(/\s+/g, " "));
    });

    ps.forEach((p) => {
      w_arr.push(p.textContent.trim().replace(/\s+/g, " "));
    });

    const wc = countWords(w_arr);
    const wc_element = document.createElement("p");
    wc_element.textContent = `${wc} words`;
    article_section.appendChild(wc_element);
  }
}

function countWords(wordArr) {
  const sum = wordArr.reduce((acc, currVal) => {
    const words = currVal.split(" ");
    acc += words.length;
    return acc;
  }, 0);
  return sum;
}

document.addEventListener("DOMContentLoaded", () => generateWordCount());

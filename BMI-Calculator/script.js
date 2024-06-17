const form = document.querySelector("form");

// we have to fetch the data from from afterclicking on submit

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `<span>Please give a vild height ${height}</span>`;
  } else if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `<span>Please give a vild height ${height}</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      results.innerHTML = `<span>BMI_INDEX: ${height}</span>`;
      results.style.color = '#fffb00';
      results.style.justifyContent = "center";
  }
});

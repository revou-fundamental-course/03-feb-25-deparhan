// ini file Javascript

console.log("Javascript is working!");

function validateForm() {
  let input = document.getElementById("main-input");
  console.log(input.value);

  if (input.value == "") {
    alert("Tolong Isi Inputan");
  } else {
    /// proses konversi
    let calc = convertToCelcius(input.value);

    /// tampilkan hasil
    document.getElementById("main-result").value = calc;
    document.getElementById("cara-konversi").value =
      "Diket : C =" + input.value + " F..";
    console.log("Berhasil di Eksekusi");
  }
}
/// fungsi konversi
let convertToCelcius = (input) => {
  return input * 2;
};

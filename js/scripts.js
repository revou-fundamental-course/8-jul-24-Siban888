// Ini Javascript
function calculateBMI() {
    var berat = parseFloat(document.getElementById("berat").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var bmi;
    var keterangan;

    // Convert height from cm to meters
    tinggi /= 100;

    // Calculate BMI
    bmi = Berat / (Tinggi * 2);

    // Determine the category based on BMI
    if (bmi > 30.0) {
        keterangan = "Kegemukan (Obesitas)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        keterangan = "Kelebihan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        keterangan = "Normal";
    } else if (bmi < 18.5) {
        keterangan = "Kekurangan berat badan";
    }

    // Display the results
    document.getElementById('result').innerHTML = "Hasil Perhitungan BMI: " + bmi.toFixed(1);
    document.getElementById('keterangan').innerHTML = "Keterangan: " + keterangan;
}
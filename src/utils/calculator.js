// calculation.js

// Fungsi untuk melakukan perhitungan matematika
export const calculateResult = (expression) => {
    try {
      const result = eval(expression);
      return result.toString(); // Mengembalikan hasil perhitungan dalam bentuk string
    } catch (error) {
      return 'Error'; // Mengembalikan pesan error jika terjadi kesalahan dalam perhitungan
    }
  };
  
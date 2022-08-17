//Convert numbers
function convertAPToEnglish(number: number | string): string {
  try {
    return number
      .toString()
      .replace(/[٠-٩]/g, (d): string => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString())
      .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
  } catch (error) {
    throw new Error("Please enter a correct number");
  }
}

export default convertAPToEnglish;
module.exports = convertAPToEnglish;

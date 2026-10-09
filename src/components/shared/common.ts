 export const toBanglaNumber = (value: number) =>
    String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
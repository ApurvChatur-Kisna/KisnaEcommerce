const formatNumberWithCommas = (num: string): string => {
  const numStr = num.toString();
  const [integerPart, decimalPart] = numStr.split('.');

  const lastThreeDigits = integerPart.slice(-3);
  const otherDigits = integerPart.slice(0, -3);

  const formattedIntegerPart = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + (lastThreeDigits ? ',' + lastThreeDigits : '');

  return decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;
};

export default formatNumberWithCommas;

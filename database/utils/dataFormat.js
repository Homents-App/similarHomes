

const formatPrice = (num) => {
  return '$' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports.formatPrice = formatPrice;


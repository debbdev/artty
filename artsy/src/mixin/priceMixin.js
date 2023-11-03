export default {
    methods: {
      formatPrice(value) {
        const formattedValue = (value / 100).toFixed(2);
        return '$' + formattedValue;
      }
    }
  }
  
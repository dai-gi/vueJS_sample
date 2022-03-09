const app = new Vue({
  el: '#app',
  data: {
    errorMessage: 'Eメールが一致しません',
    formData: {
      name: '',
      region: '',
      email: '',
      email_confirm: '',
      content: '',
    },
    regions: [
      '東北',
      '関東',
      '関西'
    ],
    confirmView: false,
  },
  methods: {
    openClickArea() {
      this.confirmView = true;
    },
    closeClickArea() {
      this.confirmView = false;
    }
  },
  computed: {
    validation: function() {
      return this.formData.email === this.formData.email_confirm;
    }
  }
})
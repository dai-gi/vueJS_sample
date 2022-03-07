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
    ]
  }
})
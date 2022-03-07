const app = new Vue({
  el: '#app',
  data: {
    errorMessage: 'Eメールが一致しません',
    formData: {
      name: '',
      email: '',
    },
  }
})
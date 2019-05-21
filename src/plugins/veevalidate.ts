import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.prototype.$hasError = function(id: string) {
  return (
    this.errors.items.filter((error: any) => error.field === id).length > 0
  );
};

Vue.prototype.$errorMsg = function(id: string) {
  return this.errors.items.filter((error: any) => error.field === id)[0].msg;
};

Vue.use(VeeValidate);

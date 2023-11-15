const proxiedObject = new Proxy(
  {},
  {
    get: function (target, property) {
      return '404';
    },
  }
);

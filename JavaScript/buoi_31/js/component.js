// dinh nghia
var Component = {
  create: function (name, handle) {
    var componentFn = function () {
      return Reflect.construct(HTMLElement, [], this.constructor);
    };
    componentFn.prototype = Object.create(HTMLElement.prototype);

    componentFn.prototype.constructor = componentFn;
    componentFn.prototype.connectedCallback = handle;
    customElements.define(name, componentFn);
  },
};

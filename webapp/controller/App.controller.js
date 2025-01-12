sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], (Controller, MessageToast) => {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.App", {
     onShowHello() {
        MessageToast.show("Hello World");
     },

     inInit() {
      // set O Data model on view
      const oData = {
        recipient : {
          name : "World"
        }
      };
      const oModel = new JSONModel(oData);
      this.getView().setModel(oMedel);
     }
  });
});

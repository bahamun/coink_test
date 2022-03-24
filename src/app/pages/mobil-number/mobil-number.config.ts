export const mobilNumberConfig = Object.freeze({
  routes: {
    pageRegister: 'register',
  },
  mobilNumberTitle: 'NÚMERO CELULAR',
  page: 'mobilNumber',
  panelMobilNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 11],
  panelVerificationNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0, 10],

  mobilNumberMsg: 'Para comenzar, por favor ingresa',
  mobilNumberMsg2: 'tu número celular.',
  verificationMsg: 'Digíta el código que recibiste vía',
  verificationMsg2: 'mensaje de texto',
  numberVaidation: '1234',
  errorMsg:
    'El código que ingresaste es incorrecto, enviaremos un nuevo código a tu correo electrónico.',
});

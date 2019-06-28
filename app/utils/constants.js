exports.MIN_PASSWORD_LENGTH = 4;
exports.ACCEPTED_EXTENSIONS = ['JPG', 'PNG'];
exports.MAX_FILE_SIZE = 3000000; //3MB
exports.RECOVERY_CODE_EXPIRATION_TIME = process.env.recoveryCodeExpirationTime || '1800000'; //Expressed in milliseconds

exports.MS_PER_DAY = 1000 * 60 * 60 * 24;
exports.TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN || "365d";


exports.DROPBOX_FOLDER_PATH = '/resources';
exports.ACCEPTED_EXTENSIONS = ['JPG', 'JPEG', 'PNG'];
exports.MAX_FILE_SIZE = 10000000; //10MB

exports.ERRORS = {
  "INTERNAL_ERROR": {
    httpCode: 400,
    code: "#-1",
    description: "Ha ocurrido un error interno, intente mas tarde."
  },
  "NOT_FOUND": {
    httpCode: 404,
    code: '#-2',
    description: "El recurso no existe o no tiene privilegios para acceder."
  },
  "MISSING_REQUIRED_FIELDS": {
    httpCode: 400,
    code: "#1001",
    description: "Faltan campos que son obligatorios."
  },
  "USER_ALREADY_EXIST": {
    httpCode: 403,
    code: "#1002",
    description: "Ya existe un usuario con ese nombre de usuario."
  },
  "CI_TOO_SHORT": {
    httpCode: 400,
    code: "#1003",
    description: "La cédula debe tener al menos " + this.MIN_RUT_LENGTH + " caracteres."
  },
  "PASSWORD_TOO_SHORT": {
    httpCode: 400,
    code: "#1004",
    description: "La contraseña deber tener al menos " + this.MIN_PASSWORD_LENGTH + " caracteres."
  },
  "USER_NOT_EXIST": {
    httpCode: 404,
    code: "#1005",
    description: "El usuario no existe en nuestros registros."
  },
  "BAD_CREDENTIALS": {
    httpCode: 403,
    code: "#1006",
    description: "Credenciales incorrectas."
  },
  "UNSUPPORTED_EXTENSIONS": {
    httpCode: 400,
    code: "#1007",
    description: "Solo son permitidas las extensiones de tipo JPG, PNG y PDF."
  },
  "FILE_TOO_LARGE": {
    httpCode: 400,
    code: "#1007",
    description: "Los archivos deben pesar menos de " + (this.MAX_FILE_SIZE / 1000000) + " MB."
  },
  "NO_TOKEN_PROVIDED": {
    httpCode: 403,
    code: "#1008",
    description: "Inicie sesion de nuevo."
  },
  "AUTHENTICATE_FAILED": {
    httpCode: 401,
    code: "#1009",
    description: "Ha ocurrido un error de autenticacion, inicie sesion de nuevo."
  },
  "FACEBOOK_FIELDS_AUTHENTICATE": {
    httpCode: 401,
    code: "#1010",
    description: "Esta aplicacion necesita permisos para ver su email y su nombre de facebook."
  },
  "UNAUTHORIZATED": {
    httpCode: 401,
    code: "#1011",
    description: "El recurso no existe o necesitas privilegios para accederlo."
  },
  "PARAMETER_IS_NOT_AN_EMAIL": {
    httpCode: 400,
    code: "#1012",
    description: "El parámetro enviado debe ser un correo electrónico"
  },
  "INVALID_CODE": {
    httpCode: 400,
    code: "#1013",
    description: "Código inválido"
  },
  "EXPIRED_CODE": {
    httpCode: 403,
    code: "#1014",
    description: "El código ha expirado. Solicite uno nuevo."
  },
  "USED_CODE": {
    httpCode: 403,
    code: "#1014",
    description: "El código ya fue usado. Solicite uno nuevo."
  },
  "INVALID_COORDINATES": {
    httpCode: 400,
    code: "#1015",
    description: "Las coordenadas no están bien formadas."
  },
  "PASSWORD_DOESNT_MATCH": {
    httpCode: 400,
    code: "#1016",
    description: "La contraseña y confirmación no coinciden."
  },
  "INVALID_ID": {
    httpCode: 400,
    code: "#1017",
    description: "El id enviado no tiene una forma válida."
  },
  "PIN_INVALID_FORM": {
    httpCode: 400,
    code: "#1018",
    description: "El pin debe ser 4 números."
  },
  "CARD_NOT_FOUND": {
    httpCode: 404,
    code: "#1019",
    description: "La tarjeta no existe en nuestro sistema."
  },
  "INVALID_PIN": {
    httpCode: 404,
    code: "#1019",
    description: "Pin inválido."
  },
  "PRODUCT_NOT_FOUD": {
    httpCode: 404,
    code: "#1020",
    description: "El producto no existe o no pertenece al comercio indicado."
  },
  "COMMERCE_NOT_FOUND": {
    httpCode: 404,
    code: '#1021',
    description: "Comercio no encontrado."
  },
  "SOME_PRODUCTS_ARE_NOT_AVAILABLE": {
    httpCode: 409,
    code: "#1022",
    description: "Algunos productos no cuentan con la cantidad requerida."
  },
  "MISSING_PRODUCT_REFERENCE": {
    httpCode: 400,
    code: '#1023',
    description: "Todos los items deben tener la referencia del producto."
  },
  "ORDER_NOT_FOUND": {
    httpCode: 404,
    code: "#1024",
    description: "La orden no fue encontrada en su lista de órdenes."
  },
  "ITEM_QTY_ERR": {
    httpCode: 400,
    code: "#1025",
    description: "Uno de los productos tiene una cantidad inesperada, intente de nuevo."
  },
  "BUILDING_NOT_FOUND": {
    httpCode: 404,
    code: '#1026',
    description: "El estacionamiento no fue encontrado en nuestro sistema."
  },
  "REQUEST_NOT_ACCEPTED": {
    httpCode: 403,
    code: '#1027',
    description: "No puede iniciar sesión hasta que su solicitud sea aceptada."
  },
  "ANOTHER_TICKET_IS_READY": {
    httpCode: 403,
    code: "#1028",
    description: "Debe pagar todos sus tickets antes de crear uno nuevo."
  },
  "DUPLICATE_SESSION": {
    httpCode: 403,
    code: "#1029",
    description: "Ha iniciado sesión en otro dispositivo. Inicie sesión nuevamente."
  },
  "INVALID_ACCESS": {
    httpCode: 400,
    code: "#1030",
    description: "El código de acceso no coincide con la acción que desea realizar."
  },
  "SUPPORT_VERSION_ERROR": {
    httpCode: 403,
    code: "#1031",
    description: "Hay una actualización de aplicación disponible. Debe descargarla para seguir disfrutando de Pago Directo."
  },
  "USER_AGENT_ERROR": {
    httpCode: 400,
    code: "#1032",
    description: "Hubo un error en la verificación de su versión."
  },
  "INVALID_DATE": {
    httpCode: 400,
    code: "#1033",
    description: "Las fechas tienen un formato inválido."
  },
  "UNVERIFIED_EMAIL": {
    httpCode: 400,
    code: "#1034",
    description: "Debe verificar su correo antes de ejecutar la accion que quiso realizar."
  },
  "TICKET_NOT_FOUND": {
    httpCode: 404,
    code: "#1035",
    description: "El ticket no fue encontrado."
  },
  "INSUFFICIENT_FUNDS": {
    httpCode: 403,
    code: '#1036',
    description: "Fondo insuficiente."
  },
  "PENDING_RECHARGES_LIMITS": {
    httpCode: 403,
    code: '#1037',
    description: "Ha superado el límite de transacciones pendientes."
  },
  "INVALID_AMOUNT": {
    httpCode: 403,
    code: '#1038',
    description: "Monto inválido"
  }
}

exports.COUNTRIES = {
  "VENEZUELA": {
    name: "Venezuela",
    code: "001",
    data_value: "VE",
    ico_value: "ve",
    currency: 'Bs.S.',
    time_offset: "-4:00"
  }
}

exports.DEFAULT_ERROR = {
  httpCode: 500,
  code: "#-2",
  description: "Ha ocurrido un error inesperado, intente mas tarde."
}

exports.SPANISH_TICKET_STATUS = {
  ready: 'Ticket pendiente por pagar.',
  paid: 'Ticket pagado.',
  closed: 'Ticket usado.'
}

exports.RECHARGE_AMOUNTS = [100, 200, 500, 1000]

exports.RECHARGE_FAIL_REASONS = {
  'INVALID_CODE': {
    description: "Código inválido"
  },
  "INVALID_AMOUNT": {
    description: "Monto inválido"
  },
  "NOT_FOUND": {
    description: 'No se encontró la recarga'
  },
  "UKNOW": {
    description: "Razón desconocida"
  }
}

exports.TRANSACTION_TYPE_DESCRIPTIONS = {
  'RECHARGE': 'Recarga con refencia:',
  'TICKET': 'Pago de ticket'
}

exports.BANK_ACCOUNTS = {
  'wiretransfer': [
    {
      bank_name: "BANCO PDB",
      account_number: "0100-0000-0000-0000-0000",
      account_type: "Corriente",
      owner_name: "CORPORACION PAYTECH, C.A.",
      owner_identification: {
        doc_type: 'J',
        doc_value: '00000000-0'
      }
    },
    {
      bank_name: "BANCO PDB2",
      account_number: "0200-0000-0000-0000-0000",
      account_type: "Corriente",
      owner_name: "CORPORACION PAYTECH, C.A.",
      owner_identification: {
        doc_type: 'J',
        doc_value: '00000000-0'
      }
    }
  ],
  'movil_payment': [
    {
      banck_name: "BANCO PDB",
      bank_code: "0100",
      owner_phone: "04141231212",
      owner_identification: {
        doc_type: 'J',
        doc_value: '00000000-0'
      }
    },
    {
      banck_name: "BANCO PDB2",
      bank_code: "0200",
      owner_phone: "04141231212",
      owner_identification: {
        doc_type: 'J',
        doc_value: '00000000-0'
      }
    }
  ]
};

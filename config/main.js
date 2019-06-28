
var config = {
  'development': {
    //'database': 'mongodb://localhost:27017/markdowndev',
    'database' : 'mongodb://admin:admin123@ds245387.mlab.com:45387/markdowntest',
    'port': '3000',
    'host': 'http://localhost:3002',
    'currentVersion': 'v1,'
  },
  'test': {
    'port': '3000',
    'host': 'http://markdownapitest.herokuapp.com',
    'currentVersion': 'v1,',
  },
  'production': {
    'database': '',
    'port': '80',
    'host': 'http://markdownapi.herokuapp.com',
  }
}
exports.get = function (env) {
  //env = "test";
  return config[env] || config.development;
}
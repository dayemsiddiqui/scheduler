exports.createJobSchema = {
  'type': 'object',
  'properties': {
    'title': {
      'type': 'string'
    },
    'description': {
      'type': 'string'
    },
    'cronString': {
      'type': 'string'
    },
    'webhook': {
      'type': 'string'
    },
    'customPayload': {
      'type': 'object'
    },
    'methodType': {
      'type': 'string'
    }
  },
  'required': [
    'title',
    'description',
    'cronString',
    'webhook',
    'customPayload',
    'methodType'
  ]
}

exports.updateJobSchema = {
  'type': 'object',
  'properties': {
    'title': {
      'type': 'string'
    },
    'description': {
      'type': 'string'
    },
    'cronString': {
      'type': 'string'
    },
    'webhook': {
      'type': 'string'
    },
    'customPayload': {
      'type': 'object'
    },
    'methodType': {
      'type': 'string'
    }
  },
  'required': [
    'title',
    'description',
    'cronString',
    'webhook',
    'customPayload',
    'methodType'
  ]
}

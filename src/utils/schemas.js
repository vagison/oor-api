import { User } from '../models'
import { errorMessagesConstants } from '../constants'

const loginValidationSchema = {
  email: {
    exists: true,
    trim: true,
    errorMessage: 'E-mail is required',
  },
  password: {
    exists: true,
    trim: true,
    errorMessage: 'Password is required',
    isLength: {
      options: {
        min: 1,
      },
      errorMessage: 'Password is required',
    },
  },
}

const signupValidatorSchema = {
  email: {
    exists: true,
    trim: true,
    errorMessage: 'E-mail is required',
    custom: {
      options: async (email) => {
        const user = await User.findOne({ email })
        if (user) {
          return Promise.reject(new Error('E-mail already in use'))
        }
        return ''
      },
    },
    isEmail: {
      bail: true,
    },
  },
  password: {
    exists: true,
    trim: true,
    errorMessage: 'Password is required',
    isLength: {
      options: {
        min: 6,
      },
      errorMessage: 'Password should be at least 6 chars long',
    },
  },
  firstName: {
    exists: {
      errorMessage: 'First name is required',
    },
    trim: true,
  },
  lastName: {
    exists: {
      errorMessage: 'Last name is required',
    },
    trim: true,
  },
}

const locationValidatorSchemaForCreate = {
  name: {
    optional: { options: { nullable: true } },
    isString: true,
    isLength: {
      options: {
        min: 1,
      },
    },
    errorMessage: errorMessagesConstants.Location.InvalidName,
  },
  description: {
    optional: { options: { nullable: true } },
    isString: true,
    isLength: {
      options: {
        min: 1,
      },
    },
    errorMessage: errorMessagesConstants.Location.InvalidDescription,
  },
  category: {
    optional: { options: { nullable: true } },
    isString: true,
    isLength: {
      options: {
        min: 1,
      },
    },
    errorMessage: errorMessagesConstants.Location.InvalidCategory,
  },
  latitude: {
    optional: { options: { nullable: true } },
    isFloat: {
      options: {
        min: -90,
        max: 90,
      },
    },
    errorMessage: errorMessagesConstants.Location.InvalidLatitude,
  },
  longitude: {
    optional: { options: { nullable: true } },
    isFloat: {
      options: {
        min: -180,
        max: 180,
      },
    },
    errorMessage: errorMessagesConstants.Location.InvalidLongitude,
  },
}

const locationValidatorSchemaForUpdate = {
  name: {
    optional: { options: { nullable: true } },
    isString: { errorMessage: errorMessagesConstants.Location.InvalidName },
    isLength: {
      options: {
        min: 1,
      },
    },
  },
  description: {
    optional: { options: { nullable: true } },
    isString: { errorMessage: errorMessagesConstants.Location.InvalidDescription },
  },
  category: {
    optional: { options: { nullable: true } },
    isString: { errorMessage: errorMessagesConstants.Location.InvalidCategory },
    isLength: {
      options: {
        min: 1,
      },
    },
  },
  latitude: {
    optional: { options: { nullable: true } },
    isFloat: {
      options: {
        min: -90,
        max: 90,
      },
    },
    errorMessage: errorMessagesConstants.Location.InvalidLatitude,
  },
  longitude: {
    optional: { options: { nullable: true } },
    isFloat: {
      options: {
        min: -180,
        max: 180,
      },
    },
    errorMessage: errorMessagesConstants.Location.InvalidLongitude,
  },
}

const locationValidatorSchemaForMultipleUpdate = {
  newCategory: {
    optional: { options: { nullable: true } },
    isString: true,
    isLength: {
      options: {
        min: 1,
      },
    },
    errorMessage: errorMessagesConstants.Location.InvalidCategory,
  },
}
export { loginValidationSchema, signupValidatorSchema, locationValidatorSchemaForCreate, locationValidatorSchemaForUpdate, locationValidatorSchemaForMultipleUpdate }

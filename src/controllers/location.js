import createError from 'http-errors'

import Location from '../models/location'
import { generatePaginatedResult, paginate } from '../utils/pagination'
import { errorMessagesConstants, responseMessagesConstants } from '../constants'

const create = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      created_at: Date.now(),
      updated_at: Date.now(),
    }

    const location = await Location.create(data)

    return res.status(201).json({ message: responseMessagesConstants.Location.Created, _id: location._id })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const location = await Location.findById(req.params._id).lean()

    if (!location) {
      throw createError.NotFound(errorMessagesConstants.Location.NotFound)
    }

    return res.status(200).json({ ...location })
  } catch (error) {
    next(error)
  }
}

const getMany = async (req, res, next) => {
  try {
    const filter = {}

    if (req.query && req.query.category) {
      filter.category = req.query.category
    }

    const paginator = paginate(req)

    const meta = {
      total: await Location.countDocuments(filter),
      page: paginator.page,
      page_size: paginator.page_size,
    }

    const locations = await Location.find(filter).sort({ created_at: -1 }).skip(paginator.offset).limit(paginator.page_size).lean()

    const result = generatePaginatedResult(locations, meta)

    return res.status(200).json({ locations: result })
  } catch (error) {
    next(error)
  }
}

const updateById = async (req, res, next) => {
  try {
    const data = { updated_at: Date.now() }

    const allowedAttributes = ['name', 'description', 'latitude', 'longitude']

    allowedAttributes.forEach((attribute) => {
      data[attribute] = req.body[attribute]
    })

    const location = await Location.findByIdAndUpdate(req.params._id, data, { new: true })

    if (!location) {
      throw createError.NotFound(errorMessagesConstants.Location.NotFound)
    }

    return res.status(200).json({ message: responseMessagesConstants.Location.Updated, _id: location._id })
  } catch (error) {
    next(error)
  }
}

const updateMany = async (req, res, next) => {
  try {
    const filter = {}

    if (req.query && req.query.category) {
      filter.category = req.query.category
    } else {
      throw createError.BadRequest(errorMessagesConstants.Location.InvalidInitialCategory)
    }

    const data = { category: req.body.newCategory, updated_at: Date.now() }

    const location = await Location.updateMany(filter, { $set: data }, { new: true })

    return res.status(200).json({ message: `${responseMessagesConstants.Location.UpdatedMany}, total number of locations updated: ${location.modifiedCount}`, _id: location._id })
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  try {
    const location = await Location.findByIdAndDelete(req.params._id)

    if (!location) {
      throw createError.NotFound(errorMessagesConstants.Location.NotFound)
    }

    return res.status(200).json({ message: responseMessagesConstants.Location.Deleted })
  } catch (error) {
    next(error)
  }
}

export { create, getById, getMany, updateById, updateMany, deleteById }

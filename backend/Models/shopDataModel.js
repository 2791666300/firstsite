const mongoose = require('mongoose')
const slugify = require('slugify')
const validator = require('validator')


const shopDataSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: [true, '缺少id'],
            unique: true,
        },
        title: {
            type: String,
            required: [true, '缺少title字段'],
            unique: true
        },
        slug: String,

        items: [
            {
                id: Number,
                name: String,
                imageUrl: String,
                price: Number
            }
        ]
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)


shopDataSchema.pre('save', function(next) {
    this.slug = slugify(this.title, { lower: true })
    next()
})


const ShopData = mongoose.model('shopdatas', shopDataSchema)

module.exports = ShopData
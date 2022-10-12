import mongoose, { Schema } from "mongoose";

const universidadeSchema = new Schema({
    country: {
        type: String,
        required: true
    },
    alpha_two_code: {
        type: String,
        required: true 
    },
    name: {
        type: String,
        required: true
    },
    web_pages: {
        type: Array,
        required: false
    },
    domains: {
        type: Array,
        required: false
    },
    state_province: {
        type: String,
        default: null,
        required: false
    }
})

const model = mongoose.model('Universidade', universidadeSchema);

export const schema = model.schema;
export default model
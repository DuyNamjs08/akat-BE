import mongoose from 'mongoose';

const FacebookPostSchema = new mongoose.Schema(
  {
    facebook_post_id: { type: String, required: true, unique: true },
    content: {
      type: String,
      required: true,
    },
    facebook_fanpage_id: {
      type: String,
      required: true,
    },
    posted_at: {
      type: Date,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    shares: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: null,
    },
    post_avatar_url: {
      type: String,
      default: '',
    },
    page_category: {
      type: String,
      default: '',
    },
    schedule: {
      type: Boolean,
      default: false,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    page_name: {
      type: String,
      default: '',
    },
    hypothetical_violation_reason: {
      type: String,
      default: '',
    },
    severity: {
      type: String,
      default: '',
    },
    is_delete: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: 'facebook_posts',
  },
);

FacebookPostSchema.pre('save', function (next) {
  this.updated_at = new Date();
  next();
});

FacebookPostSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updated_at: new Date() });
  next();
});
const facebookPostModel = mongoose.model('FacebookPost', FacebookPostSchema);
export default facebookPostModel;

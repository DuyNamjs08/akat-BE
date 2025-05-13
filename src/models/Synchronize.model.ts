import mongoose from 'mongoose';

const SynchronizeSchema = new mongoose.Schema(
  {
    user_id: { type: [String], default: [] },
    facebook_fanpage_id: { type: [String], default: [] },
  },
  {
    collection: 'synchronize',
    timestamps: true,
  },
);

const SynchronizeModel = mongoose.model('Synchronize', SynchronizeSchema);

export default SynchronizeModel;

import axios from 'axios';
import Bull from 'bull';

export const facebookQueue = new Bull('facebook-sync', {
  redis: { port: 6379, host: 'localhost' },
});

// Thêm job vào queue mỗi phút
facebookQueue.add(
  {},
  {
    repeat: { cron: '*/3 * * * *' }, // Mỗi 3 phút
    jobId: 'every-3-min-facebook-post',
  },
);
const createPost = async () => {
  try {
    console.log('create post <><><><>');
    const res = await axios.post(
      `https://graph.facebook.com/592625063941721/feed`,
      null,
      {
        params: {
          message:
            'HOÁ QUÝ CÔ THỜI THƯỢNG CÙNG ĐẦM ĐEN CÁCH ĐIỆU SIÊU SANG ♥️ Thiết kế cổ lệch độc đáo cùng điểm nhấn cúc vàng kim nổi bật tạo nên thần thái sang xịn mịn. Phần eo chiết nhẹ hack dáng siêu đỉnh, chất liệu dập nhăn cao cấp giúp form đứng hoàn hảo.',
          access_token:
            'EAAOzncjdBccBOxtJEdDBOTPaqwdFXZAfEf9rBwPhvaZBTZB1atptniOriqkuE4RE9ixKgm9zL4NOR8a5ZCEr8hMaUB4lVVoyHodB5ArCG1uw1ljbLEWBTxKR11hDyaOL7ZA3AkQ4UjUWbNwBwf8qcfXPnPVtvjocoSytKmCXfNG7dAYxbBZBUZCnaXb5O5EmhPkyTzFw3P4A8iGjKnFGwWGWFqZAtIcsG517fOFXA4EzaAZDZD',
        },
      },
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
// Xử lý job trong queue
facebookQueue.process(async (job) => {
  const { data } = job; // Dữ liệu job
  // await createPost();
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log('Processing job with data:', data);
        resolve('Facebook sync completed');
      } catch (error) {
        reject(error);
      }
    }, 0);
  });
});

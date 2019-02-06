import $ from 'anima-yocto-ajax';

const getJson = (opts = {}) => {
  const {
    url = '',
    data = {},
    type = 'GET',
    timeout = '5000',
  } = opts;
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      data,
      type,
      timeout,
      success(d) {
        resolve(d);
      },
      error(e) {
        reject(e);
      },
    });
  });
};

export default async (opts = {}) => {
  const data = await getJson(opts);
  return data;
};

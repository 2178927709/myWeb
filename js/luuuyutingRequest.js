// 使用 script 标签引入 jquery.js
var script = document.createElement('script');
script.src = './js/axios.js'; // 替换为实际的 jquery.js 文件路径
document.head.appendChild(script);


class luuuyutingRequest {
  constructor(baseURL = 'http://localhost:9090', timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}
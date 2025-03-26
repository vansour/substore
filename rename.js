function operator(pro) {
  const countryCodes = {
    "美国": "US",
    "香港": "HK",
    "台湾": "TW",
    "日本": "JP",
    "新加坡": "SG",
    "加拿大": "CA",
  };

  // 遍历每个代理对象
  pro.forEach((e) => {
    // 判断名字中是否包含特定的国家名
    for (let country in countryCodes) {
      if (e.name.includes(country)) {
        // 获取国家的缩写
        const countryCode = countryCodes[country];
        // 将中文变成字母缩写
        e.name = e.name.replace(country, countryCode);
        break; // 找到匹配的国家后就退出循环
      }
    }
  });

  return pro; // 返回修改后的代理数组
}

const pages = ["pages/home/index"];
const title = "remax-dva";
const navigationBarBackgroundColor = "#ffffff";
const navigationBarTextStyle = "black";

module.exports.ali = {
  pages,
  window: {
    defaultTitle: title,
    titleBarColor: navigationBarBackgroundColor
  }
};

module.exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor,
    navigationBarTextStyle
  }
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor,
    navigationBarTextStyle
  }
};

module.exports.web = {
  pages,
  title
};

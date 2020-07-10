import { showToast } from "remax/ali";

export default options => {
  showToast({
    ...options,
    content: options.title
  });
};

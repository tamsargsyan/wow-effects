export const removeHtmlTags = text => {
  return text && text.replace(/<\/?[^>]+(>|$)|&nbsp;/g, "");
};

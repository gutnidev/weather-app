function getLocalLang() {
  if (!localStorage.getItem('gutniWeatherApp')) {
    return false;
  }
  const item = JSON.parse(localStorage.getItem('gutniWeatherApp'));
  if (item) {
    return item.lang;
  }
  return false;
}
function setLocalLang(language) {
  let item = false;
  if (localStorage.getItem('gutniWeatherApp')) {
    item = JSON.parse(localStorage.getItem('gutniWeatherApp'));
    if (item) {
      item.lang = language;
      localStorage.removeItem('gutniWeatherApp');
    }
  }
  if (!item) {
    item = {
      lang: language,
    };
  }
  localStorage.setItem('gutniWeatherApp', JSON.stringify(item));
}

const Local = {
  getLocalLang,
  setLocalLang,
};

export default Local;

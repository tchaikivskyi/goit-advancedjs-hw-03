import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const errorTost = msg => {
  return iziToast.error({
    title: 'Error',
    message: msg,
    position: 'topRight',
  });
};

export const infoTost = msg => {
  return iziToast.info({
    title: 'Info',
    message: msg,
    position: 'topRight',
  });
};

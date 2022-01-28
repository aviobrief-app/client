import { toast } from 'react-toastify';

export const toastLoading = (message) => {
    toast.loading(message, {

    })
}

export const toastSuccess = (message) => {
    toast.success(message, {
        theme: 'colored',
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 5000,
    });
};


export const toastInfo = () => { };


export const toastWarning = (message) => {
    toast.warning(message, {
        theme: 'colored',
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 7000,
    });
};

export const toastError = (message) => {
    toast.error(message, {
        theme: 'colored',
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 7000,
    });
};

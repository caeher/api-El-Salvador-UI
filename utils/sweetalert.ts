import Swal from 'sweetalert2'

export const Modal = Swal.mixin({
    customClass: {
        popup: '!rounded-lg !shadow',
    }
})

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 1500,
    timerProgressBar: true,
    showCloseButton: true,
    showConfirmButton: false,
    customClass: {
        popup: '!rounded-lg !shadow',
    },
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        // toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
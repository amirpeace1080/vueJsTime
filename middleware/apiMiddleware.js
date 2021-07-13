export default function (context) {
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('nuxt-middleware');
            resolve({user_id: 1})
        }, 2000);
    })
}
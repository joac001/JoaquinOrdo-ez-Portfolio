import { contact } from '../data/contact.js';

export default function Contact() {
    const baseUrl = import.meta.env.BASE_URL;

    function fetchImage(image) {
        try {
            const newImage = `${baseUrl}assets/contact/${image}`;
            return newImage;
        } catch (error) {
            const newImage = `/JoaquinOrdonez-Portfolio/assets/contact/${image}`;
            return newImage;
        }
    }

    const setSnackbarAnimation = () => {
        const snackbar = document.getElementById('snackbar');

        snackbar.style.bottom = '50%';
        setTimeout(() => {
            snackbar.style.transition = 'bottom 1s ease';
            snackbar.style.bottom = '0';
        }, 100);
        setTimeout(() => {
            snackbar.style.transition = 'bottom 1s ease';
            snackbar.style.bottom = '50%';
        }, 2000);
        setTimeout(() => {
            snackbar.classList.remove('show');
        }, 3000);
    }

    const copyMailToClipboard = () => {
        navigator.clipboard.writeText('joacoordo@gmail.com');
        setSnackbarAnimation();
    };

    const contactRedirect = (link) => window.open(link);

    return (
        <span className='flex flex-col gap-y-4 w-full justify-center items-center text-white'>
            <span id='snackbar' className='relative bottom-[50%] rounded-full px-4 py-2 bg-contact'>Copied succesfully!</span>

            <span className='grid grid-cols-2 items-center text-center gap-y-10 gap-x-20 w-fit font-thin text-xl p-2 mb-12'>
                <button onClick={copyMailToClipboard} className='flex justify-center items-center gap-x-4 col-span-2 cursor-pointer hover:text-gray hover:border-gray'>
                    <img src={fetchImage('copy.png')} alt="copy email" className='w-4' />
                    joacoordo@gmail.com
                </button>

                {contact.map((contact, index) => (
                    <span onClick={() => contactRedirect(contact.url)} key={index} className={`flex items-center justify-center gap-x-2 ${index == 2 ? 'col-span-2' : ''} cursor-pointer hover:text-gray hover:border-gray `}>
                        <img src={fetchImage(contact.icon)} alt="Joaquin Ordoñez linkedin" className='w-8' />
                        {contact.name}
                    </span>
                ))}
            </span>

        </span>
    );
}
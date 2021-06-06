import gsap from 'gsap';

export const FormStepsAnimations = () => {
   gsap.from('form', { opacity: 0, x: -50 });
};

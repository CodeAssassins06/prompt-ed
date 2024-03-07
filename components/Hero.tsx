
import { styles } from "./styles/styles";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px]  mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='size-5 rounded-full bg-[#915EFF]' />
          <div className='violet-gradient h-40 w-1 sm:h-80' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome! to<span className='text-[#915EFF]'> Prompt Ed.</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            A platform to make your own learning path <br className='hidden sm:block' />
            through AI generated courses
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

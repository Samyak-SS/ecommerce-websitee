import { Cards, Header, Hero, NavBar } from "../components";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {Autoplay, EffectFade} from 'swiper/modules';
import { data } from "../data/data";
import CardSlider from "../components/CardSlider";

const Home = () => {
  return (
    <><Swiper
      spaceBetween={30}
      speed={1000}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      {data.map(({ id, colorDeep, colorLite, mainText, subText, shadow, mobileShadow, img }) => (
        <SwiperSlide key={id} style={{ backgroundColor: `${colorLite}` }} className="w-full h-screen flex flex-col md:gap-10 gap-4 ">
          <NavBar />
          {/* <Header colorDeep={colorDeep}/> */}
          <Hero
            colorDeep={colorDeep}
            mainText={mainText}
            subText={subText}
            shadow={shadow}
            mobileShadow={mobileShadow}
            img={img}
            colorLite={colorLite} />
        </SwiperSlide>
      ))}
    </Swiper>
    <CardSlider />
    
    </>
   
  );
}

export default Home;

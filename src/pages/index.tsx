import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image
          src="https://github.com/Mateus8741.png"
          alt=""
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image
          src="https://github.com/Mateus8741.png"
          alt=""
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image
          src="https://github.com/Mateus8741.png"
          alt=""
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image
          src="https://github.com/Mateus8741.png"
          alt=""
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image
          src="https://github.com/Mateus8741.png"
          alt=""
          width={520}
          height={480}
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export const getServeSideProps = async () => {
  return {
    props: {},
  }
}

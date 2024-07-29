import React from "react";
import { DotButton, useDotButton } from '../atoms/carousel/EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../atoms/carousel/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

export default function PSGrid({ children, mobileCarousel = false }) {

  const [emblaRef, emblaApi] = useEmblaCarousel()

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  return (
    <>
      <div className="block md:hidden">
        {mobileCarousel ? (
          <>

            <div className="embla with-peek" ref={emblaRef}>
              <div className="embla__container">
                {React.Children.map(children, (child, index) => (
                  <div className="embla__slide peek" key={index}>{child}</div>
                ))}
              </div>
            </div>

            <div className="embla__controls ml-[15px] mr-[25px]">
              <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
              </div>

              <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={'embla__dot'.concat(
                      index === selectedIndex ? ' embla__dot--selected' : ''
                    )}
                  />
                ))}
              </div>
            </div>

          </>
        
      ) : (
          <div className="grid w-[97%] mx-auto grid-cols-1 gap-4 my-4">{children}</div>
        )}
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {children}
      </div>
    </>
  );
}
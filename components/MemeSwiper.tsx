"use client"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"

const memeImages = [
  {
    id: 1,
    originalImage: "/memes/BuffDogevsCheems.png",
    name: "Buff Doge vs Cheems",
  },
  {
    id: 2,
    originalImage: "/memes/ChangeMyMind.png",
    name: "Change My Mind",
  },
  {
    id: 3,
    originalImage: "/memes/DistractedBoyfriend.png",
    name: "Distracted Boyfriend",
  },
  {
    id: 4,
    originalImage: "/memes/DrakeHotlineBling.png",
    name: "Drake Hotline Bling",
  },
  {
    id: 5,
    originalImage: "/memes/EpicHandshake.png",
    name: "Epic Handshake",
  },
  {
    id: 6,
    originalImage: "/memes/LeftExit12OffRamp.png",
    name: "Left Exit 12 Off Ramp",
  },
  {
    id: 7,
    originalImage: "/memes/RunningAwayBalloon.png",
    name: "Running Away Balloon",
  },
  {
    id: 8,
    originalImage: "/memes/SurprisedPikachu.png",
    name: "Surprised Pikachu",
  },
  {
    id: 9,
    originalImage: "/memes/TwoButtons.png",
    name: "Two Buttons",
  },
  {
    id: 10,
    originalImage: "/memes/UnoDraw25Cards.png",
    name: "Uno Draw 25 Cards",
  },
  {
    id: 11,
    originalImage: "/memes/WaitingSkeleon.png",
    name: "Waiting Skeleton",
  },
  {
    id: 12,
    originalImage: "/memes/WomanYellingAtCat.png",
    name: "Woman Yelling At Cat",
  },
]

interface Props {
  onSelectMeme: (memeImage: any) => void
  selectedMeme: any
}

function MemeSwiper({ onSelectMeme, selectedMeme }: Props) {
  return (
    <div className="max-w-7xl w-full p-6">
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {memeImages.map((memeImage) => {
          return (
            <SwiperSlide
              key={memeImage.id}
              onClick={() => onSelectMeme(memeImage)}
              className={selectedMeme?.id === memeImage.id ? "border-1 border-white" : ""}
            >
              {selectedMeme?.id === memeImage.id && <p className="absolute -top-[1.75rem]">{memeImage.name}</p>}
              <Image alt={memeImage.name} className="object-cover cursor-pointer" src={memeImage.originalImage} fill />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default MemeSwiper

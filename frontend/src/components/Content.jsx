import React, { useEffect } from "react";
import AzaleaFestivalImage from "../assets/ntuee_azalea_festival.png";
import AzaleaFestivalImageFront from "../assets/azalea_festival_A4_front.png";
import AzaleaFestivalImageBack from "../assets/azalea_festival_A4_back.png";
import Protrait from "../assets/DSC00531.jpg";

const Content = () => {
  return (
    <>
      {/* subtitle */}
      <section className="bg-brown-306 text-white py-8 flex justify-center items-center font-futura text-center">
        <div className="container px-4">
          <h1 className="text-3xl sm:text-5xl mb-6">自我介紹既作品集</h1>
          <p className="text-sm sm:text-lg">
            嗨大家好，我是電機三的謝銘倫。我的興趣是做設計，
            是個沒修過網導來修網路攻防實習的菜鳥，請教授還有助教和同學們多多幫忙，謝謝您們！
          </p>
        </div>
      </section>

      {/* first image */}
      <section className="bg-brown-306 text-white py-4 ">
        <div className="flex justify-center items-center">
          <div className="px-4">
            <img
              src={Protrait}
              alt="ntuee azalea festival"
              className="rounded-lg shadow-lg max-w-full align-middle border-none"
            />
          </div>
        </div>
      </section>

      <section className="bg-brown-306 text-white py-4 ">
        <div className="flex justify-center items-center">
          <div className="px-4">
            <img
              src={AzaleaFestivalImage}
              alt="ntuee azalea festival"
              className="rounded-lg shadow-lg max-w-full align-middle border-none"
            />
          </div>
        </div>
      </section>

      {/* description */}
      <section className="bg-brown-306 text-white py-8">
        <div className="flex flex-col lg:flex-row bg-brown-306 px-4 lg:px-48 py-4 lg:py-12 text-white">
          <div className="lg:px-8 lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              霹靂繽紛：杜鵑夜曲
            </h2>
            <h4 className="text-md sm:text-lg font-bold mb-4">
              Designed by 電機三 謝銘倫
            </h4>
          </div>

          <div className="lg:px-8 lg:w-1/2">
            <p className="text-sm sm:text-lg">
              以深沉的背景為基調，搭配鮮明的閃電效果，創造強烈的對比。圖中的兩朵花帶有雷電特效，一朵以透明感的紫色呈現，另一朵則是以粉紅色為主，讓兩朵杜鵑花在雷鳴中更耀眼。周圍散落的花瓣，加強了圖片中的動態感，讓人聯想到在雷雨中綻放的花朵正在經歷風雨的考驗。
            </p>
            <br />
            <p className="text-sm sm:text-lg">
              圖片上方的文字“NTUEE”帶有金色的閃電，與背景中的雷電呼應，整體上給人一種力量與美的結合感，既有自然的狂野，也有生命的頑強與美麗。
            </p>
          </div>
        </div>
      </section>

      {/* add front and back pictures */}
      <section className="bg-brown-306 text-white py-8">
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          {/* front picture */}
          <div className="mb-4 lg:mb-0 px-4">
            <img
              src={AzaleaFestivalImageFront}
              alt="ntuee azalea festival front"
              className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none"
            />
          </div>
          {/* back picture */}
          <div className="mb-4 lg:mb-0 px-4 ">
            <img
              src={AzaleaFestivalImageBack}
              alt="ntuee azalea festival back"
              className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;

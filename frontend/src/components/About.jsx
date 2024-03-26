import React from 'react'

const About = () => {
    return (
        <div className="flex items-center justify-center min-h-screen p-16 bg-brown-306 text-white font-sans">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl mb-4 font-bold leading-tight">
                    2024台大電機杜鵑花節由系學會產學部負責舉辦，
                </h2>
                <h3 className="text-2xl md:text-3xl mb-6 leading-snug">
                    向高中生介紹電機系的各個面向：
                </h3>
                <ul className="list-disc ml-6 space-y-3 text-lg md:text-xl">
                    {[
                        '什麼是電機系',
                        '電機系與其他系的區別',
                        '11個組的介紹',
                        '修課地圖',
                        '電機系活動',
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="hover:text-gray-300 transition-colors duration-300"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default About

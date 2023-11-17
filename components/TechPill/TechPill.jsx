'use client'
import Image from 'next/image'
import { allTechs } from '@/utils/TechList'
import { useEffect, useState } from 'react'

const TechPill = ({ techName }) => {

    const [ goodContrast, setGoodContrast ] = useState(true)

    useEffect(() => {
        function getContrastRatio(color1, color2) {
            const luminance = color => {
                const sRGB = color / 255;
                return sRGB <= 0.03928 ? sRGB / 12.92 : ((sRGB + 0.055) / 1.055) ** 2.4;
            };

            const calculateContrast = (l1, l2) => (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

            const rgb1 = color1;
            const rgb2 = color2;

            if (!rgb1 || !rgb2) {
                return null; // Manejar colores no válidos
            }

            const l1 = 0.2126 * luminance(rgb1.R) + 0.7152 * luminance(rgb1.G) + 0.0722 * luminance(rgb1.B);
            const l2 = 0.2126 * luminance(rgb2.R) + 0.7152 * luminance(rgb2.G) + 0.0722 * luminance(rgb2.B);

            return calculateContrast(l1, l2);
        }

        function getRGBColor(colorName) {
            const element = document.querySelector(`.${colorName}`);
            if (element) {
                const colorValue = window.getComputedStyle(element).color;
                const match = colorValue.match(/(\d+), (\d+), (\d+)/);
                if (match) {
                    return {
                        R: parseInt(match[ 1 ]),
                        G: parseInt(match[ 2 ]),
                        B: parseInt(match[ 3 ]),
                    };
                }
            }
            return null;
        }
        function getRGBBackGroundColor(colorName) {
            const element = document.querySelector(`.${colorName}`);
            if (element) {
                const colorValue = window.getComputedStyle(element).backgroundColor;
                const match = colorValue.match(/(\d+), (\d+), (\d+)/);
                if (match) {
                    return {
                        R: parseInt(match[ 1 ]),
                        G: parseInt(match[ 2 ]),
                        B: parseInt(match[ 3 ]),
                    };
                }
            }
            return null;
        }


        const textColor = getRGBColor('text-white');
        const bgColor = getRGBBackGroundColor(allTechs[ techName ]?.techColor);
        const contrastRatio = getContrastRatio(textColor, bgColor);

        if (contrastRatio >= 4.5) {
            // console.log('Suficiente contraste para texto normal.');
        } else {
            // console.log('El contraste es insuficiente para texto normal.');
            setGoodContrast(false)
        }

    }, []);

    return (
        <div className={`w-[70px] h-[20px] ${allTechs[ techName ]?.techColor || 'hidden'} flex justify-between px-1 py-[1px] rounded-sm
        
        sm:w-[70px] sm:h-[20px]
        md:w-[95px] md:h-[27px]
        `}>
            <p className={`text-[12px] font-bold ${goodContrast ? "text-white" : "text-black"} self-center text-center w-full 
            
            sm:text-[10px]
            md:text-xs
            
            `}>{allTechs[ techName ]?.techName || null}</p>
            <Image
                src={allTechs[ techName ]?.img}
                alt={`icono de ${allTechs[ techName ]?.techName || null}`}
                height={13}
                className='bg-white bg-clip-content hidden'
            />
        </div>
    )
}

export default TechPill

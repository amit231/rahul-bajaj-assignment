import React from 'react'

export default function b(props) {
    let classString = 'svg1';
    console.log(classString)
    console.log(props.trigger)
    if (props.trigger) {
        //ghus raha hai
        console.log('in here')
        classString = 'svg1 animationClass'
    }
    console.log(classString)
    return (
        <div>
            <svg className={classString} width="20%" height="20%" viewBox="0 0 209 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="layer1" filter="url(#filter0_i)">
                    <g id="scissorBorder" opacity="0.59136">
                        <g filter="url(#filter1_i)">
                            <path d="M104.613 179.093C153.148 179.093 192.492 142.735 192.492 97.8859C192.492 53.0364 153.148 16.6787 104.613 16.6787C56.0794 16.6787 16.7348 53.0364 16.7348 97.8859C16.7348 142.735 56.0794 179.093 104.613 179.093Z" fill="#E3FFFF" />
                        </g>
                        <path d="M104.613 179.093C153.148 179.093 192.492 142.735 192.492 97.8859C192.492 53.0364 153.148 16.6787 104.613 16.6787C56.0794 16.6787 16.7348 53.0364 16.7348 97.8859C16.7348 142.735 56.0794 179.093 104.613 179.093Z" stroke="#F9A600" strokeWidth="32.9423" strokeLinejoin="round" />
                    </g>
                    <path id="scissorFig" d="M85.4245 87.5392L93.4268 75.0298C90.1005 74.4129 83.9923 74.2761 78.9903 79.8388C71.1039 88.6081 67.9094 107.55 67.2438 112.136L87.2867 134.422C90.8951 134.077 106.87 131.706 122.265 114.592C122.428 114.221 126.178 111.141 123.112 107.733C121.648 106.105 119.226 106.136 117.732 107.798C116.97 108.645 115.787 108.656 115.042 107.826C114.296 106.998 114.307 105.681 115.067 104.835L120.507 98.7861C123.27 95.7133 120.665 90.5282 116.806 91.774L112.354 96.0121C111.541 96.8 110.331 96.6647 109.663 95.8042C108.972 94.9167 109.12 93.5698 109.906 92.8117C125.462 77.6369 123.19 79.4639 133.199 69.0342C136.938 65.572 132.234 59.4503 128.55 62.9541L104.339 87.1628C103.634 87.8288 102.555 87.8421 101.863 87.1347C101.063 86.3661 101.044 85.2586 101.567 84.3846L118.454 55.1945C120.922 51.4781 116.065 47.3499 113.464 51.096L88.4964 89.925C87.8948 90.8912 86.6808 91.1142 85.8543 90.4379C85.6526 90.2818 85.4811 90.0821 85.3499 89.8506C85.2186 89.619 85.1303 89.3604 85.0902 89.0901C85.0501 88.8198 85.0591 88.5432 85.1165 88.2768C85.1738 88.0103 85.2785 87.7595 85.4244 87.5391L85.4245 87.5392Z" fill="#3B4262" />
                </g>
                <defs>
                    <filter id="filter0_i" x="0.263611" y="0.20752" width="208.7" height="195.357" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="-10" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    </filter>
                    <filter id="filter1_i" x="0.263611" y="0.20752" width="208.7" height="195.357" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="-10" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}
